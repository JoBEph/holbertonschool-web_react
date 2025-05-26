/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
function printTeacher(firstName, lastName) {
    var teacher = firstName.charAt(0);
    return "".concat(teacher, ". ").concat(lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
console.log(printTeacher("Joe", "TLS"));
console.log(printTeacher("Catherine", "Johnson"));
console.log(teacher3);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsU0FBUyxZQUFZLENBQUMsU0FBaUIsRUFBRSxRQUFnQjtJQUNyRCxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sVUFBRyxPQUFPLGVBQUssUUFBUSxDQUFFLENBQUM7QUFDckMsQ0FBQztBQUVEO0lBSUksc0JBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUNELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZSA6IHN0cmluZyxcbiAgICByZWFkb25seSBsYXN0TmFtZSA6IHN0cmluZyxcbiAgICBmdWxsVGltZUVtcGxveWVlIDogYm9vbGVhbixcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT8gOiBudW1iZXIsXG4gICAgbG9jYXRpb24gOiBzdHJpbmcsXG4gICAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBjb250cmFjdDogZmFsc2UsXG59O1xuXG5mdW5jdGlvbiBwcmludFRlYWNoZXIoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRlYWNoZXIgPSBmaXJzdE5hbWUuY2hhckF0KDApO1xuICAgIHJldHVybiBgJHt0ZWFjaGVyfS4gJHtsYXN0TmFtZX1gO1xufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3Mge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgIH1cblxuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gXCJDdXJyZW50bHkgd29ya2luZ1wiO1xuICAgIH1cbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICAgIH1cbn1cblxuY29uc29sZS5sb2cocHJpbnRUZWFjaGVyKFwiSm9lXCIsIFwiVExTXCIpKTtcbmNvbnNvbGUubG9nKHByaW50VGVhY2hlcihcIkNhdGhlcmluZVwiLCBcIkpvaG5zb25cIikpO1xuY29uc29sZS5sb2codGVhY2hlcjMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9