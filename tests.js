const {BlockChain, Transaction} = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.genKeyPair();
const privateKey = myKey.getPrivate("hex");
const myWallet = myKey.getPublic("hex");

// Tests zone

let jockeCoin = new BlockChain();

const tx1 = new Transaction(myWallet, "a public key", 10);
tx1.signTransaction(privateKey);
jockeCoin.addTransaction(tx1);

console.log("\nStarting the miner...");
jockeCoin.minePendingTransactions(myWallet);

console.log("Balance", jockeCoin.getBalanceOfAddress(myWallet))

console.log("\nStarting the miner again...");
jockeCoin.minePendingTransactions(myWallet);

console.log("Balance", jockeCoin.getBalanceOfAddress(myWallet))

console.log("\n\n", BlockChain.pending)