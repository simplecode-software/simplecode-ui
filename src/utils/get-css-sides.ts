import createCachedSelector from 're-reselect';

import { TStringList } from '../types';
import { getCssArgs } from './get-css-args';


const getCssSidesN = createCachedSelector<
    string,
    TStringList,
    string,
    TStringList,
    React.CSSProperties | null
>(
    (name) => name,
    (_name, splitted) => splitted,
    (name, splitted) => {
        if (!splitted.length) {
            return null;
        }
        
        const mapped = splitted.map((v) => ((Number.isNaN(+v) ? v : +v) ?? 0));
        
        if (mapped.length === 1) {
            return {
                [`${name}Top`]: mapped[0] ?? 0,
                [`${name}Right`]: mapped[0] ?? 0,
                [`${name}Bottom`]: mapped[0] ?? 0,
                [`${name}Left`]: mapped[0] ?? 0,
            };
        }
        if (mapped.length === 2) {
            return {
                [`${name}Top`]: mapped[0] ?? 0,
                [`${name}Right`]: mapped[1] ?? 0,
                [`${name}Bottom`]: mapped[0] ?? 0,
                [`${name}Left`]: mapped[1] ?? 0,
            };
        }
        if (mapped.length === 3) {
            return {
                [`${name}Top`]: mapped[0] ?? 0,
                [`${name}Right`]: mapped[1] ?? 0,
                [`${name}Bottom`]: mapped[2] ?? 0,
                [`${name}Left`]: mapped[1] ?? 0,
            };
        }

        return {
            [`${name}Top`]: mapped[0] ?? 0,
            [`${name}Right`]: mapped[1] ?? 0,
            [`${name}Bottom`]: mapped[2] ?? 0,
            [`${name}Left`]: mapped[3] ?? 0,
        };
    },
)((name, splitted) => `getCssSides/getCssSides-${splitted.length}-${name}-${splitted.join(',')}`);


export const getCssSides = createCachedSelector<
    string,
    string | number | null,
    string,
    string | number | null,
    React.CSSProperties | null
>(
    (name) => name,
    (_name, value) => value,
    (name, value) => {
        if (!name) {
            return null;
        }
        if (typeof value === 'number') {
            return { [name]: value };
        }
        if (!value) {
            return null;
        }
        
        const splitted: TStringList | null = getCssArgs(value);
        
        if (!splitted) {
            return null;
        }
        
        return getCssSidesN(name, splitted);
    },
)((name, value) => `getCssSides-${name}-${value}`);
