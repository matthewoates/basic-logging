import {getOptions} from './Options';
import Levels from './Levels';

export default class Logger {
    constructor(options) {
        if (typeof options.prefix !== 'string') throw new Error('No prefix specified');

        var parts = options.prefix.split('/');

        this.prefix = parts[parts.length - 1].replace('.js', '');
    }

    time(event) {
        if (console.time) console.time(this.prefix + '|' + event);
    }

    timeEnd(event) {
        if (console.timeEnd) console.timeEnd(this.prefix + '|' + event);
    }
}

function makeLogFn(consoleFn, decorator, logLevel) {
    return function () {
        if (getOptions().logLevel <= logLevel) {
            console[consoleFn](
                decorator,
                getOptions().formatTimestamp(new Date()),
                this.prefix + ' ➤',
                ...arguments
            );
        }
    }
}

Logger.prototype.fatal = makeLogFn('error', '💣', Levels.FATAL);
Logger.prototype.error = makeLogFn('error', '✖', Levels.ERROR);
Logger.prototype.warn  = makeLogFn('log', '⚠', Levels.WARN);
Logger.prototype.info  = makeLogFn('log', 'ℹ', Levels.INFO);
Logger.prototype.log   = makeLogFn('log', '', Levels.LOG);
Logger.prototype.debug = makeLogFn('log', '🐛', Levels.DEBUG);
Logger.prototype.trace = makeLogFn('log', '📋', Levels.TRACE);
