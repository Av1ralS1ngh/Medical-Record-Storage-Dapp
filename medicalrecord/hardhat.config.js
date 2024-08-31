require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const privateKeys = process.env.PRIVATE_KEYS || "";
const goerliApiKey = process.env.GOERLI_API_KEY || "";
const sepoliaApiKey = process.env.SEPOLIA_API_KEY || "";

module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {
      chainId: 31337,
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        count: 10,
        balance: "10000000000000000000000" // 10,000 ETH per account
      }
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${goerliApiKey}`,
      accounts: privateKeys ? privateKeys.split(",") : [],
      chainId: 5,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${sepoliaApiKey}`,
      accounts: privateKeys ? privateKeys.split(",") : [],
      chainId: 11155111,
    },
  },
};