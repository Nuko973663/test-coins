const { expect } = require("chai");
const { ethers } = require("hardhat");

async function main() {
  const getAccount = async () => {
    const accounts = await hre.ethers.getSigners();
    return accounts;
  };

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
  const jpyc = await ethers.getContractAt(
    "ERC20T",
    "0x9bEd3c606091Cc2dDb01c504Ab8122BdC78dF20D"
  );
  const tora = await ethers.getContractAt(
    "ERC20T",
    "0xc6c31dBeb50e3E63bf1a04a58B7E66662BbC4a52"
  );

  let tx = await jpyc.mint(100000000000000);
  await tx.wait();

  tx = await tora.mint(100000000000000);
  await tx.wait();

  await showBalance(accounts[0].address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
