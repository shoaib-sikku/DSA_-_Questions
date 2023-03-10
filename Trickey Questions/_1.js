(()=>{
    var a=b=3
})();

console.log(typeof a) //undefined
//console.log(a) //Error:a is not defined

console.log(typeof b)  //number




// if we use without var,let,const variable in func. scop they are global variable. 