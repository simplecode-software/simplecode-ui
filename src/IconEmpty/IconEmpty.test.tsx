import React from 'react';

import { testSnapshots, samplePropsIconEmpty } from '../utils-test';
import { IconEmpty } from './IconEmpty';


jest.mock('../TextFragment/TextFragment');


testSnapshots('spec/IconEmpty', IconEmpty, samplePropsIconEmpty);
