import React from 'react';

import * as testSamples from '../utils-test/test-samples';
import {
    TPropsMentions,
    TPropVariants,
} from '../types';
import { testSnapshots } from '../utils-test/test-snapshots';
import { Mentions } from './Mentions';


jest.mock('../TextFragment/TextFragment');
jest.mock('../Mention/Mention');


const propVariants: TPropVariants<TPropsMentions> = {
    text: testSamples.variantsTextStrict,
    hasMentions: testSamples.variantsBoolean,
};


testSnapshots('spec/Mentions', Mentions, propVariants);
