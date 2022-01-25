// TODO: Include packages needed for this application
const markdown = require ("./utils/generateMarkdown")
const {prompt} = require ("inquirer")
const fs = require ("fs")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name:"title",
    message:"what is the title of the project?",
    default: "Read-Me Generater",
  },
  {
    type: "input",
    name:"description",
    message:"Describe the project",
    default: "This is a project to generate a ReadMe",
  },
  {
    type: "input",
    name:"installation",
    message:"How do you install?",
    default: "npm install",
  },
  {
    type: "input",
    name:"usage",
    message:"Learn how to make a ReadMe",
    default: "Make a ReadMe",
  },
  {
    type: "input",
    name:"username",
    message:"what is your Github username?",
    default: "Evidal19",
  },
  {
    type: "input",
    name:"email",
    message:"what is your email?",
    default: "evida001@ucr.edu",
  },
  {
    type: "list",
    name:"license",
    message:"Select a license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName)
  fs.writeFile(fileName, data, err => {
    console.log('data', data);
    if (err) {
      console.error(err)
      return
    }
    
  })
}

// TODO: Create a function to initialize app
function init() {
  prompt(questions)
  .then((answers) =>{
  const response = markdown.generateMarkdown(answers);
  writeToFile("test.md",response)
  })
}

// Function call to initialize app
init();
