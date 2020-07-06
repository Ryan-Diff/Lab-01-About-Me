export function isYes(word) {
    const firstLetter = word.charAt(0);
    const isAY = firstLetter === 'y' || firstLetter === 'Y';
    return isAY;
}


// export function isYes(text) {
//     text = text.toLowerCase();
//     if (text === 'y') {
//         return true;
//     } else if (text === 'yes') {
//         return true;
//     } else if (text === 'yasss') {
//         return true;
//     } else {
//         return false;
//     }
// }

