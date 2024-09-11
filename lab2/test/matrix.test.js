import { expect } from 'chai';
import { addMatrices, multiplyMatrices, transposeMatrix, determinant, inverseMatrix } from '../src/matrix.js';

describe('Matrix Operations', function () {

    describe('Matrix Addition', function () {
        it('Add two matrices', function () {
            const matrixA = [
                [1, 2],
                [3, 4]
            ];
            const matrixB = [
                [5, 6],
                [7, 8]
            ];
            const result = addMatrices(matrixA, matrixB);
            const expected = [
                [6, 8],
                [10, 12]
            ];
            expect(result).to.deep.equal(expected);
        });

        it('Add two matrices error with different dims', function () {
            const matrixA = [
                [1, 2],
                [3, 4]
            ];
            const matrixB = [
                [5, 6]
            ];
            expect(() => addMatrices(matrixA, matrixB)).to.throw('Matrices must have the same number of rows.');
        });
    });

    describe('Matrix Multiplication', function () {
        it('multiply two matrices', function () {
            const matrixA = [
                [1, 2],
                [3, 4]
            ];
            const matrixB = [
                [5, 6],
                [7, 8]
            ];
            const result = multiplyMatrices(matrixA, matrixB);
            const expected = [
                [19, 22],
                [43, 50]
            ];
            expect(result).to.deep.equal(expected);
        });

        it('not compatible for multiplication', function () {
            const matrixA = [
                [1, 2],
                [3, 4]
            ];
            const matrixB = [
                [5, 6]
            ];
            expect(() => multiplyMatrices(matrixA, matrixB)).to.throw('Number of columns in Matrix A must match the number of rows in Matrix B.');
        });
    });

    describe('Matrix Transpose', function () {
        it('transpose a matrix', function () {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6]
            ];
            const result = transposeMatrix(matrix);
            const expected = [
                [1, 4],
                [2, 5],
                [3, 6]
            ];
            expect(result).to.deep.equal(expected);
        });
    });

    describe('Determinant', function () {
        it('calculate the determinant of a 2x2 matrix', function () {
            const matrix = [
                [4, 6],
                [3, 8]
            ];
            const result = determinant(matrix);
            expect(result).to.equal(14);  // 4*8 - 6*3 = 14
        });

        it('calculate the determinant of a 3x3 matrix', function () {
            const matrix = [
                [6, 1, 1],
                [4, -2, 5],
                [2, 8, 7]
            ];
            const result = determinant(matrix);
            expect(result).to.equal(-306);
        });

        it('throw an error if the matrix is not square', function () {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6]
            ];
            expect(() => determinant(matrix)).to.throw('Matrix must be square.');
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

        it('should throw an error if the matrix is singular', function () {
            const matrix = [
                [1, 2],
                [2, 4]
            ];
            expect(() => inverseMatrix(matrix)).to.throw('Matrix is singular (determinant is zero), so it has no inverse.');
        });

        it('should throw an error if the matrix is not square', function () {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6]
            ];
            expect(() => inverseMatrix(matrix)).to.throw('Matrix must be square.');
        });
    });
});
