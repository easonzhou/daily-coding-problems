import findMissingPositive from '../findMissingPostive';

describe("Find Missing Positive Number", () => {
    it("should return 2", () => {
        expect(findMissingPositive([3, 4, -1, 1])).toBe(2);
    });
    it("should return 3", () => {
        expect(findMissingPositive([1, 2, 0])).toBe(3);
    });
});