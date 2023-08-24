import React from 'react';

import { TMentionContext } from '../types';


export const MentionContext = React.createContext<TMentionContext>({
    name: null,
    colors: null,
    colorsSelf: null,
});
