// {}==={}   //false
// {}=={}   //false

//var a = {}   
//var b = {}   

// a===b     //false

// becuz when compare var that check values but when compare obj that check address.


var a = {};
var b = a;

console.log(a===b);          //true
