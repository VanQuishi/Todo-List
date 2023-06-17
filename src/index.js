import Project from "./Logics/Project";
import Task from "./Logics/Task";
import LocalStorage from "./Logics/LocalStorage";
import './style.css';
import layout from "./UI/layout";
import ProjectView from "./UI/ProjectView";
import TodayView from "./UI/TodayView";

const todayDateObj = new Date();

var project1 = new Project("Odin1", "#ffafcc", [])
project1.tasks = [1,1,2];

console.log(project1.title);
console.log(project1.color);
console.log(project1.tasks);

const contentDiv = document.createElement('div');
contentDiv.id = "content";

var dueDate = new Date("17 May 2023 5:00:00");
var task1 = new Task("Planning logic 1", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task1.dueDateAndTime, task1.isCompleted);

dueDate = new Date("20 May 2023 5:00:00");
var task2 = new Task("Planning logic 2 ", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task2.dueDateAndTime, task2.isCompleted);

dueDate = new Date("10 June 2023 5:00:00");
var task3 = new Task("Planning logic 3", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task3.dueDateAndTime, task3.isCompleted);

project1.tasks = [task1, task3, task2];
console.log(project1.tasks);

var dueDate = new Date("15 May 2023 5:00:00");
var task0 = new Task("Planning logic 0", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task1.dueDateAndTime, task0.isCompleted);

project1.addTask(task0);
console.log(project1.tasks);

project1.removeTask(task0.title, task0.dueDateAndTime);
console.log(project1.tasks);

var project2 = new Project("Odin2", "#a2d2ff", []);

var dueDate = new Date("10 June 2023 5:00:00");
var task4 = new Task("Planning logic 4", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task4.dueDateAndTime, task4.isCompleted);

dueDate = new Date("20 May 2023 5:00:00");
var task5 = new Task("Planning logic 2 ", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task5.dueDateAndTime, task5.isCompleted);

dueDate = new Date("8 June 2023 5:00:00");
var task6 = new Task("Planning logic 3", "Write down things", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan
console.log(task6.dueDateAndTime, task6.isCompleted);

project2.tasks = [task4, task5, task6];


var projects = [project1, project2];

var storage = new LocalStorage([]);
console.log("load projects from storage", storage.projects);
/* var storage = new LocalStorage(projects);
storage.saveProjects();
console.log(storage.projects); */
var storage2 = new LocalStorage([]);
storage2.loadProjects();
/* storage.removeProject("Odin3"); */

var project3 = new Project("Odin3", "#fcf6bd", []);
/* storage.addProject(project3);
storage.removeProject("Odin3");
console.log(storage.projects);
storage.addProject(project2);
storage.addProject(project1);
console.log('projects in storage:', storage.projects);
console.log(storage.projects.length);
console.log(storage.projects[0].tasks.length); */

var today = new Date();
storage.projects[0].tasks[0].dueDateAndTime = today;
storage.projects[1].tasks[0].dueDateAndTime = today;

var todayTasks = [];

for (let i = 0; i < storage.projects.length; i++) {
  for (let j = 0; j < storage.projects[i].tasks.length; j++) {
    var taskDueDate = new Date(storage.projects[i].tasks[j].dueDateAndTime);
    if (taskDueDate.toLocaleDateString() == todayDateObj.toLocaleDateString())
    {
      todayTasks.push([storage.projects[i].tasks[j], storage.projects[i].title, storage.projects[i].color]);
      console.log(todayTasks);
    }
    console.log("no matched date");
  }
}

/* End of logic test */

contentDiv.appendChild(layout);
document.body.appendChild(contentDiv);

const view = document.getElementById('view');

for (let i = 0; i < storage.projects.length; i++) {
  var projectView = new ProjectView(storage.projects[i].title, storage.projects[i].color, storage.projects[i].tasks);
  view.appendChild(projectView.htmlDisplay);
}

let todayView = new TodayView(todayDateObj.toLocaleDateString(), todayTasks);
console.log(todayView);
view.appendChild(todayView.htmlDisplay);

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

//function to complete a task
function completeTask() {
  if (this.checked == true) {
    this.parentElement.classList.add('taskItemCross');
    console.log(this.parentElement.classList[1]);
    let projectTitle = this.parentElement.classList[1];
    for (var i = 0; i < storage.projects.length; i++) {
      if (storage.projects[i].title == projectTitle) {
        for (var j = 0; j < storage.projects[i].tasks.length; j++) {
          storage.projects[i].tasks[j].isCompleted = true;
          console.log(storage.projects[i].tasks[j].title, storage.projects[i].tasks[j].isCompleted);
          break;
        }
        break;
      }
    }
  }
  else {
    this.parentElement.classList.remove('taskItemCross');
    console.log(this.parentElement.classList[1]);
    let projectTitle = this.parentElement.classList[1];
    for (var i = 0; i < storage.projects.length; i++) {
      if (storage.projects[i].title == projectTitle) {
        for (var j = 0; j < storage.projects[i].tasks.length; j++) {
          storage.projects[i].tasks[j].isCompleted = false;
          console.log(storage.projects[i].tasks[j].title, storage.projects[i].tasks[j].isCompleted);
          break;
        }
        break;
      }
    }
  } 

  storage.saveProjects();
  console.log(storage.projects);
}

let taskItemCheckboxes = document.getElementsByClassName('taskItemCheckbox');

for (var i = 0; i < taskItemCheckboxes.length; i++) {
  taskItemCheckboxes[i].addEventListener('click', completeTask);
}