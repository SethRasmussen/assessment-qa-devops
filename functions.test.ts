const {shuffleArray} = require('./utils')

const testerArr = [1,2,3,4,5]

describe('shuffleArray should', () => {
    test("shuffleArray returns a shuffled array", () => {
        expect(Array.isArray(shuffleArray([1,2,3,4,5]))).toBe(true);
    })

    test("shuffled Array is the correct length", () => {
        expect(shuffleArray(testerArr).length).toEqual(testerArr.length)
    })
});