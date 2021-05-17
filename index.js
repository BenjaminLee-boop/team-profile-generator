const inquirer = require('inquirer');
const fs = require('fs');
const helpers = require('./utils/helpers');
const DynamicClass = require('./lib/DynamicClass');
const generatePage = require('./src/generatePage');

const employees = [];

function writeToFile(fileName, data) {
  fs.writeFile(`${`${__dirname}/dist/${fileName}`}.html`, data, (err) => (err
    ? console.log(err)
    : console.log('Team profile page generated successfully!')));
}

async function addEmployeePrompt(role, subPropMessage) {
  const employeeData = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `Enter the ${helpers.capitalize(role)}'s name:`,
      },
      {
        type: 'input',
        name: 'id',
        message: `Enter the ${helpers.capitalize(role)}'s employee ID:`,
      },
      {
        type: 'input',
        name: 'email',
        message: `Enter the ${helpers.capitalize(role)}'s email address:`,
      },
      {
        type: 'input',
        name: 'subProp',
        message: `Enter the ${helpers.capitalize(role)}'s ${helpers.capitalize(
          subPropMessage,
        )}:`,
      },
    ])
    .then((res) => res);
  return employeeData;
}

async function addEmployee(role) {
  let subPropMessage;
  switch (role) {
    case 'manager':
      subPropMessage = 'office Number';
      break;
    case 'engineer':
      subPropMessage = 'GitHub Username';
      break;
    case 'intern':
      subPropMessage = 'school';
      break;
    default:
      break;
  }

  const employeeData = await addEmployeePrompt(role, subPropMessage);

  const employee = new DynamicClass(helpers.capitalize(role), employeeData);

  employees.push(employee);

  console.log(`${helpers.capitalize(role)} successfully added to the team.`);
  showMenu();
}
function showMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'menuOption',
        message: 'What would you like to do?',
        choices: [
          { name: 'Add an Engineer', value: 'engineer' },
          { name: 'Add an Intern', value: 'intern' },
          { name: 'Finish Building Team', value: '' },
        ],
      },
    ])
    .then((res) => {
      if (!res.menuOption) {
        console.log('Generating team profile template...');
        const pageData = generatePage(employees);

        console.log('Generating team profile web page... ');
        writeToFile('index', pageData);
      } else {
        addEmployee(res.menuOption);
      }
    });
}
async function init() {
  addEmployee('manager');
}

init();
