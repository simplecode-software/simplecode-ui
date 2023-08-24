import {
    TButtonEmbedNamed, TButtonEmbedNamedList, TPresetColorsName, TSpecSize,
} from '../../../../../src';

const ghostChunk: TButtonEmbedNamed = {
    name: '', shadow: 'none', colors: 'primaryghost', border: 'md', label: 'Ghost',
};

export const buttonRow: TButtonEmbedNamedList = [
    {
        name: 'rounded-shadow', shape: null, shadow: null, colors: 'primary', label: 'Shadow',
    },
    {
        name: 'md-shadow', shape: 'md', shadow: null, colors: 'primary', label: 'Shadow',
    },
    {
        name: 'sm-shadow', shape: 'sm', shadow: null, colors: 'primary', label: 'Shadow',
    },
    {
        name: 'shadow', shape: 'none', shadow: null, colors: 'primary', label: 'Shadow',
    },
    
    {
        name: 'rounded', shape: null, shadow: 'none', colors: 'primary', label: 'Flat',
    },
    {
        name: 'md', shape: 'md', shadow: 'none', colors: 'primary', label: 'Flat',
    },
    {
        name: 'sm', shape: 'sm', shadow: 'none', colors: 'primary', label: 'Flat',
    },
    {
        name: 'none', shape: 'none', shadow: 'none', colors: 'primary', label: 'Flat',
    },
    
    {
        ...ghostChunk, name: 'rounded-ghost', shape: null,
    },
    {
        ...ghostChunk, name: 'md-ghost', shape: 'md',
    },
    {
        ...ghostChunk, name: 'sm-ghost', shape: 'sm',
    },
    {
        ...ghostChunk, name: 'none-ghost', shape: 'none',
    },
    
    {
        name: 'rounded-text', shape: 'none', shadow: 'none', colors: 'primarytext', label: 'Text',
    },
];

export const colorSetNames: ReadonlyArray<TPresetColorsName> = [
    'primary', 'secondary', 'tertiary', 'accent', 'success', 'warning',
    'error',
];

export const sizeNames: ReadonlyArray<TSpecSize | null> = [null, 'sm'];
