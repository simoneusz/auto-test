import matrix from "../src/matrix.js"
import { expect } from "chai"
import sinon from "sinon"
describe('Matrix Class with sinon.mock Tests', function () {
    let matrixInstance;
    let mock;

    beforeEach(function () {
        matrixInstance = new matrix(2);
        console.log(matrixInstance);
        mock = sinon.mock(matrixInstance);
    });

    afterEach(function () {
        mock.restore();
    });

    it('should call get_rows and get_cols when calling exists_zero_row', function () {
        mock.expects("get_rows").atLeast(1);
        //mock.expects("get_cols").atLeast(1);
        mock.expects("get_cols").never();
        
        const result = matrixInstance.exists_zero_row();
        console.log("ZERO ROWS "  + result);
        expect(result).to.be.true;
        mock.verify();
    });


    it('should call get_rows and get_cols when calling exists_zero_row', function () {
        mock.expects("get_rows").once().returns(3);
        mock.expects("get_cols").once().returns(4);

        matrixInstance.set(0, 0, 0);
        matrixInstance.set(0, 1, 0);
        matrixInstance.set(0, 2, 0);
        matrixInstance.set(0, 3, 0);

        const result = matrixInstance.exists_zero_row();
        expect(result).to.be.true;

        mock.verify();
    });

    it('should call get_cols and manipulate rows in mull_add', function () {
        mock.expects("get_cols").once().returns(4);
        mock.expects("get_rows").never();

        matrixInstance.set(0, 0, 1);
        matrixInstance.set(1, 0, 2);

        matrixInstance.mull_add(0, 1, 2);

        expect(matrixInstance.get(0, 0)).to.equal(5);

        mock.verify();
    });

    it('should swap rows when calling swap_with_nonzero_row', function () {
        mock.expects("get_rows").once().returns(3);
        mock.expects("get_cols").twice().returns(4);

        matrixInstance.set(0, 0, 0);
        matrixInstance.set(1, 0, 1);

        matrixInstance.swap_with_nonzero_row(0);

        expect(matrixInstance.get(0, 0)).to.equal(1);

        mock.verify();
    });
});