import staircaseProblem from '../staircaseProblem';

describe("Staircase Problem", () => {
    it("should return 5", () => {
        expect(staircaseProblem(4, [1, 2])).toBe(5);
    });
});