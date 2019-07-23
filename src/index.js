/* A String Library for npm */

/**
 * Capitalize the first letter of the current string.
 * @function
 * @returns {String} The capitalized version of the current string.
 * @example
 *  "this".capitalize() -> "This"
 */
String.prototype.firstLetterCap = function () {
    if (this.length === 0) {
        return '';
    }
    return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * Uppercase every character within the string.
 * @function
 * @returns {String} The entire string all capitalized of the current string.
 * @example
 *  "this".allCaps() -> "THIS"
 */
String.prototype.allCaps = function () {
    if (this.length === 0) {
        return '';
    }
    return this.toUpperCase();
};

/**
 * Uppercase every word within the string
 * @returns {String} with every first character in every word capitalized of the current string.
 * @example
 *  "this word".capitalizeWords() -> "This Word"
 */
String.prototype.allFirstUpper = function () {
    let listUpper =  this.split(' ').map(word => word.firstLetterCap());
    return listUpper.join(' ');
};

/**
 * Uppercase every other odd character not including white space.
 * @function
 * @returns {String} of every odd character capitalized of the current string.
 * @example
 *  "this".oddCaps() -> "tHiS"
 */
String.prototype.oddCaps = function () {
    let newString = '';
    for (let i = 0; i < this.length; i++) {
        if( i % 2 != 0) {
            newString += this[i].toUpperCase();
        }
        else {
            newString += this[i].toLowerCase();
        }
    }
    return newString;
};

/**
 * Uppercase every even character not including white space.
 * @function
 * @returns {String} of every even character capitalized of the current string.
 * @example
 *  "this".evenCaps() -> "ThIs"
 */
String.prototype.evenCaps = function () {
    let newString = '';
    for (let i = 0; i < this.length; i++) {
        if( i % 2 === 0) {
            newString += this[i].toUpperCase();
        }
        else {
            newString += this[i].toLowerCase();
        }
    }
    return newString;
};

/**
 * Remove any extra whitespace throughout the string.
 * @function
 * @returns {String} with all the extra white space removed.
 * @example
 *  "   this  word    ".removeExtraWhiteSpace() -> "this word"
 */
String.prototype.removeExtraSpaces = function (x = '') {
    return this.replace(/\s/g,x);
};

/**
 * Snake case the current string if it has spaces.
 * @function
 * @returns {String} that is a snake cased version of the current string
 * @example
 *  "snake this!".kabobCase() -> "snake_case!"
 */
String.prototype.snakeCases = function () {
    return this.removeExtraSpaces('_');
};

/**
 * Convert the current string to camel case if it has spaces.
 * @function
 * @returns {String} that is a camel cased version of the current string
 * @example
 *  "camel case these words!".camelCase() -> "camelCaseTheseWords"
 */
String.prototype.camelCase = function () {
    return this.split(' ').map(function(word, index) {
    // If it is the first word make sure to lowercase all the chars.
        if (index == 0) {
            return word.toLowerCase();
        }
        else {
        // If it is not the first word only upper case the first char and lowercase the rest.
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }).join('');
};

/**
 *  Randomly color text output
 * @function
 * @returns {String} input returns as colored text
 */
String.prototype.colorMe = function () {
    const colorsDict = { 
        Reset : '\x1b[0m',
        Bright : '\x1b[1m',
        Dim : '\x1b[2m',
        Underscore : '\x1b[4m',
        Blink : '\x1b[5m',
        Reverse : '\x1b[7m',
        Hidden : '\x1b[8m',       
        FgBlack : '\x1b[30m',
        FgRed : '\x1b[31m',
        FgGreen : '\x1b[32m',
        FgYellow : '\x1b[33m',
        FgBlue : '\x1b[34m',
        FgMagenta : '\x1b[35m',
        FgCyan : '\x1b[36m',
        FgWhite : '\x1b[37m',
        BgBlack : '\x1b[40m',
        BgRed : '\x1b[41m',
        BgGreen : '\x1b[42m',
        BgYellow : '\x1b[43m',
        BgBlue : '\x1b[44m',
        BgMagenta : '\x1b[45m',
        BgCyan : '\x1b[46m',
        BgWhite : '\x1b[47m', 
    };
    let keys = [];
    for (let prop in colorsDict) {
        // console.log(prop);
        keys.push(prop);
      
    }

    let randomColor = keys[keys.length * Math.random() << 0];
    // console.log('color:', color);
    // console.log('colorsDict:', Object.keys(colorsDict));
    let color = colorsDict[randomColor];
    console.log(this + color);
    // console.log(this)
    // return this + color;

};

/**
 * Take input and return it enrypted
 * @function
 * @returns {String} input that is encrypted
 * @example
 * "Cool words that get encrypted".encrypt() -> ""
 */

/** 
 * Take input and decrypt it if it was encrypted by .encrypt()
 * @function
 * @returns {String} input is decrypted
 *  
 * */

// console.log('HelloWorld'.oddCaps());