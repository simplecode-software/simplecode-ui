import compact from 'lodash/fp/compact';
import {
    TButtonEmbedNamed, TPresetColorsName, TSpecSize,
} from '../../../../../src';


export const copyButtonJsx = (
    button: TButtonEmbedNamed,
    size: TSpecSize | null,
    colors: TPresetColorsName,
): string => {
    const jsx = compact([
        '<Button',
        '    label="Button"',
        size && `    size="${size}"`,
        button.shadow && `    shadow="${button.shadow}"`,
        button.shape && `    shape="${button.shape}"`,
        button.border && `    border="${button.border}"`,
        colors !== 'primary' && `    colors="${colors}"`,
        '/>',
    ]).join('\n');
    window.navigator.clipboard.writeText(jsx);
    return compact([
        `${colors || 'primary'}`,
        ` - ${size || 'md'}`,
        `${button.shadow !== 'none' ? ' - shadowed' : ''}`,
        `${button.border ? ' - bordered' : ''}`,
    ]).join('');
};
