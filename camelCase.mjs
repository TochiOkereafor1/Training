import camelCase from "camelcase";
/*
Thing kept throwing an error so i had go into the package.json file and try to chanege the type to module, it was already like that
i then had to go to the file name change it to filename.mjs, ran it in the terminal and then it worked
*/





// writing it like this throws an error that it is not defined
/*
camelCase('toasted-marshmallow')
console.log(camelcase);
*/



// using camel case as is
const test = camelCase('toasted-marshmallow')
console.log(test);


//using camelCase with an array.
const foods = [`chic-ken`, `bee f`, `la;mb`, `oats`]
const testTwo = camelCase(foods);
console.log(testTwo)
/*
chicKenBeeFLa;mbOats (the results from running it as above)
all the strings are blended together
*/

const foodsTwo = [`du ck`, `go-at`, `turkey`, `fish`]
const newFoods = camelCase([]);


/*
foodsTwo.forEach(function (element) {
    newFoods.push(element)
});

console.log(newFoods)
*/


/*
const ages = [20, 28, 19, 56];
const newAges = [];

ages.forEach(function (age) {
    newAges.push(age + 5);
});

console.log(newAges);
*/



/*
const ranfunc = (columnHeaders) => { // function needs to take in column headers

}
const name = camelCase(["foo-bar", "bar-foo", "foo-Foo-Bar"]);
const arr = name.split(" ");
console.log(arr);

// possibly use split to split it at the commas
// Iterate through the result using a loop to apply it to something...

// a function
*/




const ranfunc = (columnHeaders, categoryName, rows) => { // function needs to take in column headers, where is it taking it in from??
    const name = camelCase();
    const columnHeaders = name;// use column headers to go do something else possibly print it to see what it contains and then split and and con statement
    const arr = name.split(" ");
    console.log(arr);
}




