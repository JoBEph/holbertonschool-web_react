/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import { insertRow, updateRow, deleteRow } from './crud.js';


const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
};
const updatedRowElement: RowElement = { ...row, age: 23 };
const newRowID: RowID = insertRow(row);
updateRow(newRowID, updatedRowElement);
deleteRow(newRowID);
