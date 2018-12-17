import longestAbsolutePath from '../longestAbsolutePath';

describe("Longest Absolute Path", () => {
    it("should return 18", () => {
        expect(longestAbsolutePath("dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext")).toBe(18);
    });
});