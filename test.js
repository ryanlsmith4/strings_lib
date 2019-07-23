
require('./');

test('Smoke Test', () => {
    expect(true).toBe(true);
    expect(true).not.toBe(false);
});

test('Should capitlaize the first letter', () => {
    expect('Hello').toBe("hello".firstLetterCap())
    expect('WOW').toBe('wOW'.firstLetterCap())
    expect('This is a wonderful sentence').toBe('this is a wonderful sentence'.firstLetterCap())
    expect('').toBe(''.firstLetterCap());
})
    
test('Should Capitalize all the letters', () => {
    expect('THIS WORD').toBe('this word'.allCaps())
    expect('').toBe(''.allCaps());
})

test('Should Capitalize all first letter chars', () => {
    expect('This Is A Wonderful').toBe('this is a wonderful'.allFirstUpper())
})

test('Should caplitalize all Odd letters', () => {
    expect('tHiS').toBe('this'.oddCaps())
})

test('Should capitalize even Letters', () => {
    expect('ThIs').toBe('this'.evenCaps())
})

test('Should remove all white space in words', () => {
    expect('thishasnowhitespace').toBe(' t h i s h a s n o w h i t e s p a c e'.removeExtraSpaces())
})

test('Should Make the words snake case', () => {
    expect('HELO_WORLD').toBe('HELO WORLD'.snakeCases())
})
    
test('Should  Make the words camel case', () => {
    expect('helloWorlds').toBe('hello worlds'.camelCase())
})
