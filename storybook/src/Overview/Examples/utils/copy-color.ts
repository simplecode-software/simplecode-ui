export const copySpecColor = (
    name: string,
    value: string,
): string => {
    window.navigator.clipboard.writeText(name);
    return ` - "${name}" (${value})`;
};
