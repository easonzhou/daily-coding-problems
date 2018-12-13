import longestSubstring from '../longestSubstring';

describe("Longest Substring", () => {
    it("should return 3", () => {
        expect(longestSubstring("abcba", 2)).toBe(3);
    });
    it("should return 12", () => {
        expect(longestSubstring("aaaaaaabbbccccccccc", 2)).toBe(12);
    });
    it("should return 5", () => {
        expect(longestSubstring("abcba", 3)).toBe(5);
    });
    it("should return 19", () => {
        expect(longestSubstring("aaaaaaabbbcccccccccddddd", 3)).toBe(19);
    });
});