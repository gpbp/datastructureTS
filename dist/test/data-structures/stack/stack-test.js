"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../../../src");
describe('stack\'s unit tests', () => {
    it('can be initialized without an initializer', () => {
        const s = new src_1.Stack();
        chai_1.expect(s.size()).to.equal(0);
    });
    it('can be initialized with an initializer', () => {
        const s = new src_1.Stack([1, 2, 3, 4]);
        chai_1.expect(s.size()).to.equal(4);
    });
    it('can be pushed upon', () => {
        const s = new src_1.Stack([1, 2, 3, 4]);
        s.push(5);
        chai_1.expect(s.size()).to.equal(5);
        chai_1.expect(s.peek()).to.equal(5);
    });
    it('can be popped', () => {
        const s = new src_1.Stack([1, 2, 3, 4]);
        chai_1.expect(s.pop()).to.equal(4);
        chai_1.expect(s.size()).to.equal(3);
    });
    it('can be peeked', () => {
        const s = new src_1.Stack([1, 2, 3, 4]);
        chai_1.expect(s.peek()).to.equal(4);
        chai_1.expect(s.size()).to.equal(4);
    });
    it('isEmpty() returns true when empty', () => {
        const s = new src_1.Stack();
        chai_1.expect(s.isEmpty()).to.be.true;
    });
    it('isEmpty() is false when not empty', () => {
        const s = new src_1.Stack([1, 2, 3, 41]);
        chai_1.expect(s.isEmpty()).to.be.false;
    });
    it('cannot pop when no elements', () => {
        const s = new src_1.Stack();
        chai_1.expect(s.pop()).to.be.undefined;
    });
    it('cannot peek when empty', () => {
        const s = new src_1.Stack();
        chai_1.expect(s.peek()).to.be.undefined;
    });
});
//# sourceMappingURL=stack-test.js.map