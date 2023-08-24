import React from 'react';
import {
    Flex, fullStyle, ModalContext,
    TStyle, TModalContext, TPropsModal, TButtonOnPress,
} from '../../../src';


const styleContainer: TStyle = [
    fullStyle,
    { zIndex: 50 },
];

const ModalWeb_: React.FunctionComponent<TPropsModal> = ({
    children = null,
    isHidden = null,
    onDismiss = null,
    overlayStyle = null,
    backgroundStyle = null,
    overlay = null,
    isNonBlocking = null,
}) => {
    const context: TModalContext = React.useContext(ModalContext);
    
    const name = React.useRef<string>(`${Math.random()}`);
    
    const modalOverlayStyle = React.useMemo<TStyle>(
        () => [
            fullStyle,
            { backgroundColor: '#00000000' },
            overlayStyle,
        ],
        [overlayStyle],
    );
    
    const modalBackgroundStyle = React.useMemo<TStyle>(
        () => {
            return [
                fullStyle,
                backgroundStyle,
            ];
        },
        [backgroundStyle],
    );
    
    const handleDismiss: TButtonOnPress = React.useCallback(
        () => {
            if (onDismiss) {
                onDismiss();
            }
        },
        [onDismiss],
    );
    
    const body: React.ReactElement = React.useMemo(
        () => (
            <Flex
                colors="none"
                style={styleContainer}
                events="none"
            >
                {overlay || (
                    <Flex
                        colors="none"
                        style={modalOverlayStyle}
                        events={isNonBlocking ? 'none' : 'auto'}
                        onPress={isNonBlocking ? null : handleDismiss}
                    />
                )}
                <Flex
                    colors="none"
                    style={modalBackgroundStyle}
                    events="none"
                >
                    {children}
                </Flex>
            </Flex>
        ),
        [overlay, modalOverlayStyle, isNonBlocking, handleDismiss, modalBackgroundStyle, children],
    );
    
    React.useEffect(
        () => {
            if (!isHidden) {
                context.showModal(name.current, body);
            } else {
                context.hideModal(name.current);
            }
        },
        [body, context, isHidden],
    );
    
    React.useEffect(
        () => () => {
            context.hideModal(name.current);
        },
        [context],
    );
    
    return null;
};

export const ModalWeb = React.memo(ModalWeb_);
