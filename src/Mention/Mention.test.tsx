import React from 'react';

import { testSnapshots, samplePropsMention } from '../utils-test';
import { Mention } from './Mention';


jest.mock('../TextFragment/TextFragment');


testSnapshots('spec/Mention', Mention, samplePropsMention);
