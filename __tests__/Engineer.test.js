const Engineer = require("../lib/Engineer");

test("Creating a GitHub...", () => {
    const testGithub = "hhealing123";
    const employeeInstance = new Engineer("Harvey", 1, "hhealing123@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing if getGithub will return GitHub...", () => {
    const testGithub = "hhealing123";
    const employeeInstance = new Engineer("Harvey", 1, "hhealing123@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing employee's role...", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Harvey", 1, "hhealing123@gmail.com", "HarveyLee");
    expect(employeeInstance.getRole()).toBe(returnValue);
});