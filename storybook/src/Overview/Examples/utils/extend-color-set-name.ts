import {
    TColorsProp, TPresetColorsName,
} from '../../../../../src';


export const extendColorSetName = (
    src: TPresetColorsName,
    target: TColorsProp | null = null,
): TPresetColorsName => {
    if (!target || typeof target !== 'string') {
        return src;
    }
    if (target.includes('ghost')) {
        return `${src}ghost` as TPresetColorsName;
    }
    if (target.includes('text')) {
        return `${src}text` as TPresetColorsName;
    }
    return src;
};
