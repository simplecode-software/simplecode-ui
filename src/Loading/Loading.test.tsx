import React from 'react';

import * as testSamples from '../utils-test/test-samples';
import { testSnapshots } from '../utils-test/test-snapshots';
import { Loading } from './Loading';


jest.mock('../Button/Button');


testSnapshots('spec/Loading', Loading, testSamples.samplePropsButton);
