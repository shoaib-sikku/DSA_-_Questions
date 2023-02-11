const obj = {
    a:'one',
    b:'two',
    a:'three'
}

console.log(obj)

// {a:'one',b:'two'}        
// {b:'two',a:'three'}
// {a:'three',b:'two'}         //right
// SyntaxError


// becuz override the key but not change position of key.