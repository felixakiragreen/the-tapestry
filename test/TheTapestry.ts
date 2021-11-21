import { ethers } from 'hardhat'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { TheTapestry__factory, TheTapestry } from '../typechain'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber } from '@ethersproject/bignumber'

chai.use(chaiAsPromised)
const { expect } = chai

// weave a bunch chapters
async function weaveTestLines(
	tapestry: TheTapestry,
	accounts: SignerWithAddress[],
	numberOfChapters: number = 4,
) {
	// c is chapter index
	for (let c = 1; c <= numberOfChapters; c++) {
		// l is line index within chapter
		for (let l = 0; l < 16; l++) {
			// k is overall line index
			// TODO: update chapter index to 1-based (currently 0-based)
			const k = (c - 1) * 16 + l
			const tapestryConnectedToOtherAccount = tapestry.connect(accounts[l])
			await tapestryConnectedToOtherAccount.weave(TOLKIEN.split('\n')[k])
		}
	}
}

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

		// console.log('address', tapestry.address)

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
			// Weave 4 Chapters(64 Lines) - including 4 lines for signer 0
			// loop through 16 lines three times, using 16 signers

			// for (let c = 1; c < 5; c++) {
			// 	// c is chapter index

			// 	for (let l = 0; l < 16; l++) {
			// 		const k = (c - 1) * 16 + l
			// 		const tapestryConnectedToOtherAccount = tapestry.connect(accounts[l])
			// 		await tapestryConnectedToOtherAccount.weave(TOLKIEN.split('\n')[k])
			// 	}
			// }

			await weaveTestLines(tapestry, accounts)

			// console.log(await tapestry.readChapter(2))
			// tapestry.weave(TOLKIEN.split('\n')[48])
			const signer0Lines = await tapestry.linesByWeaver(accounts[0].address)
			console.log(signer0Lines.map((bigNumber) => bigNumber.toNumber()))
			console.log(await tapestry.weaverByLine(49))
			console.log(await tapestry.readChapter(3))
			console.log(await tapestry.readChapter(4))

			await expect(tapestry.weave(TOLKIEN.split('\n')[49])).to.be.revertedWith(
				'Authors CANT add more than 4 lines in total to the tapestry',
			)
		})

		// it('Authors CANT add more than 1 line per chapter', async () => {
		// 	// TODO: confirm whether this is per tapestry or chapter
		// 	await tapestry.weave(lineToAdd)
		// 	await expect(tapestry.weave(lineToAdd)).to.be.revertedWith(
		// 		'Authors CANT add more than 1 line per chapter',
		// 	)
		// })

		it('should mint an NFT when a line is successfully added', async () => {
			const balance0 = await tapestry.balanceOf(deployer.address)
			expect(balance0).to.eq(0)
			await tapestry.weave(TOLKIEN.split('\n')[0])
			const balance1 = await tapestry.balanceOf(deployer.address)
			expect(balance1).to.eq(1)
		})

		it('Authors CANT add another line if they wove one of the previous 16 lines', async () => {
			// for (let i = 0; i < 16; i++) {
			// 	const tapestryConnectedToOtherAccount = tapestry.connect(accounts[i])
			// 	await tapestryConnectedToOtherAccount.weave(TOLKIEN.split('\n')[i])
			// }

			await weaveTestLines(tapestry, accounts, 1)

			const chapter1 = await tapestry.readChapter(0)
			console.log('read chapter 1', chapter1)

			await tapestry.weave(TOLKIEN.split('\n')[16])

			const chapter2 = await tapestry.readChapter(1)
			console.log('read chapter 2', chapter2)

			const currentWeaverLines = await tapestry.linesByWeaver(
				accounts[0].address,
			)

			const CurrentWeaverLinesBN = currentWeaverLines.map((bigNumber) =>
				bigNumber.toNumber(),
			)

			// console.log(
			// 	'TEST LINES BY WEAVER (INTEGER)',
			// 	// currentweaverlines.map((bigNumber) => bigNumber.toNumber()).length,
			// 	currentWeaverLines.map((bigNumber) => bigNumber.toNumber()),
			// )

			const currentWeaverlastLine =
				CurrentWeaverLinesBN[CurrentWeaverLinesBN.length - 1]

			console.log(currentWeaverlastLine)

			await expect(tapestry.weave(TOLKIEN.split('\n')[17])).to.be.revertedWith(
				'Authors CANT add another line if they wove one of the previous 16 lines',
			)
		})

		describe('content constraints', async () => {
			it('Lines are limited to 100 characters', async () => {
				await expect(tapestry.weave(TOLKIEN)).to.be.revertedWith(
					'Lines are limited to 100 characters',
				)

				// is this valid?
				// "a b c d e f g h i j k"
				// "thisisaverylongnotwords but now we think itisaword"
			})

			// it('stanzas are limited to 4 lines', async () => {
			// 	//
			// 	expect(true).to.be.false
			// })
		})
	})

	// 5
	describe('ordering', async () => {
		// chaptering
		// 		describe('chapters', async () => {
		// 			it('user should be able to get the lines in a chapter', async () => {
		// 				for (let i = 1; i < 5; i++) {
		// 					// i is the signer index
		// 					for (let j = 0; j < 4; j++) {
		// 						// j is the line index
		// 						const tapestryConnectedToOtherAccount = await tapestry.connect(
		// 							accounts[i],
		// 						)
		// 						const k = (i - 1) * 4 + j
		// 						console.log({ i, j, k })
		// 						await tapestryConnectedToOtherAccount.weave(TOLKIEN.split('\n')[k])
		// 					}
		// 				}
		// 				// const chapter0 = await tapestry.readChapter(0)
		// 				// console.log(chapter0)
		// 				const chapter0b = await tapestry.readChapter(0)
		// 				console.log('chapter 0b', chapter0b)
		// 				// TODO: move this section out into own test
		// 				const linesForSigner1 = await tapestry.linesByWeaver(
		// 					accounts[1].address,
		// 				)
		// 				// console.log(linesForSigner1.map((bigNumber) => bigNumber.toNumber()))
		// 				expect(chapter0b).to.eq(`
		// 1 There is an inn, a merry old inn, beneath an old grey hill.
		// 2 And there they brew a beer so brown.
		// 3 that the Man in the Moon himself came down.
		// 4 One night to drink his fill.
		// 5 The ostler has a tipsy cat that plays a five-stringed fiddle.
		// 6 And up and down he runs his bow.
		// 7 Now squeaking high, now purring low.
		// 8 Now sawing in the middle.
		// 9 The landlord keeps a little dog.
		// 10 that is mighty fond of jokes.
		// 11 When there's good cheer among the guests.
		// 12 He cocks an ear at all the jests and laughs until he chokes.
		// 13 They also keep a hornéd cow as proud as any queen.
		// 14 But music turns her head like ale.
		// 15 And makes her wave her tufted tail.
		// 16 and dance upon the green.`)
		// 			})
		// 		})
		// Stanzas
		// 		describe('stanzas', async () => {
		// 			it('user should be able to get the lines in a stanza', async () => {
		// 				for (let i = 0; i < 4; i++) {
		// 					await tapestry.weave(TOLKIEN.split('\n')[i])
		// 				}
		// 				const stanza0 = await tapestry.readStanza(0)
		// 				console.log('stanza 0', stanza0)
		// 				// expect(stanza).to.eq(TOLKIEN.split('\n').slice(0, 4).join('\n'))
		// 				expect(stanza0).to.eq(`
		// 1 There is an inn, a merry old inn, beneath an old grey hill.
		// 2 And there they brew a beer so brown.
		// 3 that the Man in the Moon himself came down.
		// 4 One night to drink his fill.
		// `)
		// 			})
		// 		})
		// describe('lines', async () => {
		// 	it('user should be able to get the line by number', async () => {
		// 		// await tapestry.weave(TOLKIEN.split('\n')[0])
		// 		for (let i = 0; i < 4; i++) {
		// 			await tapestry.weave(TOLKIEN.split('\n')[i])
		// 		}
		// 		const line = await tapestry['readLine(uint256)'](1)
		// 		expect(line).to.eq(TOLKIEN.split('\n')[0])
		// 		// expect(line).to.eq(
		// 		// 	'1 There is an inn, a merry old inn, beneath an old grey hill.',
		// 		// )
		// 	})
		// 	it('user should be able to get the line by chapter and line number', async () => {
		// 		for (let i = 0; i < 4; i++) {
		// 			await tapestry.weave(TOLKIEN.split('\n')[i])
		// 		}
		// 		const line = await tapestry['readLine(uint256,uint256)'](0, 4)
		// 		// expect(line).to.eq(TOLKIEN.split('\n')[0])
		// 		expect(line).to.eq('4 One night to drink his fill.')
		// 	})
		// 	it('user should be able to get weaver by line number', async () => {
		// 		// 1. Weave line(s)
		// 		for (let i = 0; i < 4; i++) {
		// 			await tapestry.weave(TOLKIEN.split('\n')[i])
		// 		}
		// 		// 2. Use weaverByLine function
		// 		const weaver = await tapestry['weaverByLine'](3)
		// 		// 3. write expect for weaver
		// 		expect(weaver).to.eq(deployer.address)
		// 	})
		// 	it('user should be able to get lines by weaver', async () => {
		// 		// 1. Weave exitsing lines (with accounts.0-2)
		// 		for (let i = 0; i < 3; i++) {
		// 			const tapestryConnectedToOtherAccount = await tapestry.connect(
		// 				accounts[i],
		// 			)
		// 			await tapestryConnectedToOtherAccount.weave(TOLKIEN.split('\n')[i])
		// 		}
		// 		// 2. Weave again from accounts.0 (deployer)
		// 		await tapestry.weave(TOLKIEN.split('\n')[3])
		// 		// console.log(TOLKIEN.split('\n')[3])
		// 		// 3. Get lines for accounts.0
		// 		const lineToCheck = await tapestry['linesByWeaver'](deployer.address)
		// 		console.log(lineToCheck.map((bigNumber) => bigNumber.toNumber()))
		// 		// [1, 4]
		// 		// 3. write expect for the line number
		// 		// how to do expects for arrays (or objects)
		// 		// 1. check length
		// 		expect(lineToCheck.length).to.eq(2)
		// 		// 2. loop through every value, and check it
		// 		// 3. JSON.stringify (more work, but most accurate)
		// 		expect(JSON.stringify(lineToCheck.map((bn) => bn.toNumber()))).to.eq(
		// 			JSON.stringify([1, 4]),
		// 		)
		// 		// this doesn't work because arrays can't be equated
		// 		//expect(lineToCheck.map((bn) => bn.toNumber())).to.eq([1, 4])
		// 		//const test = [1, 2]
		// 		//const test2 = test
		// 		//const test3 = [...test]
		// 		//test === test2 // true
		// 		//test === test3 // false
		// 		// [1, 2] === [1, 2] // false
		// 	})
		// })
	})
})

