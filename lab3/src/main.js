const { gauss, read_input } = require("../gauss_js/gauss_functions");
const Matrix = require('../gauss_js/matrix');

const n = 3;

const mtrx = read_input();


console.log(gauss(mtrx))
mtrx.printm();