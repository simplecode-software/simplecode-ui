import { getConditionalItems } from './get-conditional-items';


describe('Get Conditional Items', () => {
    it('is a function', () => {
        expect(typeof getConditionalItems).toBe('function');
    });
    
    type TestType = Readonly<{
        id: number,
        name: string,
    }>;
    
    const item: TestType = {
        id: 2,
        name: 'Test',
    };
    
    it('returns an array with the item if true', () => {
        expect(getConditionalItems(true, item)).toEqual([{
            id: 2,
            name: 'Test',
        }]);
    });
    
    it('returns an empty array if false', () => {
        expect(getConditionalItems(false, item)).toEqual([]);
    });
});