const TOLKIEN = `1 There is an inn, a merry old inn, beneath an old grey hill.
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
16 and dance upon the green.
17 And O! the rows of silver dishes.
18 The store of silver spoons.
19 For Sunday there's a special pair.
20 And these they polish up with care on Saturday afternoons.
21 The Man in the Moon was drinking deep, and the cat began to wail.
22 A dish and a spoon on the table danced.
23 The cow in the garden madly pranced.
24 The little dog chased his tail.
25 The Man in the Moon took another mug.
26 Then rolled beneath his chair.
27 And there he dozed and dreamed of ale.
28 Till in the sky the stars were pale, and dawn was in the air.
29 Then the ostler said to his tipsy cat.
30 The white horses of the Moon neigh and champ their silver bits.
31 But their master's been and drowned his wits.
32 The Sun'll be rising soon! So the cat on his fiddle played a jig that would wake the dead.
33 He squeaked and sawed and quickened the tune.
34 While the landlord shook the Man in the Moon.
35 It's after three! he said.
36 They rolled the Man slowly up the hill and bundled him into the Moon.
37 While the horses galloped up in rear.
38 And the cow came capering like a deer.
39 and a dish ran up with a spoon.
40 Now quicker the fiddle went deedle-dum-diddle, the dog began to roar.
41 The cow and the horses stood on their heads.
42 The guests all bounded from their beds.
43 And danced upon the floor.
44 With a ping and a long the fiddle-strings broke! the cow jumped over the Moon.
45 And the little dog laughed to see such fun.
46 And the Saturday dish went off at a run with the silver Sunday spoon.
47 The round Moon rolled behind the hill, as the Sun raised up her head.
48 She hardly believed her fiery eyes.
49 For though it was day, to her surprise.
50 Then they all went back to bed.
51 There is an inn, a merry old inn, beneath an old grey hill.
52 And there they brew a beer so brown.
53 that the Man in the Moon himself came down.
54 One night to drink his fill.
55 The ostler has a tipsy cat that plays a five-stringed fiddle.
56 And up and down he runs his bow.
57 Now squeaking high, now purring low.
58 Now sawing in the middle.
59 The landlord keeps a little dog.
60 that is mighty fond of jokes.
61 When there's good cheer among the guests.
62 He cocks an ear at all the jests and laughs until he chokes.
63 They also keep a hornéd cow as proud as any queen.
64 But music turns her head like ale.
65 And makes her wave her tufted tail.
`
