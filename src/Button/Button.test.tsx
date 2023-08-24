import React from 'react';

import { testSnapshots, samplePropsButton } from '../utils-test';
import { Button } from './Button';


jest.mock('../Flex/Flex');
jest.mock('../Txt/Txt');
jest.mock('../Icon/Icon');
jest.mock('../ModalSelect/ModalSelect');

testSnapshots('spec/Button', Button, samplePropsButton);
