const Employee = require('./Employee');

class Manager extends Employee {
  constructor({
    id, name, email, subProp: officeNumber,
  }) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
