import * as SimpleCodeUi from '../../src';

type TUtil = () => {
    showToastSuccess: jest.Mock;
    showToastError: jest.Mock;
    showToast: jest.Mock;
};

export const mockToasts: TUtil = () => {
    const showToastSuccess = jest.fn();
    const showToastError = jest.fn();
    const showToast = jest.fn();
    jest.spyOn(SimpleCodeUi, 'showToastSuccess').mockImplementation(showToastSuccess);
    jest.spyOn(SimpleCodeUi, 'showToastError').mockImplementation(showToastError);
    jest.spyOn(SimpleCodeUi, 'showToast').mockImplementation(showToast);
    
    return {
        showToastSuccess,
        showToastError,
        showToast,
    };
};
