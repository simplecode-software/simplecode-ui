import React from 'react';

import { TKeyboardContext } from '../types';


export const KeyboardContext = React.createContext<TKeyboardContext>({
    height: 0,
});
