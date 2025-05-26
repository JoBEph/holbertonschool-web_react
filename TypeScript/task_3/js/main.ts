function printTeacher(firstName: string, lastName: string): string {
    const teacher = firstName.charAt(0);
    return `${teacher}. ${lastName}`;
}

console.log(printTeacher("Joe", "TLS"));
console.log(printTeacher("Catherine", "Johnson"));