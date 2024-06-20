"use strict"

// [ our Person class that can make a person ]
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
    getIntro(){
        return "My name is " + this.getFullName() + "!";
    }
}

// [ this makes a student but because i use the extends keyword I get all the functionality of a person ]
class Student extends Person {

    constructor(firstName, lastName, grade, major) {

        // [ hand the parameters the parent knows how to handle to the parent constructor ]
        super(firstName, lastName);

        // [ handle the properties that are new  for this class ]
        this.grade = grade;
        this.major = major;
    
    }

}

// [ this makes a student but because i use the extends keyword I get all the functionality of a person ]
class LawStudent extends Student {

    constructor(firstName, lastName, grade, barScore) {

        // [ hand the parameters the parent knows how to handle to the parent constructor ]
        super(firstName, lastName);

        // [ handle the properties that are new  for this class ]
        this.grade = grade;
        this.major = "law";
    
    }

}

let ericTheStudent = new Student("eric", "schwartz", 11, "getting out of school");

console.log(ericTheStudent);

let ericThePerson = new Person("eric", "schwartz");

console.log(ericTheStudent);

let ericTheLawStudent = new LawStudent("eric", "schwartz", 11, 150);

console.log(ericTheLawStudent);

