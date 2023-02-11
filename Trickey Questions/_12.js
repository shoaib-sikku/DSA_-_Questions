function createBase(a)
{
    function addSix(b)
    {
        return a+b
    }
    return addSix;
}

var addSix = createBase(6);
console.log(addSix(10)) //16
console.log(addSix(21)) //27



//clusores