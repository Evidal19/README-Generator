// TODO: Include packages needed for this application
const generateMarkdown = require ("./utils/generateMarkdown")
const {prompt} = require ("inquirer")
const fs = require ("fs")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name:"title",
    message:"what is the title of the project?",
    default: "ReadMe",
  },
  {
    type: "input",
    name:"description",
    message:"Describe the project",
    default: "This is a project to generate a ReadMe",
  },
  {
    type: "input",
    name:"installation ",
    message:"How do you install?",
    default: "npm install",
  },
  {
    type: "input",
    name:"usage",
    message:"Learn how to make a ReadMe",
    default: "Make a ReadMe",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(fileName)
  })
}

// TODO: Create a function to initialize app
function init() {
  prompt(questions)
  .then((answers) =>{
  const response = generateMarkdown (answers)
  writeToFile("test.md",response)
  })
}

// Function call to initialize app
init();
