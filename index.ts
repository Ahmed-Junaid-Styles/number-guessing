#! /usr/bin/env node

import inquirer from "inquirer";

const ans = await inquirer.prompt([
    {name: "guessed_number", type: "number", message: "Guess a number between 1-6: "}
])

var random_number: number = Math.floor(Math.random()*6)+1

if(ans.guessed_number == random_number){
    console.log(`Congratulation! You guessed the exact number i.e ${random_number}`)
}else{
    console.log(`Incorrect guess, Please try again`)
}
