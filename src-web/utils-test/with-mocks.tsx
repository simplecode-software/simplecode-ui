import { TUnknownObject } from '../../src';
import { mockDynamic } from './mock-dynamic';


export const withMocks = <T extends TUnknownObject>(requireCb: () => unknown): T => {
    let resultModule: unknown;
    
    mockDynamic(() => { resultModule = requireCb(); });
    
    return resultModule as T;
};
