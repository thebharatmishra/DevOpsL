import Web3 from "web3";
import * as dotenv from "dotenv";
dotenv.config();

const infraAPIKey = process.env.INFRA_API_KEY;
async function getLatestBlockNumber() {
  const web3 = new Web3(`https://sepolia.infura.io/v3/${infraAPIKey}`);
  try {
    const lastBlock = await web3.eth.getBlockNumber();
    console.log("The last block is:", lastBlock);
  } catch (error) {
    console.log("Error fetching block number:", error);
  }
}
getLatestBlockNumber();
console.log(infraAPIKey);
