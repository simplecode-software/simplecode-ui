import React from 'react';

import { testSnapshots, samplePropsIcon } from '../utils-test';
import { Icon } from './Icon';


jest.mock('../Flex/Flex');
jest.mock('../IconEmpty/IconEmpty');


testSnapshots('spec/Icon', Icon, samplePropsIcon);
