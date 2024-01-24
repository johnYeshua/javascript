var colors = new Map([
    ['1','Red'],
    ['2','Green'],
    ['3','Yellow'],
    ['4','Violet']
]);


for(let obj of colors.values())
{
    console.log(obj);
}


console.log("========================");


for(let obj of colors.entries())
{
    console.log(`${obj[0]} : ${obj[1]}`);
}


for(let obj of colors.keys())
{
    console.log(`${obj[1]}`);
}


for(let obj of colors.keys())
{
    console.log(obj);
}