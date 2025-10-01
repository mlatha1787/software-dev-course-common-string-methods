// Unicode exercises
// Task 1: Extract Code Points from Characters
const str = "Code";
const firstCodePoint = str.charCodeAt(0); // 'C'
const thirdCodePoint = str.charCodeAt(2); // 'd'
console.log('firstCodePoint:', firstCodePoint);
console.log('thirdCodePoint:', thirdCodePoint);

// Task 2: Create a Word from Code Points
const wordFromCodePoints = String.fromCharCode(72, 101, 108, 108); // H e l l
console.log('wordFromCodePoints:', wordFromCodePoints);

// Task 3: Swap First and Last Characters
const original = "Launch";
const firstCode = original.charCodeAt(0);
const lastCode = original.charCodeAt(original.length - 1);
const middle = original.slice(1, -1);
const swappedString = String.fromCharCode(lastCode) + middle + String.fromCharCode(firstCode);
console.log('swappedString:', swappedString);
