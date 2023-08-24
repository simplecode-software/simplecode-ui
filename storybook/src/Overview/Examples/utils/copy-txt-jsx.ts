import compact from 'lodash/fp/compact';
import {
    TTextEmbed,
} from '../../../../../src';


export const copyTxtJsx = (
    txt: TTextEmbed,
    fontName: string | null,
): string => {
    const jsx = compact([
        '<Txt',
        txt.size && `    size="${txt.size}"`,
        fontName && `    font="${fontName}"`,
        '>',
        '    Txt',
        '</Txt>',
    ]).join('\n');
    window.navigator.clipboard.writeText(jsx);
    return compact([
        ` - ${txt.size || 'md'}`,
        `${fontName ? ` - ${fontName}` : ''}`,
    ]).join('');
};
