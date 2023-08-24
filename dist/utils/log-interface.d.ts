type TLoggerMethod = (...args: ReadonlyArray<unknown>) => void;
type TLogger = Readonly<{
    debug: TLoggerMethod;
    info: TLoggerMethod;
    warn: TLoggerMethod;
    error: TLoggerMethod;
}>;
export declare const getLogger: () => TLogger;
export declare const setLogger: (newLogger: TLogger) => void;
export {};
