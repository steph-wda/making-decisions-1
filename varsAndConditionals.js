/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
//Create a variable for Jon amd Jamie's attack strengths
let jonSnowAttack = 25;
let jamieLannisterAttack = 35;


if(jonSnowAttack > jamieLannisterAttack){
    console.log("Jon Snow has a better attack than Jamie")
}else {
    console.log("Jamie has a better atack than Jon")
}

/*Jamie, knowing he is the superior, initiates a fight with Jon. Let's create some 
additional stats for Jon Snow so we can see how this plays out.
*/
let jonSnowHealth = 100;
let jonSnowDefense = 0;

/*Jamie attacks first - use an if/else to determine if Jon Snow can survive the attack. 
If he does not, console.log "Jon Snow has been slain." Otherwise, console.log Jon Snow's health.
*/

if(jonSnowHealth <= jamieLannisterAttack){
    console.log("Jon Snow has been slain.");
}else{
    //jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense +=25;

if(jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log("Jon Snow has been slain.");
}else{
    //jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

/*One of the town's people, obviously wanting Jon Snow to win, throws Jon a health kit. 
This health kit can raise Jon's health by 50pts. However, Jon's health cannot exceed 100. 
Using an if else statement, raise Jon's health to the appropriate level.
*/

if (jonSnowHealth + 50 >= 100){
    jonSnowHealth = 100;
}else {
    jonSnowHealth += 50;
}

console.log(jonSnowHealth);

/*Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on 
heads, he will aim to take Jon's head. If it lands on tails, Jamie will allow Jon to run away. 
Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and 
the equality operator, handle the value of the flipped coin (handle for both true and false).
*/

let coinLandsHeads = false;

/*if(coinLandsHeads === true){
    console.log(`the fight continues`);
}else{
    console.log(`Jon is allowed to run away`);
}
*/

//Use != to accomplish the same thing.

if(coinLandsHeads !== false){
    console.log(`the fight continues`);
}else{
    console.log(`Jon is allowed to run away`);
}

//for loops

//for(let i = 0; i < 5; i++){
    //if (jonSnowHealth <= 0 ){
        //console.log(`Jon has been slain`)
    //}else {
        //jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
        //console.log(`Jon Snow's health is ${jonSnowHealth}`);
    //}
//}

while(jonSnowHealth > 0){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow's health is ${jonSnowHealth}`);
    if (jonSnowHealth <= 0){
        console.log(`jon has been slain`);
    }
}