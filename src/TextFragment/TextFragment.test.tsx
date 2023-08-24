import React from 'react';

import { testSnapshots, samplePropsTextFragment } from '../utils-test';
import { TextFragment } from './TextFragment';


testSnapshots('spec/TextFragment', TextFragment, samplePropsTextFragment);
