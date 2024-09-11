import { expect } from 'chai';
import { determinant, inverseMatrix } from '../src/matrix.js';

describe('Matrix Operations', function () {

    describe('Determinant', function () {
        it('should calculate the determinant of a 2x2 matrix', function () {
            const matrix = [
                [4, 6],
                [3, 8]
            ];
            const result = determinant(matrix);
            expect(result).to.equal(14);  // 4*8 - 6*3 = 14
        });

        it('should calculate the determinant of a 3x3 matrix', function () {
            const matrix = [
                [6, 1, 1],
                [4, -2, 5],
                [2, 8, 7]
            ];
            const result = determinant(matrix);
            expect(result).to.equal(-306);
        });

        it('should throw an error if the matrix is not square', function () {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6]
            ];
            expect(() => determinant(matrix)).to.throw('Determinant is only defined for square matrices.');
        });
    });

    describe('Inverse Matrix', function () {
        it('should calculate the inverse of a 2x2 matrix', function () {
            const matrix = [
                [4, 7],
                [2, 6]
            ];
            const result = inverseMatrix(matrix);
            const expected = [
                [0.6, -0.7],
                [-0.2, 0.4]
            ];
            expect(result).to.deep.equal(expected);
        });

        it('should throw an error if the matrix is singular (determinant is zero)', function () {
            const matrix = [
                [1, 2],
                [2, 4]
            ];
            expect(() => inverseMatrix(matrix)).to.throw('Matrix is not invertible (determinant is zero).');
        });

        it('should throw an error if the matrix is not square', function () {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6]
            ];
            expect(() => inverseMatrix(matrix)).to.throw('Inverse is only defined for square matrices.');
        });
    });
});
