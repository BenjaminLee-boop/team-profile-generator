const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

const classes = {
  Engineer,
  Intern,
  Manager,
};

class DynamicClass {
  constructor(className, args) {
    return new classes[className](args);
  }
}

module.exports = DynamicClass;
