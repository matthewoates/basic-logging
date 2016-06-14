import Logger from './Logger';
import {_setOptions} from './Options';
import Levels from './Levels';

class Blog {
    static setOptions(options) {
        _setOptions(options);
    }

    static getInstance(options) {
        if (typeof options.prefix !== 'string') throw new Error('No prefix specified.');

        return new Logger(options);
    }
}

Blog.LogLevels = Levels;

//export default Blog;
module.exports = Blog; // mother fucker

// export default {};
//
// export function setOptions(options) { _setOptions(options); }
// export function getInstance(options) {
//     if (typeof options.prefix !== 'string') throw new Error('No prefix specified.');
//
//     return new Logger(options);
// }
//
//export var LogLevels = Levels;
