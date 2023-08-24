import React from 'react';
import createCachedSelector from 're-reselect';

import { getCssSides } from './get-css-sides';


export const getPaddings = createCachedSelector<
    string | number | null,
    string | number | null,
    React.CSSProperties | null
>(
    (value) => value,
    (value) => getCssSides('padding', value),
)((value) => `getPaddings-${value}`);
