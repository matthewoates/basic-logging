import Logger from './Logger';
import {setOptions} from './Options';
import Levels from './Levels';

export default class Blog {
    static setOptions(options) {
        setOptions(options);
    }

    static getInstance(options) {
        if (typeof options.prefix !== 'string') throw new Error('No prefix specified.');

        return new Logger(options);
    }
}

export var LogLevels = Levels;
