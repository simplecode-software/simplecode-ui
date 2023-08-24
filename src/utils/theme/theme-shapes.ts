import React from 'react';
import {
    TThemeShapes, TDirectionalStyle,
} from '../../types';


const getTopShape = (radius: number): React.CSSProperties => ({
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
});

const getBottomShape = (radius: number): React.CSSProperties => ({
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: radius,
});

const getLeftShape = (radius: number): React.CSSProperties => ({
    borderTopLeftRadius: radius,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: radius,
});

const getRightShape = (radius: number): React.CSSProperties => ({
    borderTopLeftRadius: 0,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: 0,
});

const getShapesForRadius = (radius: number): TDirectionalStyle => ({
    all: { borderRadius: radius },
    top: getTopShape(radius),
    bottom: getBottomShape(radius),
    left: getLeftShape(radius),
    right: getRightShape(radius),
});

export const mapShapes = (sm: number, md: number, lg: number, xlg: number): TThemeShapes => ({
    rounded: getShapesForRadius(100),
    sm: getShapesForRadius(sm),
    md: getShapesForRadius(md),
    lg: getShapesForRadius(lg),
    xlg: getShapesForRadius(xlg),
});
