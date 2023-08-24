import React from 'react';

import { testSnapshots, samplePropsInput } from '../utils-test';
import { Input } from './Input';


jest.mock('../Flex/Flex');
jest.mock('../ListItem/ListItem');
jest.mock('../InputZone/InputZone');

testSnapshots('spec/Input', Input, samplePropsInput);
