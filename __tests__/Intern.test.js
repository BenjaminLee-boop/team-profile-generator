const Intern = require('../lib/Intern');

describe('Intern Class', () => {
  describe('getName method', () => {
    it("should return the Intern's name", () => {
      const intern = new Intern(
        1,
        'James Smith',
        'james@email.com',
        'Adelaide University',
      );

      expect(intern.getName()).toBe(intern.name);
    });
  });

  describe('getID method', () => {
    it("should return the Intern's id", () => {
      const intern = new Intern(
        3,
        'Jane Doe',
        'jane@email.com',
        'Adelaide University',
      );

      expect(intern.getId()).toBe(intern.id);
    });
  });
  describe('getEmail method', () => {
    it("should return the Intern's email", () => {
      const intern = new Intern(
        1,
        'James Smith',
        'james@email.com',
        'Adelaide University',
      );

      expect(intern.getEmail()).toBe(intern.email);
    });
  });
  describe('getSchool method', () => {
    it("should return the Intern's school", () => {
      const intern = new Intern(
        1,
        'James Smith',
        'james@email.com',
        'Adelaide University',
      );

      expect(intern.getSchool()).toBe(intern.school);
    });
  });
  describe('getRole method', () => {
    it('should return "Intern"', () => {
      const intern = new Intern(
        1,
        'James Smith',
        'james@email.com',
        'Adelaide University',
      );

      expect(intern.getRole()).toBe('Intern');
    });
  });
});
