import React from 'react';
import createCachedSelector from 're-reselect';

import { getCssSides } from './get-css-sides';


export const getMargins = createCachedSelector<
    string | number | null,
    string | number | null,
    React.CSSProperties | null
>(
    (value) => value,
    (value) => getCssSides('margin', value),
)((value) => `getMargins-${value}`);
