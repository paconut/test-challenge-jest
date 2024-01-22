const { default: expect } = require('expect');

const DNA = require('../dna');

test('de CTAGGGTA se espera CTAGGGTA', () => {
    expect(DNA('CTAGGGTA')).toBe('CTAGGGTA');
})
