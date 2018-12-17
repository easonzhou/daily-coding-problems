import longestAbsolutePath from '../longestAbsolutePath';

describe("Longest Absolute Path", () => {
    it("should return 18", () => {
        expect(longestAbsolutePath("dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext")).toBe(18);
    });
    it("should return 29", () => {
        expect(longestAbsolutePath("dir\\n\\tsubdir1\\n\\t\\tfile1.ext\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2.ext")).toBe(29);
    });
});