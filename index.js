/// CAPITALIZE FIRST LETTER ///
String.prototype.firstLetterCap = function () {
    if (this.length == 0) {
        return '';
    }
    return this.charAt(0).toUpperCase() + this.slice(1);
 }

/// CAPITALIZE ALL LETTERS ///
String.prototype.allCaps = function () {
    if (this.length == 0) {
        return '';
    }
    return this.toUpperCase();
}

/// CAPITALIZE WORDS ///
String.prototype.allFirstUpper = function () {
    let listUpper =  this.split(' ').map(word => word.firstLetterCap())
    return listUpper.join(' ');
}

/// ODD CAPS ///
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

/// EVEN CAPS ///
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
/// REMOVE EXTRA SPACES ///
String.prototype.removeExtraSpaces = function (x = '') {
    return this.replace(/\s/g,x)
}

/// SNAKECASES ///
String.prototype.snakeCases = function () {
    return this.removeExtraSpaces('_')
}

/// CAMELCASE ///
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

// console.log('this should cap all first letters'.allFirstUpper())