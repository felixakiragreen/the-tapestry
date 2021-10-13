import { ethers } from 'hardhat'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { TheTapestry__factory, TheTapestry } from '../typechain'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

chai.use(chaiAsPromised)
const { expect } = chai

describe('TheTapestry', () => {
	let tapestry: TheTapestry
	let deployer: SignerWithAddress

	beforeEach(async () => {
		// 1
		const signers = await ethers.getSigners()
		deployer = signers[0]
		// 2
		const tapestryFactory = (await ethers.getContractFactory(
			'TheTapestry',
			signers[0],
		)) as TheTapestry__factory
		tapestry = await tapestryFactory.deploy()
		await tapestry.deployed()

		// 3
		expect(tapestry.address).to.properAddress
	})

	// 4
	describe('weaving', async () => {
		const lineToAdd = 'Hello, world!'

		it('anyone should be able to add a line to the tapestry', async () => {
			// ADD the first line

			await tapestry.weave(lineToAdd)

			// GET the first line

			const addedLine = await tapestry.tapestryLines(1)

			// CHECK that the first line is correct
			expect(addedLine).to.eq(lineToAdd)

			// CHECK to see that balance indicates line NFT has been minted
			const balance = await tapestry.balanceOf(deployer.address)
			expect(balance).to.eq(1)
		})

		it('Authors CANT add more than 4 lines in total to the tapestry', async () => {
			// TODO: confirm whether this is per tapestry or chapter

			await tapestry.weave(lineToAdd)
			await tapestry.weave(lineToAdd)
			await tapestry.weave(lineToAdd)
			await tapestry.weave(lineToAdd)
			await expect(tapestry.weave(lineToAdd)).to.be.revertedWith(
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
			await tapestry.weave(lineToAdd)
			const balance1 = await tapestry.balanceOf(deployer.address)
			expect(balance1).to.eq(1)
		})

		describe('content constraints', async () => {
			it('Lines are limited to 100 characters', async () => {
				// TODO: maybe characters makes more sense?

				await expect(
					tapestry.weave(
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur consectetur',
					),
				).to.be.revertedWith('Lines are limited to 100 characters')

				// is this valid?
				// "a b c d e f g h i j k"
				// "thisisaverylongnotwords but now we think itisaword"
			})

			it('stanzas are limited to 16 lines', async () => {
				//
				expect(true).to.be.false
			})
		})
	})

	// 5
	describe('ordering', async () => {
		// chaptering
		describe('chapters', async () => {
			it('user should be able to get the lines in a chapter', async () => {
				await tapestry.weave('lineToAdd')
				await tapestry.weave('lineToAdd8')
				await tapestry.weave('lineToAdd90')
				await tapestry.weave('lineToAdd908')

				const chapter0 = await tapestry.readChapter(0)
				console.log(chapter0)

				const chapter0b = await tapestry.readChapter2(0)
				console.log(chapter0b)
			})
		})

		// describe('lines', async () => {
		//
		// })
	})
})
