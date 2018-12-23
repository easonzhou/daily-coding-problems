/*
This problem was asked by Google.

You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.
*/

/*
board =
[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]];

start = [3, 0]
end = [0, 0]
*/

export default function mazeProblem(board, start, end) {
    let visit = new Array(board.length).fill(null).map(row => new Array(board[0].length).fill(false));
    let dist = new Array(board.length).fill(null).map(row => new Array(board[0].length).fill(Number.MAX_SAFE_INTEGER));
    dist[start[0]][start[1]] = 0;

    visitCalcDist(board, dist, visit, start);

    return dist[end[0]][end[1]];
}

function visitCalcDist(board, dist, visit, current) {
    let [x, y] = current;
    let maxColumns = board[0].length, maxRows = board.length;

    visit[x][y] = true;

    //calc left element
    if(y - 1 >= 0 && !visit[x][y - 1] && !board[x][y - 1]) {
        dist[x][y - 1] = Math.min(dist[x][y - 1], dist[x][y] + 1);
    }
    //calc right element
    if(y + 1 < maxColumns && !visit[x][y + 1] && !board[x][y + 1]) {
        dist[x][y + 1] = Math.min(dist[x][y + 1], dist[x][y] + 1);
    }
    //calc top element
    if(x - 1 >= 0 && !visit[x - 1][y] && !board[x - 1][y]) {
        dist[x - 1][y] = Math.min(dist[x - 1][y], dist[x][y] + 1);
    }
    //calc bottom element
    if(x + 1 < maxRows && !visit[x + 1][y] && !board[x + 1][y]) {
        dist[x + 1][y] = Math.min(dist[x + 1][y], dist[x][y] + 1);
    }

    //visit left element
    if(y - 1 >= 0 && !visit[x][y - 1] && !board[x][y - 1]) {
        visitCalcDist(board, dist, visit, [x, y - 1]);
    }
    //visit right element
    if(y + 1 < maxColumns && !visit[x][y + 1] && !board[x][y + 1]) {
        visitCalcDist(board, dist, visit, [x, y + 1]);
    }
    //visit top element
    if(x - 1 >= 0 && !visit[x - 1][y] && !board[x - 1][y]) {
        visitCalcDist(board, dist, visit, [x - 1, y]);
    }
    //visit bottom element
    if(x + 1 < maxRows && !visit[x + 1][y] && !board[x + 1][y]) {
        visitCalcDist(board, dist, visit, [x + 1, y]);
    }
}