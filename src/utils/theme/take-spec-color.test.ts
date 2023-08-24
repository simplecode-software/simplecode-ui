import { TDict } from '../../types';
import { takeSpecColor } from './take-spec-color';


const specTest: TDict<string> = { test: '#AABBCC' };


describe('Actions takeSpecColor', () => {
    it('is a function', () => {
        expect(typeof takeSpecColor).toBe('function');
    });
    it('takes an existing color', () => {
        expect(takeSpecColor(specTest, 'test')).toEqual('#AABBCC');
    });
    it('returns non-empty string if there is no such color', () => {
        expect(takeSpecColor(specTest, 'test123')).toBeTruthy();
    });
});
