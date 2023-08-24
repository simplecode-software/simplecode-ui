import { TCustomProps } from '../../src';


type TResult<T> = Exclude<T, null | undefined | false | '' | 0>;

export const removeEmptyFields = <T extends TCustomProps>(obj: T): TResult<T> => {
    let result: TResult<T> = {} as TResult<T>;
    
    Object.entries(obj).forEach(([k, v]) => {
        if (v) {
            result = { ...result, [k]: v };
        }
    });
    
    return result;
};
