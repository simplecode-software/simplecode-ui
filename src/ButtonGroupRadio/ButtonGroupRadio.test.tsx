import React from 'react';

import { testSnapshots, samplePropsButtonGroup } from '../utils-test';
import { ButtonGroupRadio } from './ButtonGroupRadio';


jest.mock('../ButtonGroup/ButtonGroup');


testSnapshots('spec/ButtonGroupRadio', ButtonGroupRadio, samplePropsButtonGroup);
