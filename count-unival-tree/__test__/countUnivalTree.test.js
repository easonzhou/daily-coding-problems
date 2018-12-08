import countUnivalTree from '../countUnivalTree';

var tree = {
    val: 0,
    left: {
        val: 1,
    },
    right: {
        val: 0,
        left: {
            val: 1,
            left: {
                val: 1
            },
            right: {
                val: 1
            }
        },
        right: {
            val: 0
        }
    }
};
describe('CountUnivalTree', () => {
    it('should return 5 unival tree', () => {
        const count = countUnivalTree(tree);
        expect(count).toBe(5);
    });
});