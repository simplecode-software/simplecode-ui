import { removeItem } from './remove-item';


const array: ReadonlyArray<string> = ['a', 'b', 'c', 'd'];


describe('Insert', () => {
    it('is a function', () => {
        expect(typeof removeItem).toBe('function');
    });
    
    it('should remove the item at the given `index`', () => {
        const index = 2;
        const result = ['a', 'b', 'd'];
        expect(removeItem(array, index)).toEqual(result);
    });
    
    it('should work with a negative `index`', () => {
        const index = -1;
        expect(removeItem(array, index)).toEqual(array);
    });
    
    it('should place `item` at beginning or ending if `index` is out of bounds', () => {
        const index = 60;
        expect(removeItem(array, index)).toEqual(array);
    });
});
