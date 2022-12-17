function dieRoll (){
let roll =Math.floor(Math.random()*6)+1
console.log(`rolled:${roll}`)
}
dieRoll();



function people(){
    let presentPeoples = Math.floor(Math.random()*6)
    console.log(`people present ${presentPeoples}`)
}

people()
/*Notes 
Arguements are the inputs into a function
Parameters are the inputs in the function brackets 
*/
function fridge (door) {
    console.log(door)
}
fridge(`open`);

//Arrow function 
const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2022 - birthYear;
    const retirement = 65 - age; 

    if (age < 30){
        console.log(`you still have a long way muchacho`)
    } else{
        return `${firstName} retires in ${retirement} years`
    } 
    
}

console.log(yearsUntilRetirement(1994, `Tochi`)); 

/*
I am a bit confused with the parameters, they say it taks in information
information when the method is declared?
--Topics Covered--
Functions (Declaration and Expressions, Arrow Functions) google these and try o understand exactly what it means 

*/


const cutFruit= (fruit)=>{
    return fruit * 4; 
} 

const juiceFruit = (fruitOne, fruitTwo)=>{
    let juicer = fruitOne && fruitTwo
    console.log(juicer) 
    return juicer;
}

juiceFruit(1,7); 


const cutPieces = (fruits)=>{
    return fruits * 5; 
}

const fruitProcessor = (apples, oranges)=>{
     const applesPieces = cutPieces(apples); 
     const orangePieces = cutPieces(oranges);
     const pieces = `Apples has been cut into ${applesPieces} and orange have been cut into ${orangePieces}`
     return pieces; 
}
console.log(fruitProcessor(7,2));

//What other example can i implement this into 



const cutWood = (cut) =>{
    return cut * 2
}

const woodChipper = (oak, mahogany)=>{
    const axeOne = cutWood(oak); 
    const axeTwo = cutWood(mahogany); 
    const stack = `The amount of oak wood chipped is ${axeOne} and the amount of mahogany wood chipped is ${axeTwo}`; 
    return stack; 
}
console.log(woodChipper(10,20)); 




const pallet = (stacked)=>{
    return stacked * 2
}


const forkLift = (carlsberg, budweiser)=>{
const deliveryOne = pallet(carlsberg); 
const deliveryTwo = pallet(budweiser); 
const sum = `The amount of carlsberg delivered is ${deliveryOne} the amount of budweiser is ${deliveryTwo}`;
return sum; 
}

console.log(forkLift(4,10))

//////////////////////////////////////









//Step 1
const calcAverage = (a,b,c)=>{
    average = a + b + c /3;
    return average;  
}

//Step 2
const scoreDolphins = calcAverage(10, 20, 30)
const scoreKoalas = calcAverage(30,40,50); 
console.log(scoreDolphins, scoreKoalas); 

//Step 3
const checkWinner = (avgDolphins, avgKoalas)=>
{
    if(avgDolphins >= 2 * avgDolphins ){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`); 
    }else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`); 
    }else {
        console.log (`no team wins...`)
    }

}

//Step 4
checkWinner(scoreDolphins, scoreKoalas); 

////////////////////////////////////////

//const dolphinsScore = calcAverage(1,2,3);
//const koalasScore = calcAverage(1,2,3); 

//console.log(`${dolphinsScore}`)
//console.log(`${koalasScore}`)














/*
const checkWinner = (dolphinsAvg, koalasAvg)=>{
    const teamOne = calcAverage(dolphinsAvg); 
    const teamTwo = calcAverage(koalasAvg);
    const score = `The average score for dolphins is ${teamOne} and the average score for koalas is ${teamTwo}`
    
    if (teamOne > teamTwo){
        console.log(`team one wins by ${teamOne}`)

    } else if (teamTwo > teamOne){
        console.log(`team two wins by ${teamTwo}`)

    }
    return -1; 
}

console.log(checkWinner(20, 10)); 
*/
