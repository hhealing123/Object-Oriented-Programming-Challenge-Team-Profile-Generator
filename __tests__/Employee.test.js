const Employee = require("../lib/Employee");

test("Creating a new employee...", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing employee's name...", () => {
    const name = "Harvey";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing employee's ID...", () => {
    const id = 1;
    const employeeInstance = new Employee("Harvey", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing employee's email...", () => {
    const email = "hhealing123@gmail.com";
    const employeeInstance = new Employee("Harvey", 1, email);
    expect(employeeInstance.email).toBe(email);
})

test("Obtaining name from getName method...", () => {
    const testName = "Harvey";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})
// 
test("Obtaining testID from getID method...", () => {
    const testID = 1;
    const employeeInstance = new Employee("Harvey", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Obtaining test email from getEmail method...", () => {
    const testEmail = "hhealing123@gmail.com";
    const employeeInstance = new Employee("Harvey", 1, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing employee's role....", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Harvey", 1, "hhealing123@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})