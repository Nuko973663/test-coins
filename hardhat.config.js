require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("hardhat-contract-sizer");
require("@nomiclabs/hardhat-etherscan");

const { PRIVATE_KEY, ALCHEMY_API_KEY_POLYGON } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
  networks: {
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY_POLYGON}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    polygon2: {
      url: `https://polygon-rpc.com/}`,
      accounts: [`${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: "YOUR_ETHERSCAN_API_KEY",
    },
  },
};
