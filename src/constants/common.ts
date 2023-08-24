import React from 'react';


export const hiddenStyle: React.CSSProperties = {
    position: 'absolute',
    width: 0,
    maxWidth: 0,
    height: 0,
    maxHeight: 0,
    padding: 0,
    overflow: 'hidden',
};

export const fullStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
};
