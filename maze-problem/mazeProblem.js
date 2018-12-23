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
[[1, 1, 1, 1],
[0, 0, 1, 0],
[1, 1, 1, 1],
[1, 1, 1, 1]];

start = [3, 0]
end = [0, 0]
*/

class Node {
    constructor(item, next, prev) {
        this.content = item;
        this.next = next;
        this.prev = prev;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return !this.head;
    }

    enqueue(item) {
        let node = new Node(item, null, this.tail);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.tail;
            this.tail = node;
            temp.next = this.tail;
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            return;
        }
        let content = this.tail.content;
        let prev = this.tail.prev;
        if(prev) {
            prev.next = null;
        } else {
            this.head = null;
        }
        
        this.tail.prev = null;
        this.tail = null;
        this.tail = prev;

        return content;
    }
}

let rowNum = [-1, 0, 0, 1];
let colNum = [0, -1, 1, 0];

function validPoint(row, col, board) {
    if(row < 0 || col < 0) {
        return false
    }
    if(row >= board.length || col >= board[0].length) {
        return false;
    }
    return true;
}

export default function mazeProblem(board, start, end) {
    if (!board[start[0]][start[1]] || !board[end[0]][end[1]]) {
        return -1
    }

    let visited = new Array(board.length).fill(null).map(row => new Array(board[0].length).fill(false));
    let queue = new Queue();

    visited[start[0]][start[1]] = true;
    queue.enqueue([start, 0]);

    while(!queue.isEmpty()) {
        let node = queue.dequeue();
        let coordinate = node[0];
        let dist = node[1];
        // console.log(`coordinate: (${coordinate[0]}, ${coordinate[1]}), dist: ${dist}`);
        if(coordinate[0] === end[0] && coordinate[1] === end[1]) {
            return dist;
        }

        for(let i = 0; i < 4; i++) {
            let row = coordinate[0] + rowNum[i];
            let col = coordinate[1] + colNum[i];

            if(validPoint(row, col, board) && !visited[row][col] && board[row][col]) {
                visited[row][col] = true;
                queue.enqueue([[row, col], dist + 1]);
            }
        }
    }

    return -1;
}