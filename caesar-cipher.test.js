cipher = require('./caesar-cipher.js')


test('convert abc to bcd', () => {

    expect(cipher('abc', 1)).toBe('bcd')
}) 

test('wraps around z', () => {

    expect(cipher('xyza', 5)).toBe('cdef')
})

test('keeps case', () => {

    expect(cipher('WxZ', 10)).toBe('GhJ')
})

test('keeps punctuation', () => {

    expect(cipher('abc.abc', 2)).toBe('cde.cde')
})