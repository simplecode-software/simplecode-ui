import { replaceItem } from './replace-item';


const array: ReadonlyArray<string> = ['a', 'b', 'c', 'd'];
const item = 'e';


describe('Insert', () => {
    it('is a function', () => {
        expect(typeof replaceItem).toBe('function');
    });
    
    it('should replace the item at the given `index`', () => {
        const index = 2;
        const result = ['a', 'b', 'e', 'd'];
        expect(replaceItem(array, item, index)).toEqual(result);
    });
    
    it('should work with a negative `index`', () => {
        const index = -1;
        expect(replaceItem(array, item, index)).toEqual(array);
    });
    
    it('should place `item` at beginning or ending if `index` is out of bounds', () => {
        const index = 60;
        expect(replaceItem(array, item, index)).toEqual(array);
    });
});
