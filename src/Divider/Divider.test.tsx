import React from 'react';

import { testSnapshots, samplePropsDivider } from '../utils-test';
import { Divider } from './Divider';


jest.mock('../Flex/Flex');

testSnapshots('spec/Divider', Divider, samplePropsDivider);
