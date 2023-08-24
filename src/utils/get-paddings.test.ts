import { getPaddings } from './get-paddings';


describe('Get Paddings', () => {
    it('is a function', () => {
        expect(typeof getPaddings).toBe('function');
    });
    
    it('computes single paddings', () => {
        expect(getPaddings('10')).toMatchSnapshot();
    });
    
    it('computes double paddings', () => {
        expect(getPaddings('10 20')).toMatchSnapshot();
    });
    
    it('computes tripple paddings', () => {
        expect(getPaddings('10 20 30')).toMatchSnapshot();
    });
    
    it('computes full paddings', () => {
        expect(getPaddings('10 20 30 40')).toMatchSnapshot();
    });
    
    it('trims extra paddings', () => {
        expect(getPaddings('10 20 30 40 50')).toMatchSnapshot();
    });
    
    it('computes number padding', () => {
        expect(getPaddings(40)).toMatchSnapshot();
    });
    
    it('returns null if no padding', () => {
        expect(getPaddings(null)).toMatchSnapshot();
    });
    
    it('returns null if empty string', () => {
        expect(getPaddings('')).toMatchSnapshot();
    });
});
