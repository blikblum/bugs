import { expect } from "chai";
import { withLog } from "../src/index.js";

describe('withLog', () => {
  it('log', () => {
    @withLog
    class Test {}

    const test = new Test()
    expect(test.log()).to.be.equal('log')
    
  });
});