import React from 'react';
import * as SimpleCodeUi from '../../src';
import { TCbVoid, TCustomProps } from '../../src';
import { removeEmptyFields } from '../utils/remove-empty-fields';


type THocFlex = (
    __component: string,
) => React.ForwardRefRenderFunction<HTMLDivElement, SimpleCodeUi.TPropsFlex>;
type THocButtonGroup = (
    __component: string,
) => React.ForwardRefRenderFunction<HTMLDivElement, SimpleCodeUi.TPropsButtonGroup>;
type TGetMouseEvents = (custom?: TCustomProps | null) => React.HTMLAttributes<HTMLDivElement>;

const getMouseEvents: TGetMouseEvents = (custom) => removeEmptyFields({
    onMouseEnter: custom?.onMouseEnter,
    onMouseMove: custom?.onMouseMove,
    onMouseLeave: custom?.onMouseLeave,
}) as React.HTMLAttributes<HTMLDivElement>;

export const mockDynamic = (cb: TCbVoid | null = null): void => {
    jest.doMock('simplecode-ui', () => {
        const Txt_: React.ForwardRefRenderFunction<HTMLElement, SimpleCodeUi.TPropsTxt> = (
            props,
            ref,
        ) => {
            const {
                children, testId, onPress, isDisabled, ...rest
            } = props;
            const press: (event: React.BaseSyntheticEvent) => void = (e) => onPress?.(e);
            const hiddenProps = {
                __component: 'Txt',
                __hiddenprops: rest,
            } as unknown as React.HTMLAttributes<HTMLSpanElement>;
            const inner: React.ReactElement = (
                <span
                    data-testid={testId || undefined}
                    {...hiddenProps}
                    ref={ref}
                    onClick={isDisabled ? undefined : press}
                >
                    {children}
                </span>
            );
            
            return inner;
        };
        const Txt = React.forwardRef(Txt_);
        
        const hocFlex: THocFlex = (__component) => (props, ref) => {
            const {
                children, testId, onPress, isDisabled, custom, ...__hiddenprops
            } = props;
            const press: (event: React.BaseSyntheticEvent) => void = (e) => onPress?.(e);
            const hiddenProps = {
                __component,
                __hiddenprops,
            } as unknown as React.HTMLAttributes<HTMLDivElement>;
            const inner: React.ReactElement = (
                <div
                    data-testid={testId || undefined}
                    {...hiddenProps}
                    {...getMouseEvents(custom)}
                    ref={ref}
                    onClick={isDisabled ? undefined : press}
                >
                    {children}
                </div>
            );
            
            return inner;
        };
        const Flex = React.forwardRef(hocFlex('Flex'));
        const Abs = React.forwardRef(hocFlex('Abs'));
        
        const Button_: React.ForwardRefRenderFunction<HTMLDivElement, SimpleCodeUi.TPropsButton> = (
            props,
            ref,
        ) => {
            const {
                children,
                name = null,
                testId,
                onPress,
                isDisabled,
                label,
                labelActive,
                isActive,
                ...__hiddenprops
            } = props;
            const press: (event: React.BaseSyntheticEvent) => void = (e) => onPress?.(e, name);
            const hiddenProps = {
                __component: 'Button',
                __hiddenprops,
            } as unknown as React.HTMLAttributes<HTMLDivElement>;
            const labelFinal: string | null = (isActive ? labelActive : label) ?? null;
            const inner: React.ReactElement = (
                <div
                    data-testid={testId || undefined}
                    {...hiddenProps}
                    ref={ref}
                    onClick={isDisabled ? undefined : (press || undefined)}
                >
                    {labelFinal !== null && (
                        labelFinal
                    )}
                    {children}
                </div>
            );
            
            return inner;
        };
        const Button = React.forwardRef(Button_);
        
        const hocButtonGroup: THocButtonGroup = (__component) => (props, ref) => {
            const {
                buttons, testId, onPress, ...__hiddenprops
            } = props;
            const hiddenProps = {
                __component,
                __hiddenprops,
            } as unknown as React.HTMLAttributes<HTMLDivElement>;
            
            return (
                <div data-testid={testId || undefined} {...hiddenProps}>
                    {buttons?.map((button) => (!button ? null : (
                        <Button
                            {...button}
                            key={`${button?.name}`}
                            testId={button?.testId || `${testId}:${button?.name}:Press`}
                            ref={ref}
                            onPress={onPress}
                        />
                    )))}
                </div>
            );
        };
        
        const ButtonGroup = React.forwardRef(hocButtonGroup('ButtonGroup'));
        const ButtonGroupRadio = React.forwardRef(hocButtonGroup('ButtonGroupRadio'));
        
        const ListItem_: React.ForwardRefRenderFunction<HTMLDivElement, SimpleCodeUi.TPropsListItem> = (
            props,
            ref,
        ) => {
            const {
                children, buttonGroup, onPressButton, testId, onPress, ...rest
            } = props;
            const hiddenProps = {
                __component: 'ListItem',
                __hiddenprops: rest,
            } as unknown as React.HTMLAttributes<HTMLDivElement>;
            
            return (
                <div data-testid={testId || undefined} {...hiddenProps} ref={ref}>
                    <Button
                        label="Press"
                        onPress={onPress}
                        testId={testId && `${testId}:Press`}
                    />
                    {children}
                    {buttonGroup && (
                        <ButtonGroup {...buttonGroup} onPress={onPressButton} />
                    )}
                </div>
            );
        };
        const ListItem = React.forwardRef(ListItem_);
        
        const ListProgressive = <T, >({ // `<T, >` - lol
            items, onRenderItem, ...rest
        }: Readonly<{
            items: ReadonlyArray<T | null> | null;
            onRenderItem: (item: T, index: number) => (React.ReactElement | null);
        }>): React.ReactElement => {
            const hiddenProps = {
                __component: 'ListProgressive',
                __hiddenprops: rest,
            } as unknown as React.HTMLAttributes<HTMLDivElement>;
            
            return (
                <div {...hiddenProps}>
                    {items?.map((item, i) => (item ? onRenderItem(item, i) : null))}
                </div>
            );
        };
        
        return Object.setPrototypeOf(
            {
                Txt,
                Flex,
                Abs,
                Button,
                ButtonGroup,
                ButtonGroupRadio,
                ListItem,
                ListProgressive,
                withAsync: (com: React.Component) => com,
                withBoundary: (_name: string, com: React.Component) => com,
            },
            SimpleCodeUi,
        );
    });
    
    if (cb) {
        cb();
    }
    
    jest.dontMock('simplecode-ui');
};
