const { expect } = require("chai");
const { ethers } = require("hardhat");

const getAccount = async () => {
  const accounts = await hre.ethers.getSigners();
  return accounts;
};

describe("Test for ERC20T", function () {
  it("ERC20T", async function () {
    const accounts = await getAccount();

    const showBalance = async (address) => {
      console.log(
        "JPYCt (",
        address,
        ") ",
        (await jpyc.balanceOf(address)).toString()
      );
      console.log(
        "TORAt (",
        address,
        ") ",
        (await tora.balanceOf(address)).toString()
      );
    };

    /*
     * Deploy and mint ERC721
     */
    const ERC20T = await ethers.getContractFactory("ERC20T");

    const jpyc = await ERC20T.deploy("Test token of JPYC", "JPYCt");
    await jpyc.deployed();
    console.log("JPYCt deployed to", jpyc.address);

    const tora = await ERC20T.deploy("Test token of TORA", "TORAt");
    await tora.deployed();
    console.log("TORAt deployed to", tora.address);

    jpyc.mint(1000);
    tora.mint(10000);

    await showBalance(accounts[0].address);

    await jpyc.destruct();
    await tora.destruct();
  });
});
