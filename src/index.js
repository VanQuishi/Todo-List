import Project from "./Logics/Project";
import Task from "./Logics/Task";
import LocalStorage from "./Logics/LocalStorage";
import './style.css';
import layout from "./UI/layout";
import ProjectView from "./UI/ProjectView";
import TodayView from "./UI/TodayView";
import WeekView from "./UI/WeekView";

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

const colorSelectionToggle = document.getElementById('colorSelectionToggle');
const colorSelectionWrapper = document.getElementById("colorSelectionWrapper");
const view = document.getElementById('view');

colorSelectionToggle.addEventListener("click", function()
{
  if (colorSelectionWrapper.style.display == "flex") {
    colorSelectionWrapper.style.display = "none";
  } else {
    colorSelectionWrapper.style.display = "flex";
  }
})

// Project View
for (let i = 0; i < storage.projects.length; i++) {
  var projectView = new ProjectView(storage.projects[i].title, storage.projects[i].color, storage.projects[i].tasks);
  view.appendChild(projectView.htmlDisplay);
}

//Today View
let todayView = new TodayView(todayDateObj.toLocaleDateString(), todayTasks);
console.log(todayView);
view.appendChild(todayView.htmlDisplay);

//Week View
function getMondayOfCurrentWeek() {
  const diff = todayDateObj.getDate() - todayDateObj.getDay() + (todayDateObj.getDay() === 0 ? -6 : 1);
  return todayDateObj.setDate(diff), todayDateObj;
}

function getSundayOfCurrentWeek() {
  const diff = todayDateObj.getDate() - todayDateObj.getDay() + (todayDateObj.getDay() === 0 ? 0 : 7);
  return todayDateObj.setDate(diff), todayDateObj;
}

console.log("monday", getMondayOfCurrentWeek()); 
console.log("sunday", getSundayOfCurrentWeek()); 

var weekTasks = []

for (var i = 0; i < storage.projects.length; i++) {
  for (var j = 0; j < storage.projects[i].tasks.length; j++) {
    console.log(storage.projects[i].tasks[j].dueDateAndTime);
    let taskDueDate = new Date(`"${storage.projects[i].tasks[j].dueDateAndTime}"`);
    console.log(taskDueDate.toString())
    if (taskDueDate <= getSundayOfCurrentWeek() && taskDueDate >= getMondayOfCurrentWeek()) {
      console.log("in between the week");
      weekTasks.push([storage.projects[i].tasks[j], storage.projects[i].title, storage.projects[i].color]);
    }
  }

  console.log(weekTasks);
}

let weekView = new WeekView(getMondayOfCurrentWeek().toLocaleDateString(), getSundayOfCurrentWeek().toLocaleDateString(), weekTasks);
console.log(weekView);
view.appendChild(weekView.htmlDisplay);

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

let colorButtons = colorSelectionWrapper.querySelectorAll('.colorBtn');

for (var i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener('click', function() {
    let cssObj = window.getComputedStyle(this, null)
    let bgColor = cssObj.getPropertyValue("background-color");
    colorSelectionToggle.style.backgroundColor =  bgColor;
    colorSelectionToggle.style.border = `1px solid ${bgColor}`;
    colorSelectionWrapper.style.display = "none";
  });
}

const newProjectButton = document.getElementById('newProjectButton');
const projectInputForm = document.getElementById('projectInputForm');

newProjectButton.addEventListener('click', function() {
  if (projectInputForm.style.display == 'none' || projectInputForm.style.display == '') {
    projectInputForm.style.display = 'block';
  }
  else {
    projectInputForm.style.display = 'none';
  }
})

function checkDuplicateProjectName(projectTitle) {
  for (var i = 0; i < storage.projects.length; i++) {
    if (storage.projects[i].title == projectTitle) {
      return true;
    }
  }
  return false;
}

const projectTitleInput = document.getElementById('projectInput');
const addProjectBtn = document.getElementById('addProjectBtn');

addProjectBtn.addEventListener('click', function() {
  let projectTitle = document.getElementById('projectInput').value;

  if (checkDuplicateProjectName(projectTitle)) {
    console.log('duplicate project');
  } else if (projectTitle == '') {
    console.log('empty project title');
  }
  else {
    let projColor = colorSelectionToggle.style.backgroundColor;
    let newProject = new Project(projectTitle, projColor, []);
    console.log(projColor);
    if (storage.addProject(newProject)) {
      storage.saveProjects();
      console.log('add project successfully');
    } else {
      console.log('fail to add project');
    }
  }
})

const cancelProjectBtn = document.getElementById('cancelProjectBtn');

cancelProjectBtn.addEventListener('click', function() {
  colorSelectionWrapper.style.display = "none";
  projectTitleInput.value = '';
  projectInputForm.style.display = 'none';
})