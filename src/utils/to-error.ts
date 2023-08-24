export const toError = (
    error: unknown,
    defaultMessage: string = 'Unknown error.',
): Error => {
    return error instanceof Error ? error : new Error(defaultMessage);
};

