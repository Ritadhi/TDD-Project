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

    it('add any amount of numbers', () => {
        const inp = '93847,2837,5837,19384,293847,3847,2093,9482,9382,74639,28392,8492,538,283,394,9203,847,2398,9237,2984,1203,8479,20394,1204,2398,3029,4739,2398,8472,9382,28394,28493,5829,2309,2487,3948,239,3849,3487,2398,93827,38492,8493,20394,3298,2839,8472,928,2938,2039,8472,32984,8473,28392,3949,2390,2392,4839,294,394,2837,9283,2940,23847,9328,2398,2837,3948,283,28493,2837,4849,3289,23982,4839,2849,8392,4837,2398,2398,8492,3948,23893,28392,9837,238,2938,839,2389,3947,8473,9482,3298,239847,3298,2398,2938,2397';
        const result = add(inp);

        expect(result).toBe(1499301)
    })

    it('add new lines and comma separated number', () => {
        const result = add('1\n2,3');

        expect(result).toBe(6)
    });

    it('add new delimiter', () => {
        const result = add('//;\n1;2');

        expect(result).toBe(3)
    });
});