"use strict"

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }

}

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, hoursWorked, payRate){

        super(firstName, lastName);

        this.id = id;
        this.jobTitle = jobTitle;
        this.hoursWorked = hoursWorked;
        this.payRate = payRate;
    }
    getGrossPay(){
        // [ we want to multiply hoursWorked by the employee's payRate ]
        return this.hoursWorked * this.payRate;
    }
}

const employee1 = new Person("will", "contreras")

console.log(`------------ Exercise 1 ------------`);

console.log(`Hello my name is ${employee1.getFullName()}`);

console.log(`------------ Exercise 2 ------------`);

const employee2 = new Employee("daniel", "blah", 1, "the math job", 20, 12.50);
const employee3 = new Employee("bobby", "pop", 1, "the division job", 35, 12.50);

console.log(`${employee2.getFullName()} works as a ${employee2.jobTitle} with a pay rate of ${employee2.payRate}`);
console.log(`${employee3.getFullName()} works as a ${employee3.jobTitle} with a pay rate of ${employee3.payRate}`);

console.log(`------------ Exercise 3 ------------`);

console.log(`${employee2.getFullName()} works ${employee2.jobTitle} with a pay rate of ${employee2.payRate.toFixed(2)}.Worked for ${employee2.hoursWorked} hours.
The gross pay for this is ${employee2.getGrossPay().toFixed(2)}`);
console.log(`${employee3.getFullName()} works ${employee3.jobTitle} with a pay rate of ${employee3.payRate.toFixed(2)}.Worked for ${employee3.hoursWorked} hours.
The gross pay for this is ${employee3.getGrossPay().toFixed(2)}`);