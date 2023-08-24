export const getErrorMessage = (
    error: unknown,
    defaultMessage: string = 'Unknown error.',
): string => {
    return (error instanceof Error && error.message) || defaultMessage;
};
