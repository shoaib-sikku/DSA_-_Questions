let data = [3, 1, 7, 12, 24, 5];

data.sort();
console.log(data); //[1, 12, 24, 3, 5, 7] changed the original array.

data.sort((a, b) => a - b);
console.log(data); //[1, 12, 24, 3, 5, 7]

data.sort((a, b) => b - a);
console.log(data); //[1, 12, 24, 3, 5, 7]

data.reverse();
console.log(data); //changed original array.
