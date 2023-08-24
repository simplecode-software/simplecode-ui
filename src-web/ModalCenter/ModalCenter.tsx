import React from 'react';

import {
    Modal, Flex, Txt, withBoundary, TStyle, Abs, TColorSet, TShapeName,
} from '../../src';
import { LoadingContent } from '../LoadingContent';


type TProps = Readonly<{
    onClose: () => void;
    children?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    styleContainer?: TStyle | null;
    isRefreshing?: boolean | null;
    onRefresh?: () => void;
    isNoScroll?: boolean | null;
    title?: string | null;
    shape?: TShapeName | null;
    minHeight?: number | null;
    isMaxHeight?: boolean | null;
    maxWidth?: number | null;
    minWidth?: number | null;
    testId?: string | null;
    backgroundStyle?: TStyle | null;
    isLoading?: boolean | null;
}>;

const MIN_HEIGHT = 500;
const MIN_WIDTH = 500;


export const colorsOverlay: TColorSet = {
    bg: 'spec.overlay30',
    bgActive: 'spec.overlay30',
    bgHover: 'spec.overlay30',
    border: 'spec.overlay30',
    borderActive: 'spec.overlay30',
    borderHover: 'spec.overlay30',
    text: 'transparent',
    textActive: 'transparent',
    textHover: 'transparent',
};

const cssScroll: TStyle = {
    overflow: 'auto',
    maxHeight: '100vh',
};

const cssBackground: TStyle = {
    backdropFilter: 'brightness(0.65) saturate(50%) blur(2px)',
};

const ModalCenter_: React.FunctionComponent<TProps> = ({
    onClose,
    children = null,
    header = null,
    footer = null,
    isNoScroll = null,
    title = null,
    shape = null,
    minHeight = null,
    isMaxHeight = null,
    maxWidth = null,
    minWidth = null,
    testId = null,
    backgroundStyle = null,
    styleContainer = null,
    isLoading = null,
}) => {
    const cssScrollFinal = React.useMemo<TStyle>(
        () => (styleContainer ? {
            ...cssScroll,
            ...styleContainer,
        } : cssScroll),
        [styleContainer],
    );
    
    const maxWidthFinal: number | string = maxWidth || '80vw';
    const minWidthFinal: number = maxWidth
        ? Math.min(minWidth || MIN_WIDTH, maxWidth)
        : minWidth || MIN_WIDTH;

    const styleLoadingContent = React.useMemo<TStyle>(
        () => ({
            width: 'calc(100% - 20px)',
            maxWidth: maxWidthFinal,
            minWidth: minWidthFinal,
            alignItems: 'center',
        }),
        [maxWidthFinal, minWidthFinal],
    );

    const boxStyle = React.useMemo<TStyle>(
        () => {
            const maxHeight = '80vh';
            return [
                {
                    overflow: 'hidden',
                    maxHeight,
                    maxWidth: maxWidthFinal,
                    minHeight: isMaxHeight ? maxHeight : (minHeight ?? MIN_HEIGHT),
                    width: '100%',
                    minWidth: minWidthFinal,
                },
            ];
        },
        [isMaxHeight, maxWidthFinal, minHeight, minWidthFinal],
    );
    
    return (
        <Modal
            onDismiss={isLoading ? null : onClose}
            backgroundStyle={backgroundStyle}
        >
            <Abs
                top={0}
                left={0}
                right={0}
                bottom={0}
                colors={colorsOverlay}
                style={cssBackground}
                events="box-none"
                justify="center"
                align="center"
            >
                <LoadingContent
                    style={boxStyle}
                    colors="primary"
                    shape={shape || 'xlg.top'}
                    testId={testId}
                    shadow="lg"
                    styleContainer={styleLoadingContent}
                    isLoading={isLoading}
                >
                    {!header && !!title ? (
                        <Flex align="center" justify="center" padding="18px 0 18px 0">
                            <Txt
                                font="bold"
                                size="xlg"
                                testId={testId && `${testId}:Title`}
                            >
                                {title}
                            </Txt>
                        </Flex>
                    ) : (
                        header
                    )}
                    {children && !isNoScroll && (
                        <Flex
                            flex={1}
                            style={cssScrollFinal}
                        >
                            {children}
                        </Flex>
                    )}
                    {isNoScroll && children}
                    {footer}
                </LoadingContent>
            </Abs>
        </Modal>
    );
};


export const ModalCenter = React.memo(withBoundary('ModalCenter', ModalCenter_));
