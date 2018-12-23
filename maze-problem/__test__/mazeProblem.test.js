import mazeProblem from '../mazeProblem';

describe("Maze Problem", () => {
    it("should return 7", () => {
        let board =
            [[1, 1, 1, 1],
            [0, 0, 1, 0],
            [1, 1, 1, 1],
            [1, 1, 1, 1]];

        let start = [3, 0];
        let end = [0, 0];
        expect(mazeProblem(board, start, end)).toBe(7);
    });
  
});