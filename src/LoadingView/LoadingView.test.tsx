import React from 'react';

import * as testSamples from '../utils-test/test-samples';
import { testSnapshots } from '../utils-test/test-snapshots';
import { LoadingView } from './LoadingView';


jest.mock('../Flex/Flex');
jest.mock('../Loading/Loading');


testSnapshots('spec/LoadingView', LoadingView, testSamples.samplePropsLoadingView);
