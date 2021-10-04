import { ethers } from "hardhat"
import chai from "chai"
import chaiAsPromised from "chai-as-promised"
import { TheTapestry__factory, TheTapestry } from "../typechain"

chai.use(chaiAsPromised)
const { expect } = chai

describe("TheTapestry", () => {
  let tapestry: TheTapestry

  beforeEach(async () => {
    // 1
    const signers = await ethers.getSigners()

    // 2
    const tapestryFactory = (await ethers.getContractFactory(
      "TheTapestry",
      signers[0]
    )) as TheTapestry__factory
    tapestry = await tapestryFactory.deploy()
    await tapestry.deployed()

    // 3
    expect(tapestry.address).to.properAddress
  })

  // 4
  describe("weaving", async () => {
    it("anyone should be able to add a line to the tapestry", async () => {
      //
    })

    it("anyone CANT add more than 1 line to the tapestry", async () => {
      // TODO: confirm whether this is per tapestry or chapter
    })

    // chaptering

    // describe('chapters', async () => {
    //   //
    // })
    // describe('lines', async () => {
    //   //
    // })

    describe("content constraints", async () => {
      it("lines are limited to 16 words", async () => {
        // TODO: maybe characters makes more sense?
        // is this valid?
        // "a b c d e f g h i j k"
        // "thisisaverylongnotwords but now we think itisaword"
      })

      it("stanzas are limited to 16 lines", async () => {
        //
      })
    })
  })
})
