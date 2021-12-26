import { ethers } from 'hardhat'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { TheTapestry__factory, TheTapestry } from '../typechain'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber } from '@ethersproject/bignumber'

import { weaveTestLines, weaveTestLines2, TOLKIEN } from './TestData'

chai.use(chaiAsPromised)
const { expect } = chai

describe('TheTapestry', () => {
	let tapestry: TheTapestry
	let deployer: SignerWithAddress
	let accounts: SignerWithAddress[]

	beforeEach(async () => {
		// 1
		accounts = await ethers.getSigners()
		deployer = accounts[0]
		// 2
		const tapestryFactory = (await ethers.getContractFactory(
			'TheTapestry',
			deployer,
		)) as TheTapestry__factory
		tapestry = await tapestryFactory.deploy()
		await tapestry.deployed()

		// 3
		expect(tapestry.address).to.properAddress
	})

	// 4
	describe('weaving', async () => {
		it('anyone should be able to add a line to the tapestry', async () => {
			// ADD the first line
			await tapestry.weave(TOLKIEN.split('\n')[0])

			// GET the first line
			const addedLine = await tapestry.tapestryLines(1)

			// CHECK that the first line is correct
			expect(addedLine).to.eq(TOLKIEN.split('\n')[0])

			// CHECK to see that balance indicates line NFT has been minted
			const balance = await tapestry.balanceOf(deployer.address)
			expect(balance).to.eq(1)
		})

		it('Authors CANT add more than 4 lines in total to the tapestry', async () => {
			await weaveTestLines(tapestry, accounts)
			const signer0Lines = await tapestry.linesByWeaver(accounts[0].address)
			// console.log(signer0Lines.map((bigNumber) => bigNumber.toNumber()))

			await expect(tapestry.weave(TOLKIEN.split('\n')[49])).to.be.revertedWith(
				'Authors CANT add more than 4 lines in total to the tapestry',
			)
		})

		it('should mint an NFT when a line is successfully added', async () => {
			const balance0 = await tapestry.balanceOf(deployer.address)
			expect(balance0).to.eq(0)
			await tapestry.weave(TOLKIEN.split('\n')[0])
			const balance1 = await tapestry.balanceOf(deployer.address)
			expect(balance1).to.eq(1)
		})

		it('Authors CANT add another line if they wove one of the previous 16 lines', async () => {
			await weaveTestLines(tapestry, accounts, 1)

			const chapter1 = await tapestry.readChapter(1)
			// console.log('read chapter 1', chapter1)

			await tapestry.weave(TOLKIEN.split('\n')[16])

			const chapter2 = await tapestry.readChapter(1)
			// console.log('read chapter 2', chapter2)

			const currentWeaverLines = await tapestry.linesByWeaver(
				accounts[0].address,
			)

			const CurrentWeaverLinesBN = currentWeaverLines.map((bigNumber) =>
				bigNumber.toNumber(),
			)

			const currentWeaverlastLine =
				CurrentWeaverLinesBN[CurrentWeaverLinesBN.length - 1]

			await expect(tapestry.weave(TOLKIEN.split('\n')[17])).to.be.revertedWith(
				'Authors CANT add another line if they wove one of the previous 16 lines',
			)
		})

		describe('content constraints', async () => {
			it('Lines are limited to 100 characters', async () => {
				await expect(tapestry.weave(TOLKIEN)).to.be.revertedWith(
					'Lines are limited to 100 characters',
				)
			})
		})
	})

	// 5
	describe('ordering', async () => {
		// chaptering
		describe('chapters', async () => {
			it('user should be able to get the lines in a chapter', async () => {
				await weaveTestLines(tapestry, accounts, 1)

				const chapter1 = await tapestry.readChapter(1)
				// console.log('read chapter 1', chapter1)

				// TODO: move this section out into own test

				expect(chapter1).to.eq(`
1 There is an inn, a merry old inn, beneath an old grey hill.
2 And there they brew a beer so brown.
3 that the Man in the Moon himself came down.
4 One night to drink his fill.
5 The ostler has a tipsy cat that plays a five-stringed fiddle.
6 And up and down he runs his bow.
7 Now squeaking high, now purring low.
8 Now sawing in the middle.
9 The landlord keeps a little dog.
10 that is mighty fond of jokes.
11 When there's good cheer among the guests.
12 He cocks an ear at all the jests and laughs until he chokes.
13 They also keep a hornéd cow as proud as any queen.
14 But music turns her head like ale.
15 And makes her wave her tufted tail.
16 and dance upon the green.`)
			})

			it('handles incomplete & nonexistent chapters', async () => {
				// await weaveTestLines(tapestry, accounts, 5, 1)

				// await weaveTestLines2({
				// 	tapestry,
				// 	accounts,
				// 	numberOfChapters: 1,
				// 	numberOfLines: 5,
				// })
				await weaveTestLines2({
					tapestry,
					accounts,
					numberOfChapters: 1,
					numberOfLines: 5,
				})

				const chapter1 = await tapestry.readChapter(1)
				expect(chapter1).to.eq(`
1 There is an inn, a merry old inn, beneath an old grey hill.
2 And there they brew a beer so brown.
3 that the Man in the Moon himself came down.
4 One night to drink his fill.
5 The ostler has a tipsy cat that plays a five-stringed fiddle.










`)

				await expect(tapestry.readChapter(0)).to.be.revertedWith(
					'Chapters start at 1',
				)
				await expect(tapestry.readChapter(7)).to.be.revertedWith(
					'Chapters must have at least one line',
				)
			})

			it('checks if a chapter is complete', async () => {
				// Weave three full chapters
				await weaveTestLines(tapestry, accounts, 3)

				// Weave first line of chapter 4
				await tapestry.weave('49 For though it was day, to her surprise.')
				console.log('read chapter 3', await tapestry.readChapter(3))
				console.log('read chapter 4', await tapestry.readChapter(4))

				// call isChapterComplete funtion and test
				// Current line = 49
				// ChapterIndex(5) * 16 = 80
				// 49 ! >= 80

				console.log(tapestry.isChapterComplete(3))
				console.log(await tapestry.isChapterComplete(3))

				expect(await tapestry.isChapterComplete(4)).to.eq(
					false,
					//'Chapters can only be printed when they are complete',
				)
			})
		})

		// Stanzas
		describe('stanzas', async () => {
			it('user should be able to get the lines in a stanza', async () => {
				await weaveTestLines(tapestry, accounts, 1)

				const stanza1 = await tapestry.readStanza(1)

				expect(stanza1).to.eq(`
1 There is an inn, a merry old inn, beneath an old grey hill.
2 And there they brew a beer so brown.
3 that the Man in the Moon himself came down.
4 One night to drink his fill.`)
			})
		})
		describe('lines', async () => {
			it('user should be able to get the line by number', async () => {
				await weaveTestLines(tapestry, accounts, 1)

				const line = await tapestry['readLine(uint256)'](1)
				expect(line).to.eq(TOLKIEN.split('\n')[0])
			})
			it('user should be able to get the line by chapter and line number', async () => {
				await weaveTestLines(tapestry, accounts, 1)

				const line = await tapestry['readLine(uint256,uint256)'](0, 4)
				expect(line).to.eq('4 One night to drink his fill.')
			})
			it('user should be able to get weaver by line number', async () => {
				// 1. Weave line(s)
				await weaveTestLines(tapestry, accounts, 1)

				// 2. Use weaverByLine function
				const weaver = await tapestry['weaverByLine'](3)
				// 3. write expect for weaver
				expect(weaver).to.eq(accounts[2].address)
			})
			it('user should be able to get lines by weaver', async () => {
				// 1. Weave exitsing lines (with accounts.0-2)
				await weaveTestLines(tapestry, accounts, 1)

				// 2. Weave again from accounts.0 (deployer)
				await tapestry.weave(TOLKIEN.split('\n')[3])

				// 3. Get lines for accounts.0
				const lineToCheck = await tapestry['linesByWeaver'](deployer.address)
				//
				// console.log(lineToCheck.map((bigNumber) => bigNumber.toNumber()))

				// [1, 4]
				// 3. write expect for the line number
				// how to do expects for arrays (or objects)
				// 1. check length
				expect(lineToCheck.length).to.eq(2)
				// 2. loop through every value, and check it
				// 3. JSON.stringify (more work, but most accurate)
				expect(JSON.stringify(lineToCheck.map((bn) => bn.toNumber()))).to.eq(
					JSON.stringify([1, 17]),
				)
				// console.log('read first stanza', await tapestry.readStanza(1))
				// console.log('read second stanza', await tapestry.readStanza(2))

				// this doesn't work because arrays can't be equated
				//expect(lineToCheck.map((bn) => bn.toNumber())).to.eq([1, 4])
				//const test = [1, 2]
				//const test2 = test
				//const test3 = [...test]
				//test === test2 // true
				//test === test3 // false
				// [1, 2] === [1, 2] // false
			})
		})
	})
})
