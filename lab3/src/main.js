import matrix from "./matrix.js"

let mtrx = new matrix(2);

console.log(mtrx);
mtrx.set(0, 0, 0);
mtrx.set(0, 1, 0);
mtrx.set(0, 2, 0);
console.log(mtrx.exists_zero_row());