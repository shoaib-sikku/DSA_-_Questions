let obj = {name:'sandy'}

const member = [obj];

obj = null;




console.log('2nd member ',member);
console.log('1st obj ',obj);



// null
// [null]
// [{}]
// [{name:'sandy'}]     //right


// becuz array will not change.
// >>>agar update karte hai to dono mai change hoga becuz refrence hai 
// >>>agar asign kar rahe hai to sirf 2nd mai change hoga ya ussi mai. 


