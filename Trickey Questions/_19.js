function getAge(...args)
{
    console.log(typeof args);
    console.log(args);  //array
}

getAge(21);


// "number"
// "array"
// "object"   //right
// "NaN"


// >>array return