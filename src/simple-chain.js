const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push("()");
    } else {
      this.chain.push("(" + " " + value + " " + ")");
    }
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1] && !(position instanceof Number)) {
      this.chain = new Array();
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const output = this.chain.join("~~");
    this.chain = [];
    return output;
  },
};

module.exports = {
  chainMaker,
};
