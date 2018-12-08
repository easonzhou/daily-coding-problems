import numDecoding from '../numDecoding';

describe("The number of ways decoding the numbers", () => {
    it("should return 3", () => {
        expect(numDecoding("111")).toBe(3);
    });
    it("should return 4", () => {
        expect(numDecoding("1111")).toBe(4);
    });
    it("should return 3", () => {
        expect(numDecoding("1127")).toBe(3);
    });
});