import { productIndexes, productIndexesWithoutDivision } from '../productIndexes';

describe("Product Indexes with Division", () => {
    it("should return [120, 60, 40, 30, 24]", () => {
        expect(productIndexes([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
    });
    it("should return [3, 2, 1]", () => {
        expect(productIndexes([3, 2, 1])).toEqual([2, 3, 6]);
    });
});

describe("Product Indexes without Division", () => {
    it("should return [120, 60, 40, 30, 24]", () => {
        expect(productIndexesWithoutDivision([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
    });
    it("should return [3, 2, 1]", () => {
        expect(productIndexesWithoutDivision([3, 2, 1])).toEqual([2, 3, 6]);
    });
})