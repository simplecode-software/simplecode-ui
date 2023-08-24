import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


export const pressOnTestId = (testId: string): void => {
    const target = screen.getByTestId(testId);
    userEvent.click(target);
};

// should be called when it doesn't matter if the element exists
export const tryPressOnTestId = (testId: string): void => {
    const target = screen.queryByTestId(testId);
    if (target) {
        userEvent.click(target);
    }
};
