import React, { ReactNode } from 'react';

import {
    Abs, Flex, Modal, TButtonEmbed, TCb, TStyle, useMounted,
} from '../../src';
import { colorsOverlay } from '../ModalCenter';
import { usePositionObserver } from './hooks/use-position-observer';


const cssScroll: TStyle = {
    overflow: 'auto',
    maxHeight: '100vh',
};

const cssBackground: TStyle = {
    backdropFilter: 'brightness(0.95) saturate(90%)',
};

const MIN_HEIGHT: number = 250;
const FIXED_WIDTH: number = 360;
const MAX_HEIGHT: number = 360;
const minWidth: number = 160;

type TProps = Readonly<{
    onClose: () => void;
    targetElement?: HTMLElement | null;
    isNonBlocking?: boolean | null;
    children?: ReactNode | undefined;
    minHeight?: number | null;
    maxHeight?: number | null;
    fixedWidth?: number | null;
}> & TButtonEmbed;

const ModalTarget_: React.ForwardRefRenderFunction<HTMLDivElement, TProps> = (
    {
        isHidden = null,
        isNonBlocking = null,
        onClose = null,
        testId = null,
        targetElement = null,
        children = null,
        minHeight = null,
        maxHeight = null,
        fixedWidth = null,
    },
    ref,
): React.ReactElement => {
    const [element, setElement] = React.useState<HTMLDivElement | null>(null);
    const mounted = useMounted();
    const finalMinHeight = minHeight ?? MIN_HEIGHT;
    const finalMaxHeight = maxHeight ?? MAX_HEIGHT;
    const finalFixedWidth = React.useMemo<number>(
        () => {
            if (fixedWidth) {
                return fixedWidth;
            }
            if (targetElement?.clientWidth) {
                return Math.max(targetElement?.clientWidth, minWidth);
            }
            return FIXED_WIDTH;
        },
        [fixedWidth, targetElement?.clientWidth],
    );
    
    const handleSetElement: TCb<HTMLDivElement | null> = React.useCallback(
        (element) => {
            if (!mounted()) {
                return;
            }
            
            setElement(element);
        },
        [mounted],
    );
    
    const trigger = usePositionObserver({
        targetElement,
    });
    
    const triggerPosition = usePositionObserver({
        targetElement: element,
    });
    
    const fixedStyle: TStyle = React.useMemo(
        () => ({
            overflow: 'hidden',
            minHeight: finalMinHeight,
            maxHeight: finalMaxHeight,
            minWidth,
            width: finalFixedWidth,
            maxWidth: finalFixedWidth,
        }),
        [finalFixedWidth, finalMaxHeight, finalMinHeight],
    );

    const boxStyle = React.useMemo<TStyle>(
        () => {
            if (isHidden || !targetElement) {
                return fixedStyle;
            }

            const { innerHeight, innerWidth } = window;
            const height = element ? element.getBoundingClientRect().height : 0;
            const maxY = innerHeight - height - 20;
            const maxX = innerWidth - finalFixedWidth - 20;
            const rect = targetElement.getBoundingClientRect();

            return [
                fixedStyle,
                {
                    position: 'absolute',
                    left: Math.min(Math.max(maxX, 20), rect.left),
                    top: Math.min(Math.max(maxY, 20), rect.bottom),
                },
            ];
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isHidden, targetElement, finalFixedWidth, fixedStyle, trigger, triggerPosition],
    );

    return (
        <Modal
            isHidden={isHidden}
            isNonBlocking={isNonBlocking}
            onDismiss={onClose}
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
                <Flex
                    ref={ref}
                    style={boxStyle}
                    colors="primary"
                    shape="md"
                    testId={testId}
                    shadow="md"
                >
                    <Flex
                        flex={1}
                        ref={handleSetElement}
                        style={cssScroll}
                    >
                        {children}
                    </Flex>
                </Flex>
            </Abs>
        </Modal>
    );
};

export const ModalTarget = React.memo(React.forwardRef(ModalTarget_));
