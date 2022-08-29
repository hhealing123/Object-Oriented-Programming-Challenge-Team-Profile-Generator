const Manager = require("../lib/Manager");

test("Creating an office number of manager...", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Harvey", 1, "hhealing123@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing if officeNumber will return office number of the manager...", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Harvey", 1, "hhealing123@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing the role of the manager...", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Harvey", 1, "hhealing123@gmail.com", 1);
    expect(employeeInstance.getRole()).toBe(returnValue);
});