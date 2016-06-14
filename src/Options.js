import Levels from './Levels';

var options = {
    formatTimestamp: date => date.toTimeString(),
    logLevel: (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production') ? Levels.INFO : Levels.DEBUG
};

export function getOptions() {
    return options;
}

export function _setOptions(newOptions) {
    options = {...options, ...newOptions};
}
