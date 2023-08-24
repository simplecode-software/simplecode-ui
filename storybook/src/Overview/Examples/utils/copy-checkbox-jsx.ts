import compact from 'lodash/fp/compact';
import {
    TButtonEmbed, TPresetColorsName,
} from '../../../../../src';


export const copyCheckboxJsx = (
    button: TButtonEmbed,
    colors: TPresetColorsName,
): string => {
    const jsx = compact([
        '<Checkbox',
        '    label="Checkbox"',
        button.size && `    size="${button.size}"`,
        colors !== 'primarytext' && `    colors="${colors}"`,
        '/>',
    ]).join('\n');
    window.navigator.clipboard.writeText(jsx);
    return compact([
        `${colors || 'primarytext'}`,
        ` - ${button.size || 'md'}`,
    ]).join('');
};
