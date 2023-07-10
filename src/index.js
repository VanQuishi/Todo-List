import Project from "./Logics/Project";
import Task from "./Logics/Task";
import LocalStorage from "./Logics/LocalStorage";
import './style.css';
import layout from "./UI/layout";
import ProjectView from "./UI/ProjectView";
import TodayView from "./UI/TodayView";
import WeekView from "./UI/WeekView";
import TaskForm from "./UI/TaskForm";

const todayDateObj = new Date();

const contentDiv = document.createElement('div');
contentDiv.id = "content";


var storage = new LocalStorage([]);
console.log("load projects from storage", storage.projects);

var storage2 = new LocalStorage([]);
storage2.loadProjects();

var project3 = new Project("Odin3", "#fcf6bd", []);


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
contentDiv.appendChild(TaskForm);
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
const cancelProjectBtn = document.getElementById('cancelProjectBtn');

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

cancelProjectBtn.addEventListener('click', function() {
  colorSelectionWrapper.style.display = "none";
  projectTitleInput.value = '';
  projectInputForm.style.display = 'none';
})

const addTaskBtn = document.getElementById('addTaskBtn');
const taskFormWrapper = document.getElementById('taskFormWrapper');
const taskForm = document.getElementById('taskForm');
const cancelTaskBtn = document.getElementById('cancelTaskBtn');
const taskTitleInput = document.getElementById('taskTitleInput');
const taskDescription = document.getElementById('taskDescription');
const dueDate = document.getElementById('dueDate');
const submitTaskBtn = document.getElementById('submitTaskBtn');

addTaskBtn.addEventListener('click', function() {
  taskFormWrapper.style.display = "block";
})

cancelTaskBtn.addEventListener('click', function() {
  taskFormWrapper.style.display = "none";
  taskTitleInput.value = '';
  taskDescription.value = '';
  dueDate.value = '';
})

const projectDropdown = document.getElementById('projectDropdown');

for (var i = 0; i < storage.projects.length; i++) {
  var prjOption = document.createElement('option');
  prjOption.innerText = storage.projects[i].title;
  projectDropdown.append(prjOption);
}

console.log("option:", projectDropdown.value);

submitTaskBtn.addEventListener('click', function() {
  if (taskTitleInput.value != '' && dueDate.value != '') {
    var task = new Task(taskTitleInput.value,  taskDescription.value, dueDate.value);

    for (var i = 0; i < storage.projects.length; i++) {
      if (storage.projects[i].title == projectDropdown.value) {
        storage.projects[i].addTask(task);
      }
    }

    storage.saveProjects();
  } else {
    alert('Please fill in all required fields');
  }
  taskFormWrapper.style.display = "none";
  return;
})