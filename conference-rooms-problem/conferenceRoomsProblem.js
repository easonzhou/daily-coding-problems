"use strict";
/*

This problem was asked by Snapchat.

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

*/
exports.__esModule = true;
function collide(timeInterval1, timeInterval2) {
    if (timeInterval1[1] < timeInterval2[0] || timeInterval2[1] < timeInterval1[0]) {
        return false;
    }
    return true;
}
function roomCollide(room, timeInterval) {
    for (var i = 0; i < room.length; i++) {
        if (collide(timeInterval, room[i])) {
            return true;
        }
    }
    return false;
}
function conferenceRoomsProblem(timeIntervals) {
    if (timeIntervals.length === 0) {
        return 0;
    }
    var rooms = [[timeIntervals[0]]];
    var needNewRoom = true;
    for (var i = 1; i < timeIntervals.length; i++) {
        for (var j = 0; j < rooms.length; j++) {
            if (!roomCollide(rooms[j], timeIntervals[i])) {
                rooms[j].push(timeIntervals[i]);
                needNewRoom = false;
            }
        }
        if (needNewRoom) {
            rooms.push([timeIntervals[i]]);
        }
    }
    return rooms.length;
}
exports["default"] = conferenceRoomsProblem;
