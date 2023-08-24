import React from 'react';

import { Flex } from '../Flex';
import { Loading } from '../Loading';
import { TPropsLoadingView } from '../types';


const LoadingView_: React.FunctionComponent<TPropsLoadingView> = ({
    style = null,
    colorsContainer = null,
    isHidden = null,
    padding = null,
    margin = null,
    href = null,
    onPress = null,
    testId = null,
    isDisabled = null,
    shape = null,
    border = null,
    shadow = null,
    isLoading = null,
    children = null,
    label = null,
    ...propsLoading
}: TPropsLoadingView) => {
    const {
        flex,
        direction,
        justify,
        align,
    } = propsLoading;
    return (
        <Flex
            style={style}
            colors={colorsContainer || 'secondary'}
            isHidden={isHidden}
            padding={padding}
            margin={margin}
            flex={flex}
            href={href}
            onPress={onPress}
            testId={testId}
            isDisabled={isDisabled}
            shape={shape}
            border={border}
            shadow={shadow}
        >
            <Flex
                flex={flex}
                colors="none"
                isHidden={isLoading}
                direction={direction}
                justify={justify}
                align={align}
            >
                {children}
            </Flex>
            {isLoading && (
                <Loading
                    {...propsLoading}
                    label={label || 'Loading...'}
                />
            )}
        </Flex>
    );
};


export const LoadingView = React.memo(LoadingView_);
