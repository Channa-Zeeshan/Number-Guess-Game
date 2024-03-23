#! /usr/bin/env node
import inquirer from "inquirer";
let answers2;
let x = 0;
let choice = 10;
do {
    console.clear();
    x = 0;
    choice = 10;
    let randomNum = Math.floor(Math.random() * 100) + 1;
    let answers;
    do {
        //console.log("------------------------------------------");
        answers = await inquirer.prompt([{
                name: "GuessNum",
                type: "number",
                message: ` Guess a Number between 1 - 100  \t  Attemps remaining : ${choice} \n`
            }]);
        if (answers.GuessNum > 0 && answers.GuessNum < 101) {
            if (answers.GuessNum == randomNum) {
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \n");
                console.log(`Congrats ! you have guessed correct number  ${randomNum} is correct number`);
                console.log(` Score: ${100 - (x * 10)}  \t Total Attempts : ${10 - choice}`);
                console.log("\n !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            }
            else if (answers.GuessNum > randomNum) {
                console.log(` Desired Number is less than ${answers.GuessNum}`);
                choice--;
                x++;
            }
            else if (answers.GuessNum < randomNum) {
                console.log(` Desired Number is greater than ${answers.GuessNum}`);
                choice--;
                x++;
            }
        }
        else {
            console.log("you have typed invalid number please guess number between 1 - 100");
            x++;
            choice--;
        }
        console.log("------------------------------------------");
    } while (answers.GuessNum != randomNum && choice > 0);
    if (choice == 0) {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \n");
        console.log(` \t  GAME OVER \t ${choice} attempts \n Number is ${randomNum}`);
        console.log("\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ");
    }
    answers2 = await inquirer.prompt([
        {
            message: " Would you like to play another game ?",
            name: "option",
            type: "list",
            choices: ['YES', 'NO']
        }
    ]);
} while (answers2.option == 'YES');
