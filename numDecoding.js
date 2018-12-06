/*
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

export default function numDecoding(message) {
    if(message.length === 1) {
        return 1;
    }

    let lMessage = message.slice(0, message.length - 1);
    return ((lMessage[lMessage.length - 1] >= '3') || 
    (lMessage[lMessage.length - 1] === '2' && message[message.length - 1] >= '7')) 
    ? numDecoding(lMessage) : numDecoding(lMessage) + 1;
}