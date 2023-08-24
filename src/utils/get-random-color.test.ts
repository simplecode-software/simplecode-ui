import { getRandomColor } from './get-random-color';


describe('Get Random Color', () => {
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    });
    
    it('is a function', () => {
        expect(typeof getRandomColor).toBe('function');
    });
    
    it('returns a hex string', () => {
        expect(/#[0-9a-f]{6}/i.test(getRandomColor())).toBeTruthy();
    });
    
    it('returns result with Math.random() mock 1', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
        expect(getRandomColor()).toEqual('#7fffff');
    });
    
    it('returns result with Math.random() mock 2', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
        expect(getRandomColor()).toEqual('#000000');
    });
    
    it('returns result with Math.random() mock 3', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.91564);
        expect(getRandomColor()).toEqual('#ea6761');
    });
});
