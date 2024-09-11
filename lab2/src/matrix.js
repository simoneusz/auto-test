export function addMatrices(matrixA, matrixB) {
    if (!Array.isArray(matrixA) || !Array.isArray(matrixB)) 
        throw new Error("Both inputs must be matrices (arrays of arrays).");

    if (matrixA.length !== matrixB.length) 
        throw new Error("Matrices must have the same number of rows.");

    for (let i = 0; i < matrixA.length; i++) {
        if (matrixA[i].length !== matrixB[i].length) 
            throw new Error("Matrices must have the same dimensions.");
    }

    const result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrixA[i].length; j++) 
            result[i][j] = matrixA[i][j] + matrixB[i][j];
    }

    return result;
}


export function multiplyMatrices(matrixA, matrixB) {
    if (!Array.isArray(matrixA) || !Array.isArray(matrixB))
        throw new Error("Both inputs must be matrices (arrays of arrays).");

    const numColsA = matrixA[0].length;
    const numRowsB = matrixB.length;

    if (numColsA !== numRowsB)
        throw new Error("Number of columns in matrix A must equal number of rows in matrix B.");

    const result = Array(matrixA.length).fill(null).map(() => Array(matrixB[0].length).fill(0));

    for (let i = 0; i < matrixA.length; i++) {
        for (let j = 0; j < matrixB[0].length; j++) {
            for (let k = 0; k < matrixA[0].length; k++)
                result[i][j] += matrixA[i][k] * matrixB[k][j];
        }
    }

    return result;
}
export function transposeMatrix(matrix) {
    if (!Array.isArray(matrix) || !matrix.every(row => Array.isArray(row)))
        throw new Error("Input must be a matrix (an array of arrays).");

    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const result = Array(numCols).fill(null).map(() => Array(numRows));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++)
            result[j][i] = matrix[i][j];
    }

    return result;
}

export function determinant(matrix) {
    if (!Array.isArray(matrix) || matrix.length !== matrix[0].length)
        throw new Error("Determinant is only defined for square matrices.");

    const n = matrix.length;

    if (n === 1) return matrix[0][0];

    if (n === 2)
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

    let det = 0;

    for (let i = 0; i < n; i++) {
        const subMatrix = matrix.slice(1).map(row => row.filter((_, j) => j !== i));
        det += matrix[0][i] * determinant(subMatrix) * (i % 2 === 0 ? 1 : -1); // Alternating signs
    }

    return det;
}

function roundToPrecision(value, precision = 10) {
    return Math.round(value * 10**precision) / 10**precision;
}

export function inverseMatrix(matrix) {
    const n = matrix.length;

    if (matrix.length !== matrix[0].length)
        throw new Error("Inverse is only defined for square matrices.");

    const det = determinant(matrix);
    if (det === 0)
        throw new Error("Matrix is not invertible (determinant is zero).");

    if (n === 2) {
        const [[a, b], [c, d]] = matrix;
        const invDet = roundToPrecision(1 / det);

        return [
            [roundToPrecision(d * invDet), roundToPrecision(-b * invDet)],
            [roundToPrecision(-c * invDet), roundToPrecision(a * invDet)]
        ];
    }

    const adjugateMatrix = [];

    for (let i = 0; i < n; i++) {
        adjugateMatrix[i] = [];

        for (let j = 0; j < n; j++) {
            const minorMatrix = matrix
                .filter((_, rowIdx) => rowIdx !== i)
                .map(row => row.filter((_, colIdx) => colIdx !== j));

            const cofactor = roundToPrecision(determinant(minorMatrix) * ((i + j) % 2 === 0 ? 1 : -1));

            adjugateMatrix[j][i] = cofactor;
        }
    }

    const invDet = roundToPrecision(1 / det);
    const inverse = adjugateMatrix.map(row => row.map(value => roundToPrecision(value * invDet)));

    return inverse;
}