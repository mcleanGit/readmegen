// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input const promptUser to check
const promptUser = () => {
 return inquirer.prompt([
//const questions = [
 {
  type: "input",
  name: "title",
  message: "Please enter your project title (required)",
  validate: titleInput => {
   if (titleInput) {
    return true;
   } else {
    console.log("Please enter your project title!");
    return false;
   }
   }
  },
 {
  type: "input",
  name: "description",
  message: "Please enter a brief description of your project (required)",
  validate: descriptionInput => {
   if (descriptionInput) {
    return true;
   } else {
    console.log("Please enter a brief description of your project!");
    return false;
   }
   }
 },
 {
  type: "input",
  name: "table-of-contents",
  message: "Please enter a Table of Contents (optional) for your project",
 },
 {
  type: "input",
  name: "installation",
  message: "Please provide installation instructions for your project",
 },
 {
  type: "input",
  name: "usage",
  message: "Please provide any usage guidelines or restrictions",
 },
 {
  type: "list",
  name: "license",
  message: "Please select the license that applies to your project",
  choices: [
   "Apache",
   "Boost",
   "BSD_3-Clause",
   "Creative_Commons_Zero v.1.0",
   "GNU General Public License v.3.0",
   "MIT",
   "Mozilla",
   ],
 },
 {
  type: "input",
  name: "contributing",
  message: "Please indicate how others can participate in and contribute to this project",
 },
 {
  type: "input",
  name: "tests",
  message: "Please indicate any testing protocols applied to your project",
 },
 {
  type: "input",
  name: "questions",
  message: "Please enter your GitHub userName (required)",
  validate: questionsInput => {
   if (questionsInput) {
    return true;
   } else {
    console.log("Please enter your GitHub userName!");
    return false;
   }
   }
 },
 {
  type: "input",
  name: "github",
  message: "Please enter your GitHub link (required)",
  validate: githubInput => {
   if (githubInput) {
    return true;
   } else {
    console.log("Please enter your GitHub repo link!");
    return false;
   }
   }
  },
]);
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
//init();

// temporary test of questions prompt loading
promptUser()
