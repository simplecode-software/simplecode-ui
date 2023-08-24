import React from 'react';

import {
    emptyArray, Flex, fullStyle, ModalContext, setShowToast,
    withBoundary, TModalContext, TStyle, Toast, Abs, replaceItem, TToastProps,
} from '../../src';


type TProps = Readonly<{
    children?: React.ReactNode;
    style?: TStyle | null;
    styleModalContainer?: TStyle | null;
}>;

type TModalItem = Readonly<{
    name: string;
    node: React.ReactNode;
}>;
type TModalList = ReadonlyArray<TModalItem>;

export type TToastPropsExtended = Readonly<{
    count?: number;
}>
    & TToastProps;

type TToastItem = Readonly<{
    name: string;
    props: TToastPropsExtended;
}>;
type TToastList = ReadonlyArray<TToastItem>;

const zIndexModalProvider: number = 1000;
const zIndexToast: number = 100;

const emptyModalList: TModalList = emptyArray;
const emptyToastList: TToastList = emptyArray;

const { overflow, ...containerStyle } = fullStyle;

const containerAbsStyle: TStyle = {
    position: 'fixed',
    zIndex: zIndexModalProvider,
    pointerEvents: 'none',
};

const ModalProvider_: React.FunctionComponent<TProps> = ({
    children = null,
    style = null,
    styleModalContainer = null,
}) => {
    const [modalList, setModalList] = React.useState<TModalList>(emptyModalList);
    const [toastList, setToastList] = React.useState<TToastList>(emptyToastList);
    const { showToast } = React.useContext(ModalContext);
    
    const value: TModalContext = React.useMemo(
        () => ({
            showModal: (name: string, node: React.ReactNode) => setModalList(
                (modalList) => {
                    const itemAt = modalList.findIndex((item) => item.name === name);
                    
                    if (itemAt > -1) {
                        return [
                            ...modalList.slice(0, itemAt),
                            { name, node },
                            ...modalList.slice(itemAt + 1),
                        ];
                    }
                    
                    return [...modalList, { name, node }];
                },
            ),
            hideModal: (name: string) => setModalList(
                (modalList) => {
                    const itemAt = modalList.findIndex((item) => item.name === name);
                    
                    if (itemAt < 0) {
                        return modalList;
                    }
                    
                    return [
                        ...modalList.slice(0, itemAt),
                        ...modalList.slice(itemAt + 1),
                    ];
                },
            ),
            showToast: (props: TToastPropsExtended) => setToastList((toastList) => {
                const existingToast: TToastItem | undefined = toastList.find((toast) => (
                    toast.props.text === props.text
                ));
                
                if (existingToast) {
                    const count = existingToast.props.count || 1;
                    return replaceItem(
                        toastList,
                        { ...existingToast, props: { ...existingToast.props, count: count + 1 } },
                        toastList.indexOf(existingToast),
                    );
                }
                return [...toastList, { name: `${Math.random()}`, props: { ...props, count: 1 } }];
            }),
        }),
        [],
    );
    
    React.useEffect(
        () => {
            setShowToast(value.showToast);
            return () => setShowToast(showToast);
        },
        [showToast, value],
    );
    
    const hideToast: (name: string) => void = React.useCallback(
        (name) => setToastList(
            (toastList) => {
                const itemAt = toastList.findIndex((item) => item.name === name);
                
                if (itemAt < 0) {
                    return toastList;
                }
                
                return [
                    ...toastList.slice(0, itemAt),
                    ...toastList.slice(itemAt + 1),
                ];
            },
        ),
        [],
    );
    
    const toastContainerStyle = React.useMemo<TStyle>(
        () => {
            return [
                fullStyle,
                { bottom: 100, zIndex: zIndexToast },
            ];
        },
        [],
    );

    return (
        <ModalContext.Provider value={value}>
            <Flex style={style || containerStyle} events="auto">
                {children}
                <Abs
                    top={0}
                    right={0}
                    bottom={0}
                    left={0}
                    style={styleModalContainer || containerAbsStyle}
                >
                    {modalList.map(({ node, name }) => (
                        <React.Fragment key={name}>
                            {node}
                        </React.Fragment>
                    ))}
                    <Flex
                        events="box-none"
                        justify="flex-start"
                        align="flex-end"
                        style={toastContainerStyle}
                    >
                        {toastList.slice(0, 3).map(({
                            name, props: {
                                duration, text, label, lineColors, onAction, ...props
                            },
                        }: TToastItem) => (
                            <Toast
                                key={name}
                                name={name}
                                text={text || ''}
                                label={label || null}
                                lineColors={lineColors || null}
                                duration={typeof duration === 'number' ? duration : null}
                                onAction={onAction || null}
                                onClose={hideToast}
                                {...props}
                            />
                        ))}
                    </Flex>
                </Abs>
            </Flex>
        </ModalContext.Provider>
    );
};

export const ModalProvider = React.memo(withBoundary('ModalProvider', ModalProvider_));
