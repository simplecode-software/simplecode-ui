import React from 'react';

import { getLogger } from '../utils/log-interface';
import { TModalContext } from '../types';


export const ModalContext = React.createContext<TModalContext>({
    showModal: () => { getLogger().warn('ModalProvider.showModal not assigned.'); },
    hideModal: () => { getLogger().warn('ModalProvider.hideModal not assigned.'); },
    showToast: () => { getLogger().warn('ModalProvider.showToast not assigned.'); },
});
