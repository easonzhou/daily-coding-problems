import mazeProblem from '../mazeProblem';

describe("Maze Problem", () => {
    it("should return ", () => {
        let board =
            [[false, false, false, false],
            [true, true, false, true],
            [false, false, false, false],
            [false, false, false, false]];

        let start = [3, 0];
        let end = [0, 0];
        expect(mazeProblem(board, start, end)).toBe(7);
    });
  
});