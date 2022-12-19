// Allows us to define key--value pairs
// When compared to arrays, objects should be used for more unstructured data, while arrays should be used for more structured data
// When declaring arrays in an object the = sign isn't needs the : sign is used instead
// When declaring objects, it makes sense to use , after each declaration, otherwise a red line will appear.


//Define an object




/*
21/11/22
What is a property?
- a property is information that belongs to an object

What is the advantage of using an object to store something?
- an object isn't stored in any particular index in coparison to an array
- an array is stored in indexes varyin from 0 to what ever.

How do you retrieve data from an object?
- you can use the dot notation or you can simply print the object name to get its contents

how do you add data to an object?
data is added by declaring the object around {} and then inputting the information inside, string within qoutations and numbers as literals

how do you declare an array in an object?
by typing the array name followed by : and then [] where the information will be stored.
*/

//const favouriteDays = [`arms`, `back`];

/*
const student = {
    fName:`Tochi`,
    lName:`Okereafor`,
    age:2022 -1994,
    gender:`male`,
    job:`software developer`,
    favouriteDays : [`arms`, `back`]
};

console.log(student);
*/

/*
22/11/22
How do you get a property from an object?

i was a bit confused as to when to use an object vs Dot notation
i'm sure with more practice will be able to understand it (try using dot and bracket notation)
*/


//Why did't this work?
/*
const nameKey = `Name`;
console.log(tochi[`first` + nameKey]);


const nameKey = `Name`;
console.log(student[`first` + nameKey]);
*/

//When do you use the dot notation?
// used when you want to reference a specific object property


//When do you use the reference notation?
//used when you need to compute using the object property


//Undefined this is what you get when you want to access a property on an object that doesn't exist



/*
what is the bracket and Dot notation in regards to objects?
https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781

We can’t use variables with dot notation. Attempting to lookup
let obj = {
  cat: 'meow',
  dog: 'woof'
};
let dog = 'cat';
let sound = obj.dog;
console.log(sound);
// woof

This is in compariosn to bracket notation where:
let obj = {
  cat: 'meow',
  dog: 'woof'
};
let dog = 'cat';
let sound = obj[dog];
console.log(sound);
// meow

Going over Dot Vs Bracket notation 11:41 and playing with the code will help me understand better.

*/


/*
29/11/22
--> Go over the remaining bit of the objects video
--> Try out ternary operator
*/


/*
we looked at the dot notation vs the bracket notation


*/


//Dot notation
const zoo = {
    cat: `meow`,
    dog: `woof`,
};


/*
This way of using the bracket notation to access a property wont work because
Although you are accessing the property, the property name needs to be in qoutation marks...Can you make it work?
let sound = zoo[cat];
*/

//Bracket notation
const garage = {
    car: `audi`,
    bike: `Harley Davidson`,
    bicycle: `fixie`
}



//Things can be added to objects using dot notation
garage.Tank = `Sherman`;
garage[`Bus`] = `18`;

console.log(garage);

//Things can be added to objects using bracket notation

const parentCode = [1, 174]
const childCode = [1, 174];

const combined = [parentCode, childCode];

console.log(combined)



/*
05/12/22 Object methods





*/

// An object is a dat structure

/*
const menu = {
    Sweet: "Thai sweet chilli noodles",
    Savoury: "Soculent meat",
    desert: "Ben and jerrys"
}

for (const [key, value] of Object.entries(menu)) {
    console.log(`${key}: ${value}`);
}



/*
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
*/

/*
const garageTwo= [
{
carMake: "Merceedes",
carMake: "R8", 
fuel: "Electric"
},

{
carName: "BMW",
carMake: "M3", 
fuel: "Petrol"
},

{
carName: "Audi",
carMake: "R8", 
fuel: "Petrol"
},
]

const carTwo = {
carName: "Test",
carMake: "R8", 
fuel: "Petrol"
}

var ress = garageTwo.unshift(carTwo)
console.log(garageTwo)


let parking = garageTwo.find(car=> garageTwo.carMake=="Test")
console.log(parking)
/*
17/12/22
Trying to manipulate the objects within the object array but i'm not sure how to do that 
>>Found out how to create an object array
>>Found out that to add to an object array you first need to have something to add to the array 
>>Found out how to manipulate an array of objects using the shift() unshift() 
>>Looping through an array of objects 



*/
//var ob = object.keys(garageTwo)
//console.log(ob);

//var res = garageTwo.unshift("BMW")
//garageTwo.unshift(garageTwo.Audi)

const door = [
{
A:"johnny"
},

{
  B: "jimmy"
}

]


let exp = door.shift()
console.log(door)


/*
To try next 19/12/22
Splicing, Pushing, unShift, 
Array.find 
Array.find 
should work on practicing manipulating arrays with fake data and solid scenarios 

*/

const cars = [
{
make: "ferrari", 
colour: "red",
type:"sports",
doors: "2", 
reg: new Date (`2022-12-19`)
},

{
  make: "lamborghini", 
  colour: "orange",
  type:"sports",
  doors: "2", 
  reg: new Date (`2022-12-20`)

},

{
  make: "BMW", 
  colour: "blue",
  type:"convertable",
  doors: "4", 
  reg: new Date (`2022-12-25`)
}
]



//New object 
let pinkDucati =
{
  make: "ducati", 
  colour: "pink",
  type:"superBike",
  doors: "1", 
  reg: new Date (`2022-12-27`)
}

//New object 
let truck = 
{
  make: "man", 
  colour: "blue",
  type:"semiTruck",
  doors: "2", 
  reg: new Date (`2022-12-28`)
}

//New object 
let carTwo = 
{
  make: "volkswagen", 
  colour: "orange",
  type:"saloon",
  doors: "4", 
  reg: new Date (`2022-12-30`)
}

cars.unshift(pinkDucati); 
cars.push(truck); 
cars.splice(1,0,carTwo) //this syntax doesn't make too much sense


// finds the car, returns the entire object which includes a car 
var stuff = cars.find(car=>car.colour=="red"); 

// to find multiple things in an array where they meet a certain criteria, the filter function is used 
var stuffTwo = cars.filter(car=>car.doors=="4")


// This code allows us to filter the array and create a seperate array just by using map so we get a different array filled with filtered values
let spec = cars.map(car => {
  if (car.doors <=2){
    return "small"
  }

  if (car.doors == 1){
    return "on seat"
  }

  if (car.doors <=4){
    return "large/ medium"
  }
})

//console.log(cars); 
//console.log(stuff); 
console.log(stuffTwo); 
console.log(spec)

