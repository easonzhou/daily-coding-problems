import twoItemsSum from '../twoItemsSum';

describe("Two Items Sum", () => {
    it("should return true", () => {
        expect(twoItemsSum([10, 15, 3, 7], 17)).toBe(true);
    });
    it("should return true", () => {
        expect(twoItemsSum([1, 2, 4, 6, 9, 10, 21], 17)).toBe(false);
    });
    it("should return true", () => {
        expect(twoItemsSum([-2, 2, 4, 6, 9, 10, 21], 4)).toBe(true);
    });
})
