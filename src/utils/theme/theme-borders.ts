import React from 'react';
import {
    TDirectionalStyle, TThemeBorders,
} from '../../types';


const borderZero: React.CSSProperties = {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
};

const getAllBorder = (width: number): React.CSSProperties => ({
    ...borderZero,
    borderTopWidth: width,
    borderRightWidth: width,
    borderBottomWidth: width,
    borderLeftWidth: width,
});

const getTopBorder = (width: number): React.CSSProperties => ({
    ...borderZero,
    borderTopWidth: width,
    borderBottomWidth: width,
    borderBottomColor: 'transparent',
});

const getBottomBorder = (width: number): React.CSSProperties => ({
    ...borderZero,
    borderTopWidth: width,
    borderBottomWidth: width,
    borderTopColor: 'transparent',
});

const getLeftBorder = (width: number): React.CSSProperties => ({
    ...borderZero,
    borderLeftWidth: width,
});

const getRightBorder = (width: number): React.CSSProperties => ({
    ...borderZero,
    borderRightWidth: width,
});

const getBordersForWidth = (width: number): TDirectionalStyle => ({
    all: getAllBorder(width),
    top: getTopBorder(width),
    bottom: getBottomBorder(width),
    left: getLeftBorder(width),
    right: getRightBorder(width),
});

export const mapBorders = (sm: number, md: number, lg: number, xlg: number): TThemeBorders => ({
    sm: getBordersForWidth(sm),
    md: getBordersForWidth(md),
    lg: getBordersForWidth(lg),
    xlg: getBordersForWidth(xlg),
});
