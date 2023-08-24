import React from 'react';

import { testSnapshots, samplePropsButton } from '../utils-test';
import { ButtonCheck } from './ButtonCheck';


jest.mock('../Button/Button');


testSnapshots('spec/ButtonCheck', ButtonCheck, samplePropsButton);
