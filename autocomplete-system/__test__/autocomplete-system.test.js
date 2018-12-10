import autocomplete from "../autocomplete-system";

describe('Autocomplete System', () => {
    it('should return [deer, deal]', () => {
        const result = autocomplete(["dog", "deer", "deal"], "de");
        expect(result).toEqual(["deal", "deer"]);
    });
});