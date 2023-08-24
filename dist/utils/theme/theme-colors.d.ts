import { TColorSet, TDict } from '../../types';
export declare const createFlatColorset: (text: string, textHover: string, textActive: string, bg: string, bgHover: string, bgActive: string) => TColorSet;
export declare const createGhostColorset: (text: string, textHover: string, textActive: string) => TColorSet;
export declare const createTextColorset: (text: string, textHover: string, textActive: string) => TColorSet;
export declare const createStateColorsetTriplet: (name: string) => TDict<TColorSet>;
