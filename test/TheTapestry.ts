import { ethers } from "hardhat"
import chai from "chai"
import chaiAsPromised from "chai-as-promised"
import { TheTapestry__factory, TheTapestry } from "../typechain"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(chaiAsPromised)
const { expect } = chai

describe("TheTapestry", () => {
  let tapestry: TheTapestry
  let deployer: SignerWithAddress;


  beforeEach(async () => {
    // 1
    const signers = await ethers.getSigners()
    deployer = signers[0];
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
      const lineToAdd = "Hello, world!"

      // ADD the first line

      await tapestry.weave(lineToAdd)

      // GET the first line

      const addedLine = await tapestry.tapestryLines(1)

      // CHECK that the first line is correct
      expect(addedLine).to.eq(lineToAdd)

      // CHECK to see that balance indicates line NFT has been minted
      const balance = await tapestry.balanceOf(deployer.address);
      expect(balance).to.eq(1);
    })

    it("anyone CANT add more than 1 line to the tapestry", async () => {
      // TODO: confirm whether this is per tapestry or chapter
    })

    it("should mint an NFT when a line is successfully added", async () => {
      // const balance = await tapestry.balanceOf(deployer.address);
      // expect(balance).to.eq(1);
    })

    // chaptering

    // describe('chapters', async () => {
    //   //
    // })
    // describe('lines', async () => {
    //   //
    // })

    describe("content constraints", async () => {
      it("Lines are limited to 100 characters", async () => {
        // TODO: maybe characters makes more sense?

        await expect(tapestry.weave("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur consectetur")).to.be.revertedWith("Lines are limited to 100 characters");

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
