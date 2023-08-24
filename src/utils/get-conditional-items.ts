import { emptyArray } from '../constants/empty';
import { TUnknownObject } from '../types';


export const getConditionalItems = <T extends TUnknownObject>(
    isAvailable: boolean,
    item: T,
): ReadonlyArray<T> => {
    if (!isAvailable) {
        return emptyArray as ReadonlyArray<T>;
    }
    return [item];
};
