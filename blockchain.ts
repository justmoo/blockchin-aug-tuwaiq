import Block from "./block";
class Blockchain {
  list: Block[] = [];

  constructor() {
    this.generateGenesisBlock();
  }

  generateGenesisBlock() {
    this.list.push(new Block(0, "N/A", "genesis block", Date.now()));
  }

  addBlock(data: string) {
    this.list.push(
      new Block(
        this.list.length,
        this.list[this.list.length - 1].hash,
        data,
        Date.now()
      )
    );
  }

  validateBlock(block: Block) {
    try {
      if (block.previousHash !== this.list[block.height - 1].hash) {
        throw new Error("Invalid previous hash");
      }
      if (block.hash !== block.mine()) {
        throw new Error("Invalid hash");
      }
      console.log("Block is valid");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  validateChain() {
    for (let i = 1; i < this.list.length - 1; i++) {
      if (!this.validateBlock(this.list[i])) {
        return false;
      }
    }
    return true;
  }
}

//

const blockchain = new Blockchain();
blockchain.addBlock("2nd block");
blockchain.addBlock("3rd block");
blockchain.addBlock("4th block");
blockchain.validateBlock(blockchain.list[1]); // block is invalid
console.log(blockchain.list);
blockchain.validateChain();
// task 1: validate block
//check if the previous hash is valid, check if the hash is valid
// check if the hash is valid
// task 2: validate chain
//loop through the blocks and check if the previous hash is valid, check if the hash is valid
