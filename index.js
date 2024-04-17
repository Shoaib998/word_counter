#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count your words: "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your Senetence word count is: ${chalk.blue(words.length)}`);
