import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { TPropsIconComponent } from '../../src';

const iconMap = new Map<React.ComponentType<IconBaseProps>, React.FunctionComponent<TPropsIconComponent>>();

export const withIcon = (
    Component: React.ComponentType<IconBaseProps>,
): React.ComponentType<TPropsIconComponent> => {
    const existIcon: React.FunctionComponent<TPropsIconComponent> | undefined = iconMap.get(Component);
    
    if (existIcon) {
        return existIcon;
    }
    
    const Icon: React.FunctionComponent<TPropsIconComponent> = (props) => {
        const {
            size, color,
        } = props;
        
        return (
            <Component
                size={size || undefined}
                color={color || undefined}
            />
        );
    };
    
    iconMap.set(Component, Icon);

    return Icon;
};
