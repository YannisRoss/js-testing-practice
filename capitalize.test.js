let capitalize = require('./capitalize.js')


test('capitalizes camelot', () => {
    expect(capitalize('camelot')).toBe('Camelot');
  });