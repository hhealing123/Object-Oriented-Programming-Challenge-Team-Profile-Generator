const Intern = require("../lib/Intern");

test("Creating intern's attending school...", () => {
    const testSchool = "Inter's school name";
    const employeeInstance = new Intern("Harvey", 1, "hhealing123@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing if getEmail will return email address..", () => {
    const testEmail = "Inter's Email Address";
    const employeeInstance = new Intern("Harvey", 1, "hhealing123@gmail.com", testEmail);
    expect(employeeInstance.getSchool()).toBe(testEmail);
});

test("Testing employee's role...", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Harvey", 1, "hhealing123@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});