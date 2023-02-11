function hello(){
    var a=10;
    function innerFun(){
        return a; 
    }
    return innerFun
}

var inner = hello()

console.dir(inner)


//lexical scop or closure