// task 2: add hash import
import { SHA256 } from "crypto-js";
export default class Block {
  height: number;
  previousHash: string;
  data: string;
  timestamp: number;
  // task 3 :add hash property
  hash: string = "";
  nonce: number = 0;
  constructor(
    height: number,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.height = height;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
    this.mine();
  }

  // task 4: add mine function
  mine() {
    // hash the first time
    let hash = SHA256(
      this.height + this.previousHash + this.data + this.timestamp + this.nonce
    );
    // if the hash is not 000, then mine again
    while (hash.toString().substring(0, 3) !== "000") {
      // increment the nonce
      this.nonce++;
      // hash again
      hash = SHA256(
        this.height +
          this.previousHash +
          this.data +
          this.timestamp +
          this.nonce
      );
      console.log(this.nonce);
      console.log(hash.toString());
    }
    // set the hash
    this.hash = hash.toString();
    return this.hash;
  }
}
