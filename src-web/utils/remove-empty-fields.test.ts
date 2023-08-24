import { TCustomProps } from '../../src';
import { removeEmptyFields } from './remove-empty-fields';

const object: TCustomProps = {
    1: '',
    2: null,
    3: undefined,
    4: 0,
    5: NaN,
    6: false,
    7: 7,
};

const objectFiltered: TCustomProps = {
    7: 7,
};

describe('Remove Empty Fields', () => {
    it('is a function', () => {
        expect(typeof removeEmptyFields).toBe('function');
    });
    
    it('should remove empty fields', () => {
        expect(removeEmptyFields(object)).toEqual(objectFiltered);
    });
});
