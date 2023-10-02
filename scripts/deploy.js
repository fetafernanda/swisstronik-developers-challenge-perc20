const {
  ethers
} = require("hardhat");

async function main() {
  try {
      // Get the signer (your account)
      const [deployer] = await ethers.getSigners();

      // Deploy the Swisstronik contract
      console.log("Deploying Swisstronik contract...");
      const Swisstronik = await ethers.getContractFactory("Swisstronik");
      const swisstronikContract = await Swisstronik.deploy();

      await swisstronikContract.deployed();

      console.log("Swisstronik PERC20 contract deployed to:", swisstronikContract.address);
  } catch (error) {
      console.error(error);
      process.exitCode = 1;
  }
}

// Using async/await pattern to handle errors properly
main();