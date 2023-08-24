import React from 'react';

import * as testSamples from '../utils-test/test-samples';
import { testSnapshots } from '../utils-test/test-snapshots';
import { Switch } from './Switch';


jest.mock('../Button/Button');


testSnapshots('spec/Switch', Switch, testSamples.samplePropsSwitch);
