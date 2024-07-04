#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumbers = Math.floor(Math.random() * 6 + 1);

const result = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);

if (result.userGuessedNumber === randomNumbers){
    console.log("Congratulations, You Won!");
} else {
    console.log("Game Over");
};
