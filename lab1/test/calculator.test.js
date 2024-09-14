import { expect } from 'chai';
import Mtrx from 'mtrx';
describe('Mtrx Library - Basic Operations', function () {

  describe('Addition (Mtrx.add)', function () {
    it('should correctly add two matrices', function () {
      const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
      const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const result = Mtrx.add(m, n);
      console.log(result)
      expect(result).to.deep.equal(new Mtrx([[2, 2, 3], [4, 6, 6], [7, 8, 10]]));
    });
  });

  describe('Subtraction', function () {
    it('should correctly subtract two matrices', function () {
      const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
      const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const result = Mtrx.sub(n, m);
      expect(result).to.deep.equal(new Mtrx([[0, 2, 3], [4, 4, 6], [7, 8, 8]]));
    });
  });

  describe('Multiplication', function () {
    it('should correctly multiply matrix by a scalar', function () {
      const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
      const result = Mtrx.mul(m, 3);
      expect(result).to.deep.equal(new Mtrx([[3, 0, 0], [0, 3, 0], [0, 0, 3]]));
    });

    it('should correctly multiply two matrices', function () {
      const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
      const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const result = Mtrx.mul(m, n);
      expect(result).to.deep.equal(new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    });
  });

  describe('Division', function () {
    it('should correctly divide matrix by another matrix (element-wise)', function () {
      const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
      const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      const result = Mtrx.div(n, m);
      expect(result).to.deep.equal(new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    });
  });
});