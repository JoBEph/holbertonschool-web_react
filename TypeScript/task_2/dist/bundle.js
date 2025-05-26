/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    var salaryNumber = typeof salary === 'number' ? salary : parseFloat(salary);
    if (salaryNumber < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
// Test cases
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQXVCQTtJQUFBO0lBVUEsQ0FBQztJQVRDLCtCQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyx3QkFBd0I7SUFDakMsQ0FBQztJQUNELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCO0lBQ3BDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUNEO0lBQUE7SUFVQSxDQUFDO0lBVEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCO0lBQ2hDLENBQUM7SUFDRCxnQ0FBYyxHQUFkO1FBQ0UsT0FBTyxxQkFBcUI7SUFDOUIsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCO0lBQzFCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUNELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQU0sWUFBWSxHQUFHLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUUsSUFBSSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3RCLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztLQUN0QjtJQUNELE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUN4QixDQUFDO0FBQ0QsU0FBUyxVQUFVLENBQUMsUUFBNEI7SUFDOUMsT0FBUSxRQUFxQixDQUFDLGlCQUFpQixLQUFLLFNBQVMsQ0FBQztBQUNoRSxDQUFDO0FBQ0QsU0FBUyxXQUFXLENBQUMsUUFBNEI7SUFDOUMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0tBQzNDO1NBQ0c7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDO0FBRUQsYUFBYTtBQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICByZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgbGFzdE5hbWU6IHN0cmluZztcbiAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiO1xuICB9XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiXG4gIH1cbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCJcbiAgfVxufVxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIlxuICB9XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IGhhdmUgYSBicmVha1wiXG4gIH1cbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiXG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcbiAgY29uc3Qgc2FsYXJ5TnVtYmVyID0gdHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgPyBzYWxhcnkgOiBwYXJzZUZsb2F0KHNhbGFyeSk7XG4gIGlmIChzYWxhcnlOdW1iZXIgPCA1MDApIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgfVxuICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG59XG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gIHJldHVybiAoZW1wbG95ZWUgYXMgRGlyZWN0b3IpLndvcmtEaXJlY3RvclRhc2tzICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogdm9pZCB7XG4gICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpKTtcbiAgfVxuICBlbHNle1xuICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCkpO1xuICB9XG59XG5cbi8vIFRlc3QgY2FzZXNcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpO1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKSk7XG5leGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKTtcbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==