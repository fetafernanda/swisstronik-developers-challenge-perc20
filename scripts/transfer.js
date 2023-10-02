const {
    ethers
} = require("hardhat");
const {
    encryptDataField
} = require("@swisstronik/swisstronik.js");

async function main() {
    try {
        // address of the deployed contract
        const contractAddress = "0x4835a112319e508aB2ca6bf60e8D5355ecd7ec16";

        // get the signer (your account)
        const [signer] = await ethers.getSigners();

        // create a contract instance
        const contractFactory = await ethers.getContractFactory("Swisstronik");
        const contract = contractFactory.attach(contractAddress);

        // get the RPC link from the network configuration
        const rpc = hre.network.config.url;
        const value = 0;

        // encrypt transaction data
        const [encryptedData] = await encryptDataField(rpc, contract.interface.encodeFunctionData('transfer', [
            "0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1",
            "1",
        ]));

        // construct and sign transaction with encrypted data
        const transfer = await signer.sendTransaction({
            from: signer.address,
            to: contractAddress,
            data: encryptedData,
            value,
        });

        await transfer.wait();

        // It should return a TransactionReceipt object
        console.log("# Transfer Hash:", transfer.hash);

    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});