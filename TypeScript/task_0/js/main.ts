interface studentsList  {
    firstname : string,
    lastname : string,
    age : number,
    location : string,
}
const student1: studentsList = {
    firstname: "Jo",
    lastname: "holb",
    age: 25,
    location: "Toulouse",
};
const student2: studentsList = {
    firstname: "Holbi",
    lastname: "Bordx",
    age: 17,
    location: "Bordeaux",
};

const studentsList: studentsList[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const headerName = document.createElement("th");
headerName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstname;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);
