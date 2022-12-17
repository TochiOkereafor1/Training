// Arrays are data structures 
// They handle storing information 
// Arrays and objects are the two most common data structures 
// Arrays are Zero based, meaning they start counting from 0
// For loop is used to iterate through an array 
// Arrays can be placed inside another array


//Array methods
/*
Push()
Pop()
Shift()
Unshift()
indexOF()
include()
*/


const foods = [`chicken`, `beef`, `lamb`, `oats`]
const veg = [`brocolli`, `corn`, `colliflower`, `carrots`]

//creating an Array--> literal syntax


// technique for creating Array 


//Technique for showing how many elements are in entire Array--> length (property)
console.log(foods.length)


//Adding elements or replacing elements in the array 
foods[3]=`fish`; 

console.log(foods[0])
console.log(foods[1])
console.log(foods[2])
console.log(foods[3])



//Array Holding different information (e.g string, int)


//Adding an Array into an Array concat() method 

let fusion =[].concat(foods,veg); 
console.log(fusion); 


//Adding elements to the end of an Array using .push()
// javaScript has methods attached to the arrays--> push is one of them
veg.push(`sprouts`)
console.log(veg);
const newArray =veg.pop(`sprouts`); 
console.log(newArray); 

//Adding element to the begining of an array .unshift() 
veg.unshift(`Hi`); 
console.log(veg); 

// removing element from the end of an array
// you can also perform function without passing the name of what ypu want to pop see below 
// veg.pop() is the same as veg'pop(`carrot`) (thats if carrot is the last element in the array)
veg.pop(`carrots`)
console.log(veg); 

//removes element from the beginnig of the array shift()
console.log(veg);
veg.shift(); 
console.log(veg);


// indexOf(<name of item>) this tells us where in the index the item is located
console.log(veg.indexOf(`corn`));


//includes(<argument>)--> sort of a boolean operator, if the index is there reun true or false. 
// This tests with strict with strict equality so `700` and 700 will return different results 
// As dictated by the quotation marks, `700` is a string and 700 is a number 
// Very useful for writing conditionals --> if () statements --> best usecase of includes. 
console.log(veg); 
console.log(veg.includes(`corn`))





//Create array to store percentage
const tips =[15, 20]; 

// Step 2 percentage counter  
const percentageCounter= (currency)=> {
var sum = 100/currency;  
return Math.round(sum); 
}
// Step 1 state bill 
const bill = percentageCounter(150);  

const billCalc= (bill)=>{
    if(bill>=50 || bill<= 300){
        console.log(tips[0])
        let sum = bill = tips.push(total)
        return sum; 
    }else if (bill <50 || bill > 300){
        console.log(tips[1])
    }

}
//bill + tip 
const total = []; 



// tip 15% if bill is valued between 50-300
// else if the value is different tip 20% 

billCalc(bill);




/*
To-Do
*Turnery operator 
*Switch statements 
*Truthy and falsey 
*if statements 

Look at the method an function Ed and the rest of the guys used, think of how:
What does it do?
how does it do what it does?
How can i practice it? 
which scenario is it best suited?
How can i make it mine? 
*/ 



// Last looked at on 18th Nov 2021 
// Homework--> How different was many code to his 
// what did he do right that i can learn from? 


/*
Questions 
--> Name the 6 array methods (shift, unshift, pop, push, indexOf, includes)

--> what can you do with the _ _ _ _ _   _ _   array method? (if  statement)
you can use includes to see if an array or object includes something, then you do trigger the if statement dependent on that
*/

// DATE : 21/11/22
//write array 
const myArr =[`monday`, `tuesday`, `wednesday`, `thursday`, `friday`]; 

//print array 

/* POINTER
--> Here i made a mistake of adding a comma instead of a semi colon 
--> Also made the mistake of adding a semi colon at the end 

for(let i=0; i < myArr.length, i++;){
console.log(myArr)
}
*/

/* POINTER 
--> Made the mistake iof putting just the array as myArr
--> this just printed my entire array 5 times 
--> using myArr[i] prints all the indexes in my array 
for(let i=0; i < myArr.length; i++){
    console.log(myArr)
    }
*/

for(let i=0; i < myArr.length; i++){
console.log(myArr[i])
}