import largestSum from '../largestSum';

describe("Largest nonadjacent numbers sum", () => {
    it("should return 13", () => {
        expect(largestSum([2, 4, 6, 2, 5])).toBe(13);
    });
    it("should return 10", () => {
        expect(largestSum([5, 1, 1, 5])).toBe(10);
    });
});