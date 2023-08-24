import { TDict } from '../../types';

const defaultColor: string = 'magenta';

export const takeSpecColor = (
    spec: TDict<string>,
    name: string,
): string => (spec[name] || defaultColor);
