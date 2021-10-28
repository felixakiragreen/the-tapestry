import { ethers } from 'hardhat'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { TheTapestry__factory, TheTapestry } from '../typechain'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

let tolkien =
	"There is an inn, a merry old inn, beneath an old grey hill. And there they brew a beer so brown. that the Man in the Moon himself came down. One night to drink his fill. The ostler has a tipsy cat that plays a five-stringed fiddle.And up and down he runs his bow. Now squeaking high, now purring low. Now sawing in the middle.The landlord keeps a little dog. that is mighty fond of jokes. When there's good cheer among the guests. He cocks an ear at all the jests and laughs until he chokes. They also keep a hornéd cow as proud as any queen. But music turns her head like ale. And makes her wave her tufted tail. and dance upon the green.And O! the rows of silver dishes. The store of silver spoons. For Sunday there's a special pair. And these they polish up with care on Saturday afternoons. The Man in the Moon was drinking deep, and the cat began to wail. A dish and a spoon on the table danced. The cow in the garden madly pranced. The little dog chased his tail.The Man in the Moon took another mug. Then rolled beneath his chair. And there he dozed and dreamed of ale. Till in the sky the stars were pale, and dawn was in the air. Then the ostler said to his tipsy cat. The white horses of the Moon neigh and champ their silver bits. But their master's been and drowned his wits. The Sun'll be rising soon! So the cat on his fiddle played hey-diddle-diddle, a jig that would wake the dead. He squeaked and sawed and quickened the tune. While the landlord shook the Man in the Moon. It's after three! he said. They rolled the Man slowly up the hill and bundled him into the Moon. While the horses galloped up in rear. And the cow came capering like a deer. and a dish ran up with a spoon. Now quicker the fiddle went deedle-dum-diddle, the dog began to roar.  The cow and the horses stood on their heads. The guests all bounded from their beds. And danced upon the floor. With a ping and a long the fiddle-strings broke! the cow jumped over the Moon. And the little dog laughed to see such fun. And the Saturday dish went off at a run with the silver Sunday spoon.The round Moon rolled behind the hill, as the Sun raised up her head. She hardly believed her fiery eyes. For though it was day, to her surprise.  Then they all went back to bed."

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
		it('anyone should be able to add a line to the tapestry', async () => {
			// ADD the first line

			await tapestry.weave(tolkien.split('.')[0])

			// GET the first line

			const addedLine = await tapestry.tapestryLines(1)

			// CHECK that the first line is correct
			expect(addedLine).to.eq(tolkien.split('.')[0])

			// CHECK to see that balance indicates line NFT has been minted
			const balance = await tapestry.balanceOf(deployer.address)
			expect(balance).to.eq(1)
		})

		it('Authors CANT add more than 4 lines in total to the tapestry', async () => {
			// TODO: confirm whether this is per tapestry or chapter

			await tapestry.weave(tolkien.split('.')[0])
			await tapestry.weave(tolkien.split('.')[1])
			await tapestry.weave(tolkien.split('.')[2])
			await tapestry.weave(tolkien.split('.')[3])
			await expect(tapestry.weave(tolkien.split('.')[4])).to.be.revertedWith(
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
			await tapestry.weave(tolkien.split('.')[0])
			const balance1 = await tapestry.balanceOf(deployer.address)
			expect(balance1).to.eq(1)
		})

		describe('content constraints', async () => {
			it('Lines are limited to 100 characters', async () => {
				await expect(tapestry.weave(tolkien)).to.be.revertedWith(
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
		describe('chapters', async () => {
			it('user should be able to get the lines in a chapter', async () => {
				await tapestry.weave(tolkien.split('.')[0])
				await tapestry.weave(tolkien.split('.')[1])
				await tapestry.weave(tolkien.split('.')[2])
				await tapestry.weave(tolkien.split('.')[3])

				// const chapter0 = await tapestry.readChapter(0)
				// console.log(chapter0)

				const chapter0b = await tapestry.readChapter2(0)
				console.log(chapter0b)
			})
		})

		// Stanzas
		describe('stanzas', async () => {
			it('user should be able to get the lines in a stanza', async () => {
				await tapestry.weave(tolkien.split('.')[0])
				await tapestry.weave(tolkien.split('.')[1])
				await tapestry.weave(tolkien.split('.')[2])
				await tapestry.weave(tolkien.split('.')[3])

				const stanza0 = await tapestry.readStanza(0)
				console.log(stanza0)
			})
		})

		// describe('lines', async () => {
		//
		// })
	})
})
