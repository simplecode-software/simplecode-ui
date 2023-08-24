import { getMargins } from './get-margins';


describe('Get Margins', () => {
    it('is a function', () => {
        expect(typeof getMargins).toBe('function');
    });
    
    it('computes single margins', () => {
        expect(getMargins('10')).toMatchSnapshot();
    });
    
    it('computes double margins', () => {
        expect(getMargins('10 20')).toMatchSnapshot();
    });
    
    it('computes tripple margins', () => {
        expect(getMargins('10 20 30')).toMatchSnapshot();
    });
    
    it('computes full margins', () => {
        expect(getMargins('10 20 30 40')).toMatchSnapshot();
    });
    
    it('trims extra margins', () => {
        expect(getMargins('10 20 30 40 50')).toMatchSnapshot();
    });
    
    it('computes number margin', () => {
        expect(getMargins(40)).toMatchSnapshot();
    });
    
    it('returns null if no margin', () => {
        expect(getMargins(null)).toMatchSnapshot();
    });
    
    it('returns null if empty string', () => {
        expect(getMargins('')).toMatchSnapshot();
    });
});
