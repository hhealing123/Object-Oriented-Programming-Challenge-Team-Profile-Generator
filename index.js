const Manager = require("./lib/Manager.js");
const SeniorEngineer = require("./lib/SeniorEngineer.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const output = path.resolve(__dirname, "output");
const outputPath = path.join(output, "index.html");
const generateTeam = require("./src/template.js")

teamArray = [];

function createTeamProfile () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Senior Engineer","Engineer", "Intern", "Team members are fulfilled"]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "SeniorEngineer":
          addSeniorEngineer();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          htmlBuilder();
      }
    })
  }

// The below will create Object Oriented Programming Functions using inquirer which is imported by using require("inquirer").

function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the manager's employee ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email address?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

}

function addSeniorEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "seniorEngineerName",
        message: "What is the Senior Engineer's name?"
      },

      {
        type: "input",
        name: "seniorEngineerId",
        message: "What is the Senior Engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "seniorEngineerEmail",
        message: "What is the Senior Engineer's email address?"
      },

      {
        type: "input",
        name: "seniorEngineerGithub",
        message: "What is the Senior Engineer's GitHub username?"
      }

    ]).then(answers => {
      const seniorEngineer = new SeniorEngineer(answers.seniorEngineerName, answers.seniorEngineerId, answers.seniorEngineerEmail, answers.seniorEngineerGithub);
      teamArray.push(seniorEngineer);
      createTeam();
    });

  }

function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

  function htmlBuilder () {
    console.log("Your team is now created!!!")
    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
}

createTeam();

}

createTeamProfile();