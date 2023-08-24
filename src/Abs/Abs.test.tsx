import React from 'react';

import { testSnapshots, samplePropsAbs } from '../utils-test';
import { Abs } from './Abs';


jest.mock('../Flex/Flex');

testSnapshots('spec/Abs', Abs, samplePropsAbs);
