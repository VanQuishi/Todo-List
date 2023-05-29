import Project from "./Logics/Project";
import Task from "./Logics/Task";
import LocalStorage from "./Logics/LocalStorage";
import './style.css';
import layout from "./UI/layout";
import ProjectView from "./UI/ProjectView";

var project1 = new Project("Odin1", "red")
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

var project2 = new Project("Odin2", "blue");

var projects = [];

var storage = new LocalStorage(projects);
console.log(storage.projects);
storage.removeProject("Odin3");

var project3 = new Project("Odin3", "yellow");
storage.addProject(project3);
storage.removeProject("Odin3");
console.log(storage.projects);
/* End of logic test */

contentDiv.appendChild(layout);
document.body.appendChild(contentDiv);

const view = document.getElementById('view');
let projectView1 = new ProjectView(project1.title, project1.color, project1.tasks);
let projectView2 = new ProjectView(project1.title, project1.color, project1.tasks);
console.log(projectView1);
view.appendChild(projectView1.htmlDisplay);
view.appendChild(projectView2.htmlDisplay);

//function to hide/show taskList
function toggleList() {
  let list = document.getElementById(`${this.textContent}` + 'taskListWrapper');
  console.log(list);
  if (list.style.display != 'none') {
      list.style.display = 'none';
      return;
  }
  list.style.display = 'block';
  return;
}

let projectTitleButtons = document.getElementsByClassName('projectTitleButton');

for (var i = 0; i < projectTitleButtons.length; i++) {
  projectTitleButtons[i].addEventListener('click', toggleList);
}