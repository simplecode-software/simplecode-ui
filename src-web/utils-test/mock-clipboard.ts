import { TCbVoid } from '../../src';


type TUtil = () => {
    patchClipboard: () => Clipboard;
    revertClipboard: TCbVoid;
};

export const mockClipboard: TUtil = () => {
    const originalClipboard = navigator.clipboard;

    const patchClipboard = (): Clipboard => {
        const writeText = jest.fn();
        Object.assign(navigator, {
            clipboard: {
                writeText,
            },
        });

        return navigator.clipboard;
    };
    
    const revertClipboard: TCbVoid = () => {
        Object.assign(navigator, {
            clipboard: originalClipboard,
        });
    };
    
    return {
        patchClipboard,
        revertClipboard,
    };
};
