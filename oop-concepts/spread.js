function sum(...numbers)
{
    let total=0;

    for(let n of numbers)
    {
        total+=n;
    }

    return total;
}

console.log(sum(1,2,3,4));
console.log(sum(5,10));
console.log(sum());


//https://www.javascripttutorial.net/es6/