import {
    TDict, TTheme,
} from '../../../src';

import {
    blue, dark, contrast,
} from '../constants';


const themeMap: TDict<TTheme> = {
    blue, dark, contrast,
};


export const getTheme = (theme: string | null = null): TTheme => {
    if (!theme) {
        return blue;
    }
    return themeMap[theme] || blue;
};
