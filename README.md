# Swisstronik Developers' Challenge : PERC20

### Task
Create a PERC20 token, deploy the contract to the Swisstronik network, mint and transfer 1 token to 0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1

### Build

To compile contracts, use following command:
```sh 
npm run compile
```

### Deployment

<b>NOTE</b>: tests are not compatible with hardhat network / ganache, so you have to start Swisstronik local node or use public testnet

Create `.env` file from example
```sh
cp example.env .env
```
Add `PRIVATE_KEY` in `.env` with actual private key to interact with network. If you're using other network than local testnet you also should replace `url` in `hardhat.config.js`

To run tests, use following command:

```sh
npm run test
```

To deploy contracts, use check `scripts/deploy.js` script and use following command:
```sh
npm run deploy
```

To run mint, use check `scripts/mint.js` script and use following command:
```sh
npx hardhat run scripts/mint.js
```

To run mint, use check `scripts/transfer.js` script and use following command:
```sh
npx hardhat run scripts/transfer.js
```

### Testing

Smart Contract before running `npm run deploy`
```
0x4835a112319e508aB2ca6bf60e8D5355ecd7ec16
```
___
Mint Hash (Tx Hash) transaction after running `npx hardhat run scripts/mint.js`
```
0x2b671d047b663d15619332353db087f0125031c6fee8a477c198676845208c4d
```
___
Transfer Hash (Tx Hash) transaction after running `npx hardhat run scripts/transfer.js`

This is transfer 1 Token to address 0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1
```
0xf9658b1552b8e215345fef13ee5477bc27f73c8022fde862e462d3c0864cd31a
```

### Note
Faucet
```
https://faucet.testnet.swisstronik.com
```