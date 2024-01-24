
// normal function
function add(x,y)
{
    return x+y;
}

console.log("addition:",add(67,54));

//anoynmous function
var ans =function(x,y)
{
    return x*y;
}

console.log("anoynmous function for multiplication:",ans(5,20));


//arrow function 
var div=(x,y) => {return x/y};

console.log("arrow function for division:",div(100,5));