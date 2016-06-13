// https://github.com/hansifer/ConsoleFlair/blob/master/src/consoleFlair.js

// export default function styledConsoleLog() {
//     var argArray = [];
//
//     if (arguments.length) {
//         var startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi;
//         var endTagRe = /<\/span>/gi;
//
//         var reResultArray;
//         argArray.push(arguments[0].replace(startTagRe, '%c').replace(endTagRe, '%c'));
//         while (reResultArray = startTagRe.exec(arguments[0])) {
//             argArray.push(reResultArray[2]);
//             argArray.push('');
//         }
//
//         // pass through subsequent args since chrome dev tools does not (yet) support console.log styling of the following form: console.log('%cBlue!', 'color: blue;', '%cRed!', 'color: red;');
//         for (var j = 1; j < arguments.length; j++) {
//             argArray.push(arguments[j]);
//         }
//     }
//
//     console.log.apply(console, argArray);
//     return argArray;
// }

export default function styledConsoleLog() {
    var argArray = [];

    if (arguments.length) {
        var startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi;
        var endTagRe = /<\/span>/gi;

        var reResultArray;

        for (var i = 0; i < arguments.length; i++) {
            argArray.push(arguments[i].replace(startTagRe, '%c').replace(endTagRe, '%c'));
            while (reResultArray = startTagRe.exec(arguments[i])) {
                argArray.push(reResultArray[2]);
                argArray.push('');
            }
        }
    }

    return argArray;
}
