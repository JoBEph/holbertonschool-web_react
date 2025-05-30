interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break"
  }
  workDirectorTasks(): string {
    return "Getting to director tasks"
  }
}
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home"
  }
  getCoffeeBreak(): string {
    return "Cannot have a break"
  }
  workTeacherTasks(): string {
    return "Getting to work"
  }
}
function createEmployee(salary: number | string): Director | Teacher {
  const salaryNumber = typeof salary === 'number' ? salary : parseFloat(salary);
  if (salaryNumber < 500) {
    return new Teacher();
  }
  return new Director();
}
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}
function executeWork(employee: Director | Teacher): void {
   if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  }
  else{
  console.log(employee.workTeacherTasks());
  }
}
function teachClass(todayClass: Subjects): string {
  switch (todayClass) {
    case 'Math':
      return 'Teaching Math';
    case 'History':
      return 'Teaching History';
    default:
      return 'Unknown subject';
  }
}
type Subjects = 'Math' | 'History';


// Test cases
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
teachClass('Math');
teachClass('History');