const emptyArray = [];
const numbers=[1,2,3,4,5,6,7];
const fruits =["apple","banana","orange"];
console.log("Numbers Array:"+numbers);
console.log("Fruits Array:"+fruits);
console.log("length of Fruits Array:"+fruits.length);
console.log(numbers[1]);
console.log("2nd element:"+numbers[1]); // 2
console.log("3rd Elment of Fruits:"+fruits[2]); //orange
console.log("Before push method:"+numbers);
numbers.push(25);
console.log("After Push method:"+numbers);
console.log("before pop method:"+fruits);
fruits.pop();
console.log("after pop method:"+fruits);
console.log("to remove from front> before shift method:"+numbers);
numbers.shift();
console.log("after shift method:"+numbers);
console.log("to add number to front > before unshift method:"+numbers);
numbers.unshift(90);
console.log("after unshift method:"+numbers);
console.log("Array Iteration");
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}
const matrix =[
    [1,2,3,],
    [4,5,6],
    [7,8,9]
];

for(let i=0;i<matrix.length;i++)
{
    for(let j=0;j<matrix[i].length;j++)
    {
        console.log(matrix[i][j]);
    }
}