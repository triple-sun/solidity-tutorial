require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.NODE_API_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    }
  }
};
