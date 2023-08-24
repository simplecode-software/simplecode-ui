import React from 'react';

import { testSnapshots, samplePropsButtonGroup } from '../utils-test';
import { ButtonGroup } from './ButtonGroup';


jest.mock('../Flex/Flex');
jest.mock('../ListProgressive/ListProgressive');


testSnapshots('spec/ButtonGroup', ButtonGroup, samplePropsButtonGroup);
