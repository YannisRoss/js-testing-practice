analyze = require('./analyze.js')

test('average', () => {

    expect(analyze([1,2,3]).average).toBe(2)

})


test('min', () => {

    expect(analyze([1,2,3]).min).toBe(1)

})


test('max', () => {

    expect(analyze([1,2,3]).max).toBe(3)

})


test('length', () => {

    expect(analyze([1,2,3]).length).toBe(3)

})