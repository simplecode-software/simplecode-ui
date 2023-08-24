import { emptyFunction } from '../constants/empty';


type TLoggerMethod = (...args: ReadonlyArray<unknown>) => void;

type TLogger = Readonly<{
    debug: TLoggerMethod;
    info: TLoggerMethod;
    warn: TLoggerMethod;
    error: TLoggerMethod;
}>;


let logger: TLogger = {
    debug: emptyFunction,
    info: emptyFunction,
    warn: emptyFunction,
    error: emptyFunction,
};

export const getLogger = (): TLogger => logger;

export const setLogger = (newLogger: TLogger): void => { logger = newLogger; };
