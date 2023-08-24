import {
    emptyArray, TButtonEmbed, TButtonEmbedNamed, TButtonEmbedNamedList, TColorsProp, TStyle,
} from '../../src';


type TUtil = (buttons?: TButtonEmbedNamedList | null, props?: TButtonEmbed) => TButtonEmbedNamedList;
type TGetStyledButton = (button: TButtonEmbedNamed, props?: TButtonEmbed) => TButtonEmbedNamed;

const colorsButton: TColorsProp = {
    text: 'spec.darkblue90',
    textHover: 'spec.darkblue80',
    textActive: 'spec.darkblue70',
    bg: 'transparent',
    bgHover: 'bg.secondary',
    bgActive: 'transparent',
    border: 'bg.secondaryminus',
    borderHover: 'bg.secondaryplus',
    borderActive: 'bg.secondaryminus',
};

export const preWrapStyle: TStyle = { whiteSpace: 'pre-wrap' };

export const propsButtonSelectDefault: TButtonEmbed = {
    sizeText: 'sm',
    font: 'regular',
    shadow: 'none',
    size: 'auto',
    padding: '5px 10px',
    alignText: 'left',
    shape: 'none',
    justify: 'flex-start',
    flexText: -1,
    style: preWrapStyle,
    colors: colorsButton,
};

const getStyledButton: TGetStyledButton = (button, props) => ({
    ...propsButtonSelectDefault,
    ...props,
    ...button,
});

export const getButtonsSelectStyled: TUtil = (buttons, props) => {
    if (!buttons) {
        return emptyArray;
    }
    
    return buttons.map((button, index) => {
        if (!button) {
            return null;
        }
        
        const isLast = index === buttons.length - 1;
        const propsFinal: TButtonEmbed | undefined = isLast ? props : { border: 'sm.bottom', ...props };
        return getStyledButton(button, propsFinal);
    }).filter((x) => !!x);
};
