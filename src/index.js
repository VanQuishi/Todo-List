import Project from "./Logics/Project";
import Task from "./Logics/Task";


var project1 = new Project("Odin", "red")
project1.tasks = [1,1,2];

console.log(project1.title);
console.log(project1.color);
console.log(project1.tasks);

const contentDiv = document.createElement('div');
contentDiv.id = "content";

var startDate = new Date("17 May 2023 5:00:00");
var task1 = new Task("Planning logic", "Write down things", startDate, new Date(2023, 4, 20, 5, 0, 0))  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task1.startDateAndTime, task1.endDateAndTime, task1.isCompleted);

document.body.appendChild(contentDiv);