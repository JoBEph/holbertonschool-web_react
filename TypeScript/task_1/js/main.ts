interface Teacher {
    readonly firstName : string,
    readonly lastName : string,
    fullTimeEmployee : boolean,
    yearsOfExperience? : number,
    location : string,
    [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

function printTeacher(firstName: string, lastName: string): string {
    const teacher = firstName.charAt(0);
    return `${teacher}. ${lastName}`;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
      return "Currently working";
    }
    displayName(): string {
      return this.firstName;
    }
}

console.log(printTeacher("Joe", "TLS"));
console.log(printTeacher("Catherine", "Johnson"));
console.log(teacher3);
