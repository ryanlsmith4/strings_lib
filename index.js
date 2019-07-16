/* A String Library for npm */

/**
 * Capitalize the first letter of the current string.
 * @function
 * @returns {String} The capitalized version of the current string.
 * @example
 *  "this".capitalize() -> "This"
 */
String.prototype.firstLetterCap = function () {
    if (this.length == 0) {
        return '';
    }
    return this.charAt(0).toUpperCase() + this.slice(1);
 }

/**
 * Uppercase every character within the string.
 * @function
 * @returns {String} The entire string all capitalized of the current string.
 * @example
 *  "this".allCaps() -> "THIS"
 */
String.prototype.allCaps = function () {
    if (this.length == 0) {
        return '';
    }
    return this.toUpperCase();
}

/**
 * Uppercase every word within the string
 * @returns {String} with every first character in every word capitalized of the current string.
 * @example
 *  "this word".capitalizeWords() -> "This Word"
 */
String.prototype.allFirstUpper = function () {
    let listUpper =  this.split(' ').map(word => word.firstLetterCap())
    return listUpper.join(' ');
}

/**
 * Uppercase every other odd character not including white space.
 * @function
 * @returns {String} of every odd character capitalized of the current string.
 * @example
 *  "this".oddCaps() -> "tHiS"
 */
String.prototype.oddCaps = function () {
    let newString = '';
    for (i = 0; i < this.length; i++) {
        if( i % 2 != 0) {
            newString += this[i].toUpperCase();
        }
        else {
            newString += this[i].toLowerCase();
        }
    }
    return newString;
}

/**
 * Uppercase every even character not including white space.
 * @function
 * @returns {String} of every even character capitalized of the current string.
 * @example
 *  "this".evenCaps() -> "ThIs"
 */
String.prototype.evenCaps = function () {
    let newString = '';
    for (i = 0; i < this.length; i++) {
        if( i % 2 === 0) {
            newString += this[i].toUpperCase();
        }
        else {
            newString += this[i].toLowerCase();
        }
    }
    return newString;
}

/**
 * Remove any extra whitespace throughout the string.
 * @function
 * @returns {String} with all the extra white space removed.
 * @example
 *  "   this  word    ".removeExtraWhiteSpace() -> "this word"
 */
String.prototype.removeExtraSpaces = function (x = '') {
    return this.replace(/\s/g,x)
}

/**
 * Snake case the current string if it has spaces.
 * @function
 * @returns {String} that is a snake cased version of the current string
 * @example
 *  "snake this!".kabobCase() -> "snake_case!"
 */
String.prototype.snakeCases = function () {
    return this.removeExtraSpaces('_')
}

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
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
    }).join('')
}

