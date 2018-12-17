import circleBuffer from '../circleBuffer';

let cb = new circleBuffer(10);

for(let i = 0; i < 20; i++) {
    cb.record(i);
}

describe("Circle Buffer", () => {
    it("should return []", () => {
        expect(cb.getLast(0)).toEqual([]);
    });
    it("should return [19]", () => {
        expect(cb.getLast(1)).toEqual([19]);
    });
    it("should return [15, 16, 17, 18, 19]", () => {
        expect(cb.getLast(5)).toEqual([15, 16, 17, 18, 19]);
    });
});