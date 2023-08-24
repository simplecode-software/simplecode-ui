import { emptyArray, emptyObject } from '../constants/empty';
import { TPropVariants } from '../types';


export const getTestProps = <T extends Record<string, unknown>>(
    variants: TPropVariants<T>,
): ReadonlyArray<T> => {
    const keys: ReadonlyArray<keyof T> = Object.keys(variants);
    const values: ReadonlyArray<ReadonlyArray<T>> = Object.values(variants);
    
    const maxVariants = Math.max.apply(null, values.map((item) => item.length));
    
    let testProps: ReadonlyArray<T> = emptyArray as ReadonlyArray<T>;
    
    for (let i = 0; i < maxVariants; i++) {
        let props = emptyObject as T;
        keys.forEach((key) => {
            const values = variants[key];
            if (!values) {
                return;
            }
            const index = i % values.length;
            props = { ...props, [key]: values[index] };
        });
        
        testProps = [...testProps, props];
    }
    
    return testProps;
};
