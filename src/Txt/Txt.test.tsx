import React from 'react';

import { testSnapshots, samplePropsTxt } from '../utils-test';
import { Txt } from './Txt';


jest.mock('../TextFragment/TextFragment');
jest.mock('./Highlighted');


testSnapshots('spec/Txt', Txt, samplePropsTxt);
