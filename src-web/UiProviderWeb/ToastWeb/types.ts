import { IconBaseProps } from 'react-icons';
import { TColorsProp, TPresetColorsName } from '../../../src';


export type TToastDataDict = Readonly<{
    [key in TPresetColorsName]?: TToastData;
}>;

export type TToastData = Readonly<{
    icon: React.ComponentType<IconBaseProps>;
    sizeIcon: number;
    colors: TColorsProp;
    colorsIcon: TColorsProp;
}>;

