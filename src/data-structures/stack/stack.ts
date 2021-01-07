/**
 * implementation of a stack in Typescript
 */
export class Stack<T> {
    private _items: T[] = [];

    /**
     * creates a pre-populated stack
     * @param items the initial data
     */
    constructor(items: Array<T> = []) {
        this._items.push(...items);
    }

    /**
     * add an item to the top of the stack
     * @param item the item to be added to the stack
     */
    push(item: T): void {
        this._items.push(item);
    }

    /**
     * return the item on top of the stack
     */
    pop(): T | undefined {
        return this._items.pop();
    }

    /**
     * take a peek at the top of the stack, returning the top-most item
     * without removing it
     */
    peek(): T {
        if (this.isEmpty())
            throw new Error('the stack is empty');
        return this._items[this._items.length - 1];
    }

    /**
     * return true if the stack is empty
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * return the size of the stack
     */
    size(): number {
        return this._items.length;
    }
}