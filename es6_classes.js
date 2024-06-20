"use strict"

// [ the employee class to be used as a blueprint to create Employees ]
class Employee {

    // [ runs when create a "new" Employee ]
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getIntro() {
        let intro = "Hi! I'm " + this.getFullName() + " and I am a " + this.jobTitle;
        return intro;
    }


    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

    // [ method that returns the full name of the employee ]
    getFullName() {
        return `${this.firstName} ${this.lastName}`; // [ or ] return this.firstName + " " + this.lastName;
    }
    /* [ this also works ]
        get fullName() {
        return `${this.firstName} ${this.lastName}`
        [ for console.log we just use fullName and it'll work ]
        console.log(`Employee ${employee1.fullName()} created`); 
    */

}

// [ create employee 1 from the Employee class (blueprint) using the "new" keyword ]
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);

// [ print out some info about employee 1 ]
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

console.log(`------------ Exercise 2 ------------`);

console.log(`Employee ${employee1.getFullName()} created`);
employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

console.log(`------------ Exercise 3 ------------`);

let intro = employee1.getIntro();
console.log(intro);
employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
