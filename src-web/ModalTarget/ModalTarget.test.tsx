import { render } from '@testing-library/react';
import React from 'react';
import { emptyFunction } from '../../src';
import { withMocks } from '../utils-test/with-mocks';
import { TestRenderer } from '../TestRenderer';
import * as Module from './ModalTarget';


// eslint-disable-next-line global-require
const { ModalTarget } = withMocks<typeof Module>(() => require('./ModalTarget'));


describe('Modal Target / Snapshots', () => {
    it('renders with props', () => {
        const { container } = render((
            <TestRenderer>
                <ModalTarget
                    colors="error"
                    isNonBlocking
                    testId="ModalTargetTestId"
                    onClose={emptyFunction}
                />
            </TestRenderer>
        ));

        expect(container).toMatchSnapshot();
    });
});
