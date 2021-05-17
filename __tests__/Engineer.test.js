const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
  describe('getName method', () => {
    it("should return the Engineer's name", () => {
      const engineer = new Engineer(
        1,
        'James Smith',
        'james@email.com',
        'gitHubUsername',
      );

      expect(engineer.getName()).toBe(engineer.name);
    });
  });
  describe('getID method', () => {
    it("should return the Engineer's id", () => {
      const engineer = new Engineer(
        3,
        'Jane Doe',
        'jane@email.com',
        'gitHubUsername',
      );

      expect(engineer.getId()).toBe(engineer.id);
    });
  });
  describe('getEmail method', () => {
    it("should return the Engineer's email", () => {
      const engineer = new Engineer(
        1,
        'James Smith',
        'james@email.com',
        'gitHubUsername',
      );

      expect(engineer.getEmail()).toBe(engineer.email);
    });
  });
  describe('getGithub method', () => {
    it("should return the Engineer's GitHub username", () => {
      const engineer = new Engineer(
        1,
        'James Smith',
        'james@email.com',
        'gitHubUsername',
      );

      expect(engineer.getGithub()).toBe(engineer.github);
    });
  });
  describe('getRole method', () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer(
        1,
        'James Smith',
        'james@email.com',
        'gitHubUsername',
      );

      expect(engineer.getRole()).toBe('Engineer');
    });
  });
});
