const { add } = require('../stringCalculator');

describe('String Calculator', () => {
    it('add empty string', () => {
        const result = add('');

        expect(result).toBe(0)
    });

    it('add single number', () => {
        const result = add('1');

        expect(result).toBe(1)
    });

    it('add comma separated number', () => {
        const result = add('1,5');

        expect(result).toBe(6)
    });
});