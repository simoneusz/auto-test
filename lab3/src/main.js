const { gauss, read_input } = require("../gauss_js/gauss_functions");
const Matrix = require('../gauss_js/matrix');

const n = 3;

const mtrx = read_input();


//console.log(gauss(mtrx))
//mtrx.printm();

let mtrx2 = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
mtrx2.printm()
console.log(mtrx2)