let data = [4,7,1,4,9,2,4,1]

let unique = new Set(data);

 

console.log(unique); //{4, 7, 1, 9, 2}
console.log([...unique]);//[4, 7, 1, 9, 2]