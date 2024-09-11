import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../src/calculator.js';

describe('Calculator Functions', function() {
  it('should correctly add two numbers', function() {
    expect(add(2, 3)).to.equal(5);
    expect(add(-2, 3)).to.equal(1);
    expect(add(-2, -3)).to.equal(-5);
  });

  it('should correctly subtract two numbers', function() {
    expect(subtract(5, 3)).to.equal(2);
    expect(subtract(-2, 3)).to.equal(-5);
    expect(subtract(-5, -3)).to.equal(-2);
  });

  it('should correctly multiply two numbers', function() {
    expect(multiply(2, 3)).to.equal(6);
    expect(multiply(-2, 3)).to.equal(-6);
    expect(multiply(-2, -3)).to.equal(6);
  });

  it('should correctly divide two numbers', function() {
    expect(divide(6, 3)).to.equal(2);
    expect(divide(-6, 3)).to.equal(-2);
    expect(divide(-6, -3)).to.equal(2);
    expect(divide(1, 0)).to.be.NaN;
  });
});
