"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
/**
 * implementation of a stack in Typescript
 */
class Stack {
    /**
     * creates a pre-populated stack
     * @param items the initial data
     */
    constructor(items = []) {
        this._items = [];
        this._items.push(...items);
    }
    /**
     * add an item to the top of the stack
     * @param item the item to be added to the stack
     */
    push(item) {
        this._items.push(item);
    }
    /**
     * return the item on top of the stack
     */
    pop() {
        return this._items.pop();
    }
    /**
     * take a peek at the top of the stack, returning the top-most item
     * without removing it
     */
    peek() {
        if (this.isEmpty())
            throw new Error('the stack is empty');
        return this._items[this._items.length - 1];
    }
    /**
     * return true if the stack is empty
     */
    isEmpty() {
        return this.size() === 0;
    }
    /**
     * return the size of the stack
     */
    size() {
        return this._items.length;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map