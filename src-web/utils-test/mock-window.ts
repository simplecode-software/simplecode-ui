import { TCbVoid } from '../../src';

const mockResponse = jest.fn();

type TUtil = () => {
    patchWindow: () => jest.Mock<void>;
    revertWindow: TCbVoid;
};

export const mockWindow: TUtil = () => {
    const originalOpen = window.open;
    const originalLocation = window.location;

    const patchWindow = (): jest.Mock<void> => {
        const open = jest.fn();
        
        Object.assign(window, {
            open,
        });
        
        Object.defineProperty(window, 'location', {
            value: {
                assign: mockResponse,
            },
            writable: true,
        });
        
        return open;
    };

    const revertWindow = (): void => {
        Object.assign(window, {
            open: originalOpen,
            location: originalLocation,
        });
        
        Object.defineProperty(window, 'location', originalLocation);
    };

    return {
        patchWindow,
        revertWindow,
    };
};
