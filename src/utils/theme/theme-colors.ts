import {
    TColorSet, TDict,
} from '../../types';


type TBgOnly = Readonly<{
    bg: string;
    bgHover: string;
    bgActive: string;
}>;

type TBorderOnly = Readonly<{
    border: string;
    borderHover: string;
    borderActive: string;
}>;

const transparentBg: TBgOnly = {
    bg: 'transparent',
    bgHover: 'transparent',
    bgActive: 'transparent',
};

const transparentBorder: TBorderOnly = {
    border: 'transparent',
    borderHover: 'transparent',
    borderActive: 'transparent',
};

export const createFlatColorset = (
    text: string, textHover: string, textActive: string, bg: string, bgHover: string, bgActive: string,
): TColorSet => ({
    text,
    textHover,
    textActive,
    bg,
    bgHover,
    bgActive,
    ...transparentBorder,
});

export const createGhostColorset = (text: string, textHover: string, textActive: string): TColorSet => ({
    text,
    textHover,
    textActive,
    ...transparentBg,
    border: text,
    borderHover: textHover,
    borderActive: textActive,
});

export const createTextColorset = (text: string, textHover: string, textActive: string): TColorSet => ({
    text,
    textHover,
    textActive,
    ...transparentBg,
    ...transparentBorder,
});

export const createStateColorsetTriplet = (name: string): TDict<TColorSet> => {
    return {
        [name]: createFlatColorset(
            'spec.white',
            'spec.white',
            'spec.white',
            `bg.${name}`,
            `bg.${name}plus`,
            `bg.${name}minus`,
        ),
        [`${name}ghost`]: {
            text: `text.${name}`,
            textHover: `text.${name}plus`,
            textActive: `text.${name}minus`,
            bg: 'bg.primaryalt',
            bgHover: 'transparent',
            bgActive: 'transparent',
            border: `bg.${name}`,
            borderHover: `bg.${name}plus`,
            borderActive: `bg.${name}minus`,
        },
        [`${name}text`]: createTextColorset(
            `text.${name}`,
            `text.${name}plus`,
            `text.${name}minus`,
        ),
    };
};
