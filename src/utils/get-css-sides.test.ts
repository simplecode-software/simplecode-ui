import { getCssSides } from './get-css-sides';


describe('Get Css Sides', () => {
    it('is a function', () => {
        expect(typeof getCssSides).toBe('function');
    });
    
    it('computes single side', () => {
        expect(getCssSides('a', '10')).toMatchSnapshot();
    });
    
    it('computes double sides', () => {
        expect(getCssSides('b', '10 20')).toMatchSnapshot();
    });
    
    it('computes tripple sides', () => {
        expect(getCssSides('c', '10 20 30')).toMatchSnapshot();
    });
    
    it('computes full sides', () => {
        expect(getCssSides('d', '10 20 30 40')).toMatchSnapshot();
    });
    
    it('trims extra sides', () => {
        expect(getCssSides('e', '10 20 30 40 50')).toMatchSnapshot();
    });
    
    it('computes number padding', () => {
        expect(getCssSides('f', 40)).toMatchSnapshot();
    });
    
    it('returns null if no padding', () => {
        expect(getCssSides('g', null)).toMatchSnapshot();
    });
    
    it('returns null if empty string', () => {
        expect(getCssSides('h', '')).toMatchSnapshot();
    });
    
    it('returns null if the name is empty', () => {
        expect(getCssSides('', 1)).toMatchSnapshot();
    });
});
