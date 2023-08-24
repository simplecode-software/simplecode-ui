import { emptyString } from '../constants/empty';
import { getPluralForm } from './get-plural-form';


describe('Get Plural Form', () => {
    it('is a function', () => {
        expect(typeof getPluralForm).toBe('function');
    });
    it('returns "ses" ending for words ending with "s"', () => {
        expect(getPluralForm('bus')).toBe('buses');
    });
    it('returns "xes" ending for words ending with "x"', () => {
        expect(getPluralForm('box')).toBe('boxes');
    });
    it('returns "shes" ending for words ending with "sh"', () => {
        expect(getPluralForm('dish')).toBe('dishes');
    });
    it('returns "ches" ending for words ending with "ch"', () => {
        expect(getPluralForm('church')).toBe('churches');
    });
    it('returns "ches" ending for words ending with "ch"', () => {
        expect(getPluralForm('church')).toBe('churches');
    });
    it('returns "oes" ending for words ending with "s"', () => {
        expect(getPluralForm('potato')).toBe('potatoes');
    });
    it('returns "SES" ending for words ending with "S"', () => {
        expect(getPluralForm('BUS')).toBe('BUSES');
    });
    it('returns "XES" ending for words ending with "X"', () => {
        expect(getPluralForm('BOX')).toBe('BOXES');
    });
    it('returns "SHES" ending for words ending with "SH"', () => {
        expect(getPluralForm('DISH')).toBe('DISHES');
    });
    it('returns "CHES" ending for words ending with "CH"', () => {
        expect(getPluralForm('church')).toBe('churches');
    });
    it('returns "OES" ending for words ending with "S"', () => {
        expect(getPluralForm('POTATO')).toBe('POTATOES');
    });


    it('returns "ays" ending for words ending with "ay"', () => {
        expect(getPluralForm('day')).toBe('days');
    });
    it('returns "eys" ending for words ending with "ey"', () => {
        expect(getPluralForm('monkey')).toBe('monkeys');
    });
    it('returns "oys" ending for words ending with "oy"', () => {
        expect(getPluralForm('boy')).toBe('boys');
    });
    it('returns "AYS" ending for words ending with "AY"', () => {
        expect(getPluralForm('DAY')).toBe('DAYS');
    });
    it('returns "EYS" ending for words ending with "EY"', () => {
        expect(getPluralForm('MONKEY')).toBe('MONKEYS');
    });
    it('returns "OYS" ending for words ending with "OY"', () => {
        expect(getPluralForm('BOY')).toBe('BOYS');
    });


    it('returns "ies" ending for words ending with "y"', () => {
        expect(getPluralForm('county')).toBe('counties');
    });
    it('returns "IES" ending for words ending with "Y"', () => {
        expect(getPluralForm('COUNTY')).toBe('COUNTIES');
    });

    it('returns "ves" ending for words ending with "f"', () => {
        expect(getPluralForm('shelf')).toBe('shelves');
    });
    it('returns "ves" ending for words ending with "fe"', () => {
        expect(getPluralForm('life')).toBe('lives');
    });
    it('returns "VES" ending for words ending with "F"', () => {
        expect(getPluralForm('SHELF')).toBe('SHELVES');
    });
    it('returns "VES" ending for words ending with "FE"', () => {
        expect(getPluralForm('LIFE')).toBe('LIVES');
    });

    it('returns "cats" for word "cat"', () => {
        expect(getPluralForm('cat')).toBe('cats');
    });
    it('returns "dogs" for word "dog"', () => {
        expect(getPluralForm('dog')).toBe('dogs');
    });
    it('returns "OOS" ending for words ending with "OO"', () => {
        expect(getPluralForm('ZOO')).toBe('ZOOS');
    });
    it('returns "IOS" ending for words ending with "IO"', () => {
        expect(getPluralForm('RADIO')).toBe('RADIOS');
    });
    it('returns "ays" ending for words ending with "ay"', () => {
        expect(getPluralForm('tray')).toBe('trays');
    });
    it('returns "uys" ending for words ending with "uy"', () => {
        expect(getPluralForm('guy')).toBe('guys');
    });
    it('returns empty string for empty string as an argument', () => {
        expect(getPluralForm(emptyString)).toBe(emptyString);
    });
});
