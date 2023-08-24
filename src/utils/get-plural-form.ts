import { emptyString } from '../constants/empty';


const lowerEndings = [
    { reg: 's$', result: 'ses' },
    { reg: 'x$', result: 'xes' },
    { reg: 'sh$', result: 'shes' },
    { reg: 'ch$', result: 'ches' },
    { reg: 'io$', result: 'ios' },
    { reg: 'oo$', result: 'oos' },
    { reg: 'eo$', result: 'eos' },
    { reg: 'o$', result: 'oes' },
    { reg: 'uy$', result: 'uys' },
    { reg: 'ey$', result: 'eys' },
    { reg: 'oy$', result: 'oys' },
    { reg: 'iy$', result: 'iys' },
    { reg: 'ay$', result: 'ays' },
    { reg: 'y$', result: 'ies' },
    { reg: '(f|fe)$', result: 'ves' },
];

const upperEndings = lowerEndings.map(({ reg, result }) => (
    { reg: reg.toUpperCase(), result: result.toUpperCase() }
));

const allEndings = [...lowerEndings, ...upperEndings];

const createReplacer = (reg: string, result: string) => (str: string) => str.replace(new RegExp(reg), result);

const replacers = allEndings.map(({ reg, result }) => createReplacer(reg, result));


export const getPluralForm = (
    label: string,
): string => {
    if (!label) {
        return emptyString;
    }

    let result = label;
    const isLabelChanged = replacers.some((replacer) => {
        const newStr = replacer(label);
        if (label !== newStr) {
            result = newStr;
            return true;
        }
        return false;
    });

    if (!isLabelChanged) {
        // if no lower-case charaters, then return label with 'S' ending,
        // otherwise with 's' ending
        return /^[^a-z]*$/.test(label)
            ? `${label}S`
            : `${label}s`;
    }
    return result;
};
