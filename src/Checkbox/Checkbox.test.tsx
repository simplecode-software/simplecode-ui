import React from 'react';

import { testSnapshots, samplePropsSwitch } from '../utils-test';
import { Checkbox } from './Checkbox';


jest.mock('../ButtonCheck/ButtonCheck');


testSnapshots('spec/Checkbox', Checkbox, samplePropsSwitch);
