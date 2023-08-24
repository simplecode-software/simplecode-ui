import { BsCheckCircle, BsFillInfoCircleFill } from 'react-icons/bs';
import { IoWarning } from 'react-icons/io5';
import { TColorSet } from '../../../src/types';
import { TToastData, TToastDataDict } from './types';


export const errorBorderColorSet: TColorSet = {
    text: 'spec.darkblue90',
    textHover: 'spec.darkblue80',
    textActive: 'spec.darkblue70',
    bg: 'spec.white',
    bgHover: 'spec.white',
    bgActive: 'spec.white',
    border: 'bg.error',
    borderHover: 'bg.error',
    borderActive: 'bg.error',
};

export const seccessBorderColorSet: TColorSet = {
    text: 'spec.darkblue90',
    textHover: 'spec.darkblue80',
    textActive: 'spec.darkblue70',
    bg: 'bg.contrast',
    bgHover: 'bg.contrast',
    bgActive: 'bg.contrast',
    border: 'bg.success',
    borderHover: 'bg.successplus',
    borderActive: 'bg.successminus',
};

export const accentBorderColorSet: TColorSet = {
    text: 'spec.darkblue90',
    textHover: 'spec.darkblue80',
    textActive: 'spec.darkblue70',
    bg: 'bg.contrast',
    bgHover: 'bg.contrast',
    bgActive: 'bg.contrast',
    border: 'bg.accent',
    borderHover: 'bg.accentplus',
    borderActive: 'bg.accentminus',
};

export const toastDataDict: TToastDataDict = {
    error: {
        icon: IoWarning,
        sizeIcon: 45,
        colors: errorBorderColorSet,
        colorsIcon: 'errorghost',
    },
    success: {
        icon: BsCheckCircle,
        sizeIcon: 35,
        colors: seccessBorderColorSet,
        colorsIcon: 'successghost',
    },
};


export const defaultToastData: TToastData = {
    icon: BsFillInfoCircleFill,
    sizeIcon: 35,
    colors: accentBorderColorSet,
    colorsIcon: 'accentghost',
};
