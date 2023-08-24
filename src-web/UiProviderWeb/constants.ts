import {
    IoCaretDown, IoRadioButtonOn, IoRadioButtonOff, IoEllipse,
} from 'react-icons/io5';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';
import { TSimpleCodeUiIcons } from '../../src';
import { withIcon } from '../utils/with-icon';


export const defaultFlex = 0;

export const icons: TSimpleCodeUiIcons = {
    caretDown: {
        Component: withIcon(IoCaretDown),
        sizeIcon: 16,
        size: 'xxsm',
    },
    radioOn: {
        Component: withIcon(IoRadioButtonOn),
        sizeIcon: 24,
    },
    radioOff: {
        Component: withIcon(IoRadioButtonOff),
        sizeIcon: 24,
    },
    checkboxOn: {
        Component: withIcon(GrCheckboxSelected),
    },
    checkboxOff: {
        Component: withIcon(GrCheckbox),
    },
    switchHandle: {
        Component: IoEllipse,
        sizeIcon: 30,
        size: 'xsm',
        colors: 'lighttext',
        shadowIcon: 'md',
        margin: '0 -2px 0 0',
    },
};
