const sinon = require('sinon');
const { expect } = require('chai');
const { read_input, gauss } = require('../gauss_js/gauss_functions');
const Matrix = require('../gauss_js/matrix');

describe('Gauss function test with sinon.mock', () => {
    let gaussMock;
    let readInputMock;
    let matrixPrintStub;

    beforeEach(() => {
        const mockObject = { gauss: gauss };
        gaussMock = sinon.mock(mockObject);
        gaussMock.expects('gauss').once().returns([1, 2, 3]);

        sinon.replace(require('../gauss_js/gauss_functions'), 'gauss', mockObject.gauss);

        const readInputObject = { read_input: read_input };
        readInputMock = sinon.mock(readInputObject);
        readInputMock.expects('read_input').once().returns(new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

        sinon.replace(require('../gauss_js/gauss_functions'), 'read_input', readInputObject.read_input);

        matrixPrintStub = sinon.stub(Matrix.prototype, 'printm');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should call gauss and printm correctly', () => {
        const mtrx = read_input();

        const result = gauss(mtrx);
        expect(result).to.deep.equal([1, 2, 3]);

        expect(matrixPrintStub.calledOnce).to.be.true;

        gaussMock.verify();
        readInputMock.verify();
    });
});
