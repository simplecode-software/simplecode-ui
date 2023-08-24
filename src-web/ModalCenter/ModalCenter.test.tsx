import { render } from '@testing-library/react';
import React from 'react';

import { emptyFunction, Txt } from '../../src';
import { withMocks } from '../utils-test/with-mocks';
import { TestRenderer } from '../TestRenderer';
import * as Module from './ModalCenter';


// eslint-disable-next-line global-require
const { ModalCenter } = withMocks<typeof Module>(() => require('./ModalCenter'));


describe('Modal Center / Snapshots', () => {
    it('renders with default props', () => {
        const { container } = render((
            <TestRenderer>
                <ModalCenter
                    title="title"
                    onClose={emptyFunction}
                />
            </TestRenderer>
        ));
        
        expect(container).toMatchSnapshot();
    });
    
    it('renders with additional elements', () => {
        const { container } = render((
            <TestRenderer>
                <ModalCenter
                    footer={(
                        <Txt>
                            footer
                        </Txt>
                    )}
                    header={(
                        <Txt>
                            header
                        </Txt>
                    )}
                    onClose={emptyFunction}
                />
            </TestRenderer>
        ));
        
        expect(container).toMatchSnapshot();
    });
});
