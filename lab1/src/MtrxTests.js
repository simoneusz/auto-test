import Mtrx from 'mtrx';
const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

let result = Mtrx.add(m, n);
let expectedResult = new Mtrx([[2, 2, 3], [4, 6, 6], [7, 8, 10]])
console.log(Mtrx.equalAll(result, expectedResult))

result = Mtrx.sub(n, m);
expectedResult = new Mtrx([[0, 2, 3], [4, 4, 6], [7, 8, 8]])
console.log(Mtrx.equalAll(result, expectedResult))

result = Mtrx.mul(m, 3);
expectedResult = new Mtrx([[3, 0, 0], [0, 3, 0], [0, 0, 3]])
console.log(Mtrx.equalAll(result, expectedResult))

result = Mtrx.div(n, m);
expectedResult = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
console.log(Mtrx.equalAll(result, expectedResult))

