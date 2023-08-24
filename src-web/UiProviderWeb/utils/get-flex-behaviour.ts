
type TGetFlexBehaviour = (flex?: number | null) => Readonly<{
    flexShrink: number;
    flexGrow: number;
}>;

export const getFlexBehaviour: TGetFlexBehaviour = (flex) => {
    if (!flex) {
        return {
            flexShrink: 0,
            flexGrow: 0,
        };
    }
    if (flex < 0) {
        return {
            flexShrink: -flex,
            flexGrow: 0,
        };
    }

    return {
        flexShrink: flex,
        flexGrow: flex,
    };
};

