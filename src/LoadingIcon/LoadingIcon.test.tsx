import React from 'react';

import { testSnapshots, samplePropsLoadingIcon } from '../utils-test';
import { LoadingIcon } from './LoadingIcon';


jest.mock('../TextFragment/TextFragment');


testSnapshots('spec/LoadingIcon', LoadingIcon, samplePropsLoadingIcon);
