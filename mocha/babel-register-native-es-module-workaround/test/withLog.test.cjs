const { expect } = require("chai");

describe('withLog', () => {
  it('log', () => {
    @withLog
    class Test {}

    const test = new Test()
    expect(test.log()).to.be.equal('log')
    
  });
});