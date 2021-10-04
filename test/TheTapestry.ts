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
    const initialCount = await tapestry.getCount()

    // 3
    expect(initialCount).to.eq(0)
    expect(tapestry.address).to.properAddress
  })

  // 4
  describe("count up", async () => {
    it("should count up", async () => {
      // await counter.countUp()
      // let count = await counter.getCount()
      // console.log("count--------", count)
      // expect(count).to.eq(2)
    })
  })
})
