import React from 'react';
type TErrorState = Readonly<{
    error: Error | null;
}>;
type TFallbackComponent = React.ComponentType<TErrorState>;
export declare const withBoundary: <T extends Readonly<Record<never, never>>>(name: string, Component: React.ComponentType<T>, Fallback?: TFallbackComponent | null) => React.ComponentType<T>;
export {};
