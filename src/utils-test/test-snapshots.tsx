import React from 'react';
import renderer from 'react-test-renderer';

import { TestRenderer } from '../../src-web';
import { TAnyComponent, TPropVariants } from '../types';
import { getPropsHash } from './get-props-hash';
import { getTestProps } from './get-test-props';


jest.mock('../../src-web/UiProviderWeb/ToastWeb/ToastWeb');


export const testSnapshots = <T extends Record<string, unknown>>(
    name: string,
    Component: TAnyComponent,
    variants: TPropVariants<T>,
): void => {
    describe(name, () => {
        getTestProps(variants).forEach((props) => {
            it(`renders ${getPropsHash(props)}`, () => {
                const component = renderer.create((
                    <TestRenderer>
                        <Component {...props} />
                    </TestRenderer>
                ));
                expect(component.toJSON()).toMatchSnapshot();
            });
        });
    });
};
