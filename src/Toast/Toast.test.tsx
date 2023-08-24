import React from 'react';

import { testSnapshots, samplePropsToast } from '../utils-test';
import { Toast } from './Toast';


testSnapshots('spec/Toast', Toast, samplePropsToast);
