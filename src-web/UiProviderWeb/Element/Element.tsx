import React from 'react';


type TProps = Readonly<{
    Component: string | React.ComponentType;
    [id: string]: unknown;
}>;


const Element_: React.ForwardRefRenderFunction<unknown, TProps> = (props, ref) => {
    const {
        Component = 'div',
        ...propsElement
    } = props;
    
    type TWebComponent = React.ForwardRefExoticComponent<React.RefAttributes<HTMLElement> & {
        [id: string]: unknown;
    }>;
    const ComponentFinal: TWebComponent = Component as unknown as TWebComponent;
    
    return (
        <ComponentFinal
            ref={ref as React.RefObject<HTMLElement>}
            {...propsElement}
        />
    );
};


export const Element = React.memo(React.forwardRef(Element_));
