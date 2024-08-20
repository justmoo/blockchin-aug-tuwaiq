// task 2: add hash import
import { SHA256 } from "crypto-js";
export default class Block {
  height: number;
  previousHash: string;
  data: string;
  timestamp: number;
  // task 3 :add hash property
  hash: string = "";

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
    this.hashBlock();
  }

  // task 4: add hash function
  hashBlock() {
    this.hash = SHA256(
      this.height + this.previousHash + this.data + this.timestamp
    ).toString();
  }
}
