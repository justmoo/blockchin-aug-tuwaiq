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
}

const blockchain = new Blockchain();
blockchain.addBlock("2nd block");
console.log(blockchain.list);
