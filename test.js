'use strict';

require('mocha');
const assert = require('assert');
require('./');

describe('Built out the String Type library to have further functionality', () => {

    it('Smoke Test', () => {
        assert.equal(true, true);
        assert.notEqual(true, false)
    });

    it('Should capitlaize the first letter', () => {
        assert.equal('Hello', "hello".firstLetterCap())
        assert.equal('WOW', 'wOW'.firstLetterCap())
        assert.equal('This is a wonderful sentence', 'this is a wonderful sentence'.firstLetterCap())
    })
    
    it('Should Capitalize all the letters', () => {
        assert.equal('THIS WORD', 'this word'.allCaps())
    })

    it('Should Capitalize all first letter chars', () => {
        assert.equal('This Is A Wonderful', 'this is a wonderful'.allFirstUpper())
    })

    it('Should caplitalize all Odd letters', () => {
        assert.equal('tHiS', 'this'.oddCaps())
    })

    it('Should capitalize even Letters', () => {
        assert.equal('ThIs', 'this'.evenCaps())
    })

    it('Should remove all white space in words', () => {
        assert.equal('thishasnowhitespace', ' t h i s h a s n o w h i t e s p a c e'.removeExtraSpaces())
    })

    it('Should Make the words snake case', () => {
        assert.equal('HELO_WORLD', 'HELO WORLD'.snakeCases())
    })
    
    it('Should  Make the words camel case', () => {
        assert.equal('helloWorlds', 'hello worlds'.camelCase())
    })
})