const {Blockchain, Transaction} = require("./src/blockchain");
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const privateKey = key.getPrivate("hex");   
const walletAdress = key.getPublic("hex");

const bitcoin = new Blockchain({miningReward : 100, difficulty : 3});

const prétx1 = new Transaction(null, walletAdress, 9000000);
bitcoin.pendingTransactions.push(prétx1)

bitcoin.minePendingTransactions(walletAdress);

const tx1 = new Transaction(walletAdress, "address 2", 500);
tx1.signTransaction(key);
bitcoin.addTransaction(tx1);

bitcoin.minePendingTransactions(walletAdress);

console.log(`My Wallet : ${bitcoin.getBalanceOfAddress(walletAdress)}`)
console.log(`Chain Valid ? ${bitcoin.isChainValid()}`)