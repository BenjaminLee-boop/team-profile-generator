const Employee = require('../lib/Employee');

describe('Employee Class', () => {
  describe('getName method', () => {
    it("should return the Employee's name", () => {
      const employee = new Employee(1, 'James Smith', 'james@email.com');

      expect(employee.getName()).toBe(employee.name);
    });
  });
  describe('getID method', () => {
    it("should return the employee's id", () => {
      const employee = new Employee(3, 'Jane Doe', 'jane@email.com');

      expect(employee.getId()).toBe(employee.id);
    });
  });
  describe('getEmail method', () => {
    it("should return the employee's email", () => {
      const employee = new Employee(1, 'James Smith', 'james@email.com');

      expect(employee.getEmail()).toBe(employee.email);
    });
  });
  describe('getRole method', () => {
    it('should return "Employee"', () => {
      const employee = new Employee(1, 'James Smith', 'james@email.com');

      expect(employee.getRole()).toBe('Employee');
    });
  });
});
