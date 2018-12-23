import conferenceRoomsProblem from '../conferenceRoomsProblem'

describe('Conference Rooms Problem', () => {
    it('should return 2', () => {
        expect(conferenceRoomsProblem([[30, 75], [0, 50], [60, 150]])).toBe(2);
    });
});