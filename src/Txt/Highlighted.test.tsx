import React from 'react';

import * as testSamples from '../utils-test/test-samples';
import {
    TPropsTxt, TPropVariants,
} from '../types';
import { testSnapshots } from '../utils-test/test-snapshots';
import { Highlighted } from './Highlighted';


jest.mock('../TextFragment/TextFragment');
jest.mock('./Mentions');


const propVariants: TPropVariants<TPropsTxt> = {
    flex: testSamples.variantsFlex,
    padding: testSamples.variantsCssSides,
    margin: testSamples.variantsCssSides,
    shape: testSamples.variantsShape,
    border: testSamples.variantsBorder,
    href: testSamples.variantsHref,
    colors: testSamples.variantsColors,
    testId: testSamples.variantsString,
    isDisabled: testSamples.variantsBoolean,
    opacityDisabled: testSamples.variantsOpacity,
    isHidden: testSamples.variantsBoolean,
    state: testSamples.variantsState,
    style: testSamples.variantsTextStyle,
    lines: testSamples.variantsLines,
    size: testSamples.variantsSize,
    font: testSamples.variantsFont,
    align: testSamples.variantsAlignText,
    shadow: testSamples.variantsShadowText,
    shadowBox: testSamples.variantsShadow,
    isOpaque: testSamples.variantsBoolean,
    children: testSamples.variantsText,
    onPress: testSamples.variantsCallback,
    hasMentions: testSamples.variantsBoolean,
};


testSnapshots('spec/Highlighted', Highlighted, propVariants);
