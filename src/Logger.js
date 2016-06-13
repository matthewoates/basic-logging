import {getOptions} from './Options';
import Levels from './Levels';
import ansiHTML from 'ansi-html';
import chalk from 'chalk';
import ansi from 'ansi-256-colors';
import flair from './Flair';
import ansi_up from 'ansi_up';

const IS_BROWSER = (typeof window !== 'undefined');

function colorize(text, rgb) {
    if (IS_BROWSER) return text;
    return ansi.fg.getRgb(rgb[0], rgb[1], rgb[2]) + text + ansi.reset;
}

function log(fn, ...elements) {
    console[fn](...elements);
}

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
                colorize(getOptions().formatTimestamp(new Date()), [1, 1, 1]),
                colorize(this.prefix, [5, 0, 3]),
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
