'use strict'; 



// Lesson on calling function fro mother functions 
// Lesson on function creation 
// Fucntions can call other functions 
// Breaking down the role of what need to be done will help get my head around functions 
// Functions can be attached to variables 

var text = "Hello world"; 



function elevator (up, down){
    console.log(up, down)
    const direction = 'going ${up} or going ${down}'
    return elevator; 
}

elevator(1,2);







const bread = function (thin, thick) {
    const slices = 'there are ${thin} thin slices and ${thick} slices'
    console.log(thin, thick)
    return slices; 
}




function garage (basement, middle, upper){
console.log(basement, middle, upper);
const location = `There are ${basement} cars in the basement, There are ${middle} cars in the middle and ${upper} cars in upper`;
return location; 
}



const bigGarage = garage(5, 10, 15);
console.log(bigGarage);
console.log(garage(5,10,15));






var contents = ["a","b","c","d"]; 
var exception = ["c","d"];

contents = contents.filter(item=> !exception.includes(item));

for (let i=0; i<contents.length; i++) {
    console.log(contents[i]); 
}


//How do you declare a variable 
const lenovo= () =>{

}


//How do you call a function into another function

const calculation = (x,y) =>{
 var sum = x*y; 
 return sum; 
}

const bottles = (water, alcohol) =>{
    var calc = calculation(water, alcohol)
    console.log(calc);  
}

bottles(2,2); 



//how do you call a function into another function 

//Step 1 = create function for scoring 
const scoresOne =(a,b,c)=>{
    let score = a + b+ c /3; 
    return score; 
}

//Step 2 assign function to team variable 
var hawksScore = scoresOne(40,20,30); 
var sealionsScore = scoresOne(10,10,10); 
console.log(`hawks Scored ${hawksScore} sealion scored ${sealionsScore}`)

//Step 3 Logic for checking win--> this function takes in the avg score as a parameter
// Avg score was created in step two.

const checkWinner =(avgHawks, avgSealions) =>{
if(avgHawks >= 2* avgSealions){
    console.log(`hawks are the winners by ${avgHawks} to sealions ${avgSealions}`)

}else if(avgSealions >= 2 * avgHawks){
    console.log(`Sealions are the winners by ${avgSealions} to hawks ${avgHawks} `)
}else{
    console.log(`no one wins...`)
}
}

checkWinner(hawksScore, sealionsScore);




/*
const checkWin = (hawksScore, sealionsScore)=> {
    if (hawksScore >= 2 * sealionsScore){
        console.log(`Hawks win by ${hawksScore}`)
    }else if(sealionsScore >= 2 * hawksScore){
        console.log(`sealions win by ${sealionsScore}`)
    }
}
console.log(checkWin(hawksScore,sealionsScore)); 
*/


/*
const hawksAvg = (sOne, sTwo, sThree)=>{
    let sum = scoresOne(sOne, sTwo, sThree)
    return sum; 
}

const sealionsAvg = (sOne, sTwo, sThree)=>{
    let sum = scoresOne(sOne, sTwo, sThree)
    return sum; 
}

const announcement=()=>{

}
*/

/*
const teamScore= (hawksAvg, sealionsAvg)=>{
    let hawksAvg = scoresOne(); 
    let sealionsAvg = scoresOne(); 

}
*/



const roundCounter= (a,b,c) =>{
    let sum= a+b+c /3; //This has to be defined and with a return statement; 
    return sum; 
}

const cogs = roundCounter(10,10,10); 
const locust = roundCounter(20,20,20); 

//Test complete, the Average calculator works 
console.log(`Cogs scored ${cogs} and Locusts scored ${locust}`)


const leaderBoard = (avgCogs, avgLocust)=>{
    if(avgCogs >= 2 * avgLocust){

        console.log(`Cogs are the winners by ${avgCogs} to Locust ${avgLocust}`)

    }else if(avgLocust >= 2* avgCogs){
        console.log(`Locust are the winners by ${avgLocust} to Cogs ${avgCogs}`)

    }else{
        console.log("There is no winner...")
        //Possible tie break
        //Possible new round 
    }

}

leaderBoard(cogs, locust); 


const cal =(a, b, c)=>{
    var sum = a+b+c /3; 
    return sum; 
}


const playerOne = cal(20,20,20); 
const playerTwo = cal(50,60,30); 

const playerLeaderBoard = (avgPlayerOne, avgPlayerTwo)=>{
    if(avgPlayerOne >= 2 * avgPlayerTwo){
        console.log(`Player one scored ${avgPlayerOne} compared to player 2 ${avgPlayerTwo}`)
    }else if (avgPlayerTwo >= 2 * avgPlayerOne){
        console.log(`Player two scored ${avgPlayerTwo} compared to player 2 ${avgPlayerOne}`)

    }else{
        console.log(`No one won...`)
    }
}

playerLeaderBoard(playerOne, playerTwo)






 