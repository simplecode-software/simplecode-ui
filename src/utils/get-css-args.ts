import createCachedSelector from 're-reselect';

import { TStringList } from '../types';


export const getCssArgs = createCachedSelector<
    string,
    string,
    TStringList | null
>(
    (value) => value,
    (value) => (value ? value.split(/\s+/) : null),
)((value) => `getCssArgs-${value}`);
