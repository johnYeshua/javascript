//const can't be re declared
const x=1000;
console.log("x value",x);

//  x=900;
console.log("x value",x);

// value can' be changed
//var is  local scope
{
const x=300;
console.log("x value",x);
}
console.log("x value",x);