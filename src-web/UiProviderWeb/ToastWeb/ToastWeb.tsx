import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import {
    emptyString,
    Flex, ListItem, TButtonGroupEmbed, TButtonGroupOnPress, TIconEmbedList,
    TPropsToast, TStyle, Txt, withBoundary,
} from '../../../src';
import { withIcon } from '../../utils/with-icon';
import { defaultToastData, toastDataDict } from './constants';
import { TToastData } from './types';


export type TPropsToastExtended = Readonly<{
    count?: number;
}>
    & TPropsToast;

const itemStyle: TStyle = {
    minWidth: 350,
    maxWidth: 500,
};

const borderStyle: TStyle = { borderTopWidth: '11px', borderTopStyle: 'solid' };

const textStyle: TStyle = { overflowWrap: 'anywhere' };

const ToastWeb_: React.FunctionComponent<TPropsToastExtended> = ({
    name,
    text,
    label,
    lineColors,
    duration,
    count,
    onAction,
    onClose,
}) => {
    const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const textAdditional: string = (count && count > 1) ? ` (${count})` : '';
    
    const toastData = React.useMemo<TToastData>(
        () => {
            if (typeof lineColors === 'string') {
                return toastDataDict[lineColors] || defaultToastData;
            }
            
            return defaultToastData;
        },
        [lineColors],
    );

    const clearTimer: () => void = React.useCallback(
        () => {
            if (timer.current) {
                clearTimeout(timer.current);
                timer.current = null;
            }
        },
        [],
    );

    const handleOnClose: () => void = React.useCallback(
        () => {
            clearTimer();
            onClose?.(name || emptyString);
        },
        [clearTimer, name, onClose],
    );

    React.useEffect(
        () => {
            if (duration && duration > 0) {
                timer.current = setTimeout(handleOnClose, duration);
            }

            return () => {
                clearTimer();
            };
        },
        [clearTimer, duration, handleOnClose, count],
    );
    
    const icons = React.useMemo<TIconEmbedList>(
        () => [{
            Component: withIcon(toastData.icon),
            sizeIcon: toastData.sizeIcon,
            colors: toastData.colorsIcon,
            align: 'flex-start',
            justify: 'flex-start',
            margin: '0 15px 0 0',
        }],
        [toastData],
    );
    

    const buttonGroup = React.useMemo<TButtonGroupEmbed>(
        () => ({
            align: 'flex-end',
            justify: 'flex-end',
            direction: 'column',
            buttons: [
                null,
                {
                    colors: 'greyghost',
                    size: 'sm',
                    name: 'close',
                    icons: [{
                        Component: withIcon(ImCancelCircle),
                        sizeIcon: 30,
                    }],
                },
                label ? {
                    colors: 'accentghost',
                    size: 'sm',
                    name: 'action',
                    label,
                } : null,
            ],
        }),
        [label],
    );

    const handleOnPressButton: TButtonGroupOnPress = React.useCallback(
        (_e, button) => {
            if (typeof button !== 'string') {
                return;
            }

            if (button === 'close') {
                handleOnClose();
            } else if (button === 'action' && onAction) {
                onAction();
            }
        },
        [handleOnClose, onAction],
    );

    return (
        <Flex
            margin="15px 35px"
            style={itemStyle}
        >
            <Flex
                colors={toastData.colors}
                style={borderStyle}
                shape="md"
                border="sm.top"
                shadow="md"
                padding="10px"
            >
                <ListItem
                    size="auto"
                    direction="row"
                    align="center"
                    flex={1}
                    icons={icons}
                    buttonGroup={buttonGroup}
                    onPressButton={handleOnPressButton}
                >
                    <Flex flex={1}>
                        <Txt colors="darktext" style={textStyle} margin="0 10px 0 0">
                            {`${text}${textAdditional}`}
                        </Txt>
                    </Flex>
                </ListItem>
            </Flex>
        </Flex>
    );
};

export const ToastWeb = React.memo(withBoundary('ToastWeb', ToastWeb_));
