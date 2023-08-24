import React from 'react';

import { TEmptyObject } from '../types';
import { getErrorMessage } from './get-error-message';
import { getLogger } from './log-interface';
import { showToastError } from './toaster';


type TErrorState = Readonly<{ error: Error | null }>;
type TFallbackComponent = React.ComponentType<TErrorState>;


export const withBoundary = <T extends TEmptyObject>(
    name: string,
    Component: React.ComponentType<T>,
    Fallback?: TFallbackComponent | null,
): React.ComponentType<T> => {
    return class ErrorBoundary extends React.Component<T, TErrorState> {
        constructor(props: T) {
            super(props);
            this.state = { error: null };
        }
      
        static getDerivedStateFromError(error: Error): TErrorState {
            return { error };
        }
      
        override componentDidCatch(error: Error): void {
            getLogger().error(
                'Boundary.Catch',
                getErrorMessage(error),
                name,
            );
            showToastError({
                text: 'Unexpected UI error has occured. Some elements may not be displayed.',
                duration: 0,
            });
        }
        
        override render(): React.ReactNode {
            const { error } = this.state;
            
            if (error) {
                if (!Fallback) {
                    return null;
                }
                return (
                    <Fallback error={error} />
                );
            }
            
            return (
                <Component {...this.props} />
            );
        }
    };
};
