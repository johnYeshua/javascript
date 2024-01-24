//var can be re declared
var x =100;
console.log("xvalue",x);  //100

var x=200;
console.log("x value",x); //200

// value can be changed

 x=500;
console.log("x value",x); //500

//var is not local scope
{
var x=300;
console.log("x value",x); //300

}
console.log("x value",x); //300