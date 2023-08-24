import React from 'react';

import * as testSamples from '../utils-test/test-samples';
import { testSnapshots } from '../utils-test/test-snapshots';
import { ButtonRadio } from './ButtonRadio';


jest.mock('../Button/Button');


testSnapshots('spec/ButtonRadio', ButtonRadio, testSamples.samplePropsButton);
