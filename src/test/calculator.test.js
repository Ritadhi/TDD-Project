const { add } = require('../stringCalculator');

describe('String Calculator', () => {
    it('add empty string', () => {
        const result = add('');

        expect(result).toBe(0)
    });

});