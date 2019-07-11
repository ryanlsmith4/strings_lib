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
    return this.toUpperCase()
}

/// CAPITALIZE WORDS ///
String.prototype.allWords = function () {
    return this.split(' ').map(word => word.firstCharToUpper().join(' '));
}

/// ODD CAPS ///
String.prototype.oddCaps = function () {
    let newString = ''
    for (i = 0; i < this.length; i++) {
        if( i % 2 != 0) {
            newString += this[i].toUpperCase()
        }
        else {
            newString += this[i].toLowerCase()
        }
    }
    return newString
}

/// EVEN CAPS ///
String.prototype.evenCaps = function () {
    let newString = ''
    for (i = 0; i < this.length; i++) {
        if( i % 2 === 0) {
            newString += this[i].toUpperCase()
        }
        else {
            newString += this[i].toLowerCase()
        }
    }
    return newString
}

let test = "Hellow Be A PERSONS"

console.log(test.evenCaps())