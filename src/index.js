import Project from "./Logics/Project";
import Task from "./Logics/Task";


var project1 = new Project("Odin", "red")
project1.tasks = [1,1,2];

console.log(project1.title);
console.log(project1.color);
console.log(project1.tasks);

const contentDiv = document.createElement('div');
contentDiv.id = "content";

var dueDate = new Date("17 May 2023 5:00:00");
var task1 = new Task("Planning logic 1", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task1.dueDateAndTime, task1.isCompleted);

var dueDate = new Date("20 May 2023 5:00:00");
var task2 = new Task("Planning logic 2 ", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task2.dueDateAndTime, task1.isCompleted);

var dueDate = new Date("25 May 2023 5:00:00");
var task3 = new Task("Planning logic 3", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task3.dueDateAndTime, task1.isCompleted);

project1.tasks = [task1, task3, task2];
console.log(project1.tasks);

var dueDate = new Date("15 May 2023 5:00:00");
var task0 = new Task("Planning logic 0", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task1.dueDateAndTime, task0.isCompleted);

project1.addTask(task0);
console.log(project1.tasks);

project1.removeTask(task0.title, task0.dueDateAndTime);
console.log(project1.tasks);

document.body.appendChild(contentDiv);