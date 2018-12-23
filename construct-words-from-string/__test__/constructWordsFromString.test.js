import constructWordsFromString from '../constructWordsFromString';

describe('Construct Words From String', () => {
    it('should return [\'the\', \'quick\', \'brown\', \'fox\']', () => {
        expect(constructWordsFromString("thequickbrownfox", ['quick', 'brown', 'the', 'fox']).sort()).toEqual(['the', 'quick', 'brown', 'fox'].sort());
    });

    it('should return [\'bed\', \'bath\', \'and\', \'beyond\']', () => {
        expect(constructWordsFromString("bedbathandbeyond", ['bed', 'bath', 'bedbath', 'and', 'beyond']).sort()).toEqual(['bed', 'bath', 'and', 'beyond'].sort());
    });

    it('should return [\'the\', \'quick\', \'brownfox\']', () => {
        expect(constructWordsFromString("thequickbrownfox", ['quick', 'brownfox', 'the', 'brown']).sort()).toEqual(['the', 'quick', 'brownfox'].sort());
    });

    it('should return null', () => {
        expect(constructWordsFromString("thequickbrownfox", ['quick', 'brown', 'the', 'foo'])).toEqual(null);
    });
});