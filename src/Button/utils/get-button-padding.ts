export const getButtonPadding = (
    isColumn: boolean,
    isAuto: boolean,
    padding: string | number | null,
): string | number | null => {
    if (!padding || isColumn || isAuto) {
        return padding;
    }
    if (typeof padding === 'number') {
        return `0 ${padding}`;
    }
    if (typeof padding === 'string') {
        return padding;
    }
    return null;
};
