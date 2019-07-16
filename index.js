/* A String Library for npm */

/** This Function returns the Strings First letter Capitalized*/
String.prototype.firstLetterCap = function () {
    if (this.length == 0) {
        return '';
    }
    return this.charAt(0).toUpperCase() + this.slice(1);
 }

/** This Function returns the whole String Capitalized*/
String.prototype.allCaps = function () {
    if (this.length == 0) {
        return '';
    }
    return this.toUpperCase();
}

/** This Function returns all the first letters of words Capitalized*/
String.prototype.allFirstUpper = function () {
    let listUpper =  this.split(' ').map(word => word.firstLetterCap())
    return listUpper.join(' ');
}

/** This Function returns all odds Capitalized*/
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

/** This Function returns all evens Capitalized*/
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
/** This Function returns the string with all spaces removed*/
String.prototype.removeExtraSpaces = function (x = '') {
    return this.replace(/\s/g,x)
}

/** This Function returns the strings in snake_casing*/
String.prototype.snakeCases = function () {
    return this.removeExtraSpaces('_')
}

/** This Function returns the strings in camelCase*/
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

