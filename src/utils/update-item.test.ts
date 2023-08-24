import { updateItem } from './update-item';


type T = Readonly<{ x: number, y: number }>;

const array: ReadonlyArray<T> = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }];
const diff: Readonly<Partial<T>> = { y: 5 };


describe('Update', () => {
    it('is a function', () => {
        expect(typeof updateItem).toBe('function');
    });
    
    it('should updateItem an fields at the given `index`', () => {
        const index = 2;
        const result = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 4 }];
        expect(updateItem(array, diff, index)).toEqual(result);
    });
    
    it('should return null for a negative `index`', () => {
        const index = -1;
        expect(updateItem(array, diff, index)).toEqual(array);
    });
    
    it('should return null if `index` is out of bounds', () => {
        const index = 60;
        expect(updateItem(array, diff, index)).toEqual(array);
    });
});
