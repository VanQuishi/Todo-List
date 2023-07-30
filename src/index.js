import Project from "./Logics/Project";
import Task from "./Logics/Task";
import LocalStorage from "./Logics/LocalStorage";
import './style.css';
import layout from "./UI/layout";
import ProjectView from "./UI/ProjectView";
import TodayView from "./UI/TodayView";
import WeekView from "./UI/WeekView";
import TaskForm from "./UI/TaskForm";
import editIcon from "./assets/edit_icon.svg";
import deleteIcon from "./assets/delete_icon.svg";

var storage = new LocalStorage([]);
console.log("load projects from storage", storage.projects);

function save() {
  storage.saveProjects();
  location.reload();
}

const todayDateObj = new Date();

const contentDiv = document.createElement('div');
contentDiv.id = "content";

contentDiv.appendChild(layout);
contentDiv.appendChild(TaskForm);
document.body.appendChild(contentDiv);

const todayViewBtn = document.getElementById('todayViewBtn');
const weekViewBtn = document.getElementById('weekViewBtn');
const projectViewBtn = document.getElementById('projectViewBtn');
const colorSelectionToggle = document.getElementById('colorSelectionToggle');
const colorSelectionWrapper = document.getElementById("colorSelectionWrapper");
const view = document.getElementById('view');
const projectList = document.getElementById('projectList');

var deleteTaskButtons;
var editTaskButtons;
var taskItemCheckboxes;

//Display Projects on side bar
var projectDisplayItems = "";
for (let i = 0; i < storage.projects.length; i++) {
  var html = `
    <li class="projectItemBtnWrapper" style="border-color: ${storage.projects[i].color}">
      <div class="projectName">${storage.projects[i].title}</div>
      <button class="editProjectBtn" data-projname="${storage.projects[i].title}" data-color="${storage.projects[i].color}"><img src="${editIcon}" style="width: 1.2rem;"></button>
      <button class="deleteProjectBtn" data-projname="${storage.projects[i].title}"><img src="${deleteIcon}" style="width: 1.2rem;"></button>
    </li>
  `
  projectDisplayItems += html;
}

projectList.innerHTML = projectDisplayItems;

var todayTasks = [];
for (let i = 0; i < storage.projects.length; i++) {
  for (let j = 0; j < storage.projects[i].tasks.length; j++) {
    var taskDueDate = new Date(storage.projects[i].tasks[j].dueDateAndTime);
    if (taskDueDate.toLocaleDateString() == todayDateObj.toLocaleDateString())
    {
      todayTasks.push([storage.projects[i].tasks[j], storage.projects[i].title, storage.projects[i].color, j]);
    }
    console.log("no matched date");
  }
}

/* End of logic test */

todayViewBtn.addEventListener('click', function() {
  view.innerHTML = '';

  //Today View
  let todayView = new TodayView(todayDateObj.toLocaleDateString(), todayTasks);
  console.log(todayView);
  view.appendChild(todayView.htmlDisplay);

  taskItemCheckboxes = document.getElementsByClassName('taskItemCheckbox');
  deleteTaskButtons = document.getElementsByClassName('deleteTaskBtn');
  console.log({deleteTaskButtons});
  editTaskButtons = document.getElementsByClassName('editTaskBtn');
  refreshTaskChkBoxes();
  refreshEditDelTaskBtns();
})

weekViewBtn.addEventListener('click', function() {
  view.innerHTML = '';
  var weekTasks = [];

  for (var i = 0; i < storage.projects.length; i++) {
    for (var j = 0; j < storage.projects[i].tasks.length; j++) {
      console.log(storage.projects[i].tasks[j].dueDateAndTime);
      let taskDueDate = new Date(`"${storage.projects[i].tasks[j].dueDateAndTime}"`);
      console.log(taskDueDate.toString())
      if (taskDueDate <= getSundayOfCurrentWeek() && taskDueDate >= getMondayOfCurrentWeek()) {
        console.log("in between the week");
        weekTasks.push([storage.projects[i].tasks[j], storage.projects[i].title, storage.projects[i].color, j]);
      }
    }

    console.log(weekTasks);
  }

  let weekView = new WeekView(getMondayOfCurrentWeek().toLocaleDateString(), getSundayOfCurrentWeek().toLocaleDateString(), weekTasks);
  console.log(weekView);
  view.appendChild(weekView.htmlDisplay);

  taskItemCheckboxes = document.getElementsByClassName('taskItemCheckbox');
  console.log({taskItemCheckboxes});
  deleteTaskButtons = document.getElementsByClassName('deleteTaskBtn');
  editTaskButtons = document.getElementsByClassName('editTaskBtn');
  refreshTaskChkBoxes();
  refreshEditDelTaskBtns();
})

projectViewBtn.addEventListener('click', function() {
  view.innerHTML = '';
  //Project View
  for (let i = 0; i < storage.projects.length; i++) {
    var projectView = new ProjectView(storage.projects[i].title, storage.projects[i].color, storage.projects[i].tasks);
    view.appendChild(projectView.htmlDisplay);
  }

  let projectTitleButtons = document.getElementsByClassName('projectTitleButton');

  for (var i = 0; i < projectTitleButtons.length; i++) {
    console.log(projectTitleButtons);
    projectTitleButtons[i].addEventListener('click', toggleList);
  }

  taskItemCheckboxes = document.getElementsByClassName('taskItemCheckbox');
  console.log({taskItemCheckboxes});
  deleteTaskButtons = document.getElementsByClassName('deleteTaskBtn');
  editTaskButtons = document.getElementsByClassName('editTaskBtn');
  refreshTaskChkBoxes(); 
  refreshEditDelTaskBtns();
})

todayViewBtn.click();
deleteTaskButtons = document.getElementsByClassName('deleteTaskBtn');
editTaskButtons = document.getElementsByClassName('editTaskBtn');

colorSelectionToggle.addEventListener("click", function()
{
  if (colorSelectionWrapper.style.display == "flex") {
    colorSelectionWrapper.style.display = "none";
  } else {
    colorSelectionWrapper.style.display = "flex";
  }
})

//Week View Helper
function getMondayOfCurrentWeek() {
  const diff = todayDateObj.getDate() - todayDateObj.getDay() + (todayDateObj.getDay() === 0 ? -6 : 1);
  return todayDateObj.setDate(diff), todayDateObj;
}

function getSundayOfCurrentWeek() {
  const diff = todayDateObj.getDate() - todayDateObj.getDay() + (todayDateObj.getDay() === 0 ? 0 : 7);
  return todayDateObj.setDate(diff), todayDateObj;
}

//function to hide/show taskList
function toggleList() {
  let list = document.getElementById(`${this.dataset.project}` + 'taskListWrapper');
  console.log(list);
  if (list.style.display != 'none') {
      list.style.display = 'none';
      return;
  }
  list.style.display = 'block';
  return;
}

//function to complete a task
function completeTask() {
  if (this.checked == true) {
    this.parentElement.classList.add('taskItemCross');

    let projectTitle = this.parentElement.dataset.project;
    let taskIdx = this.parentElement.dataset.taskidx;
    let projectIdx = findProjectIndex(projectTitle);
    console.log(projectTitle, projectIdx);

    storage.projects[projectIdx].tasks[taskIdx].isCompleted = true; 
  }
  else {
    this.parentElement.classList.remove('taskItemCross');

    let projectTitle = this.parentElement.dataset.project;
    let taskIdx = this.parentElement.dataset.taskidx;
    let projectIdx = findProjectIndex(projectTitle);
    console.log(projectTitle, projectIdx);

    storage.projects[projectIdx].tasks[taskIdx].isCompleted = false;
  } 

  save();
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
  if (addProjectBtn.innerText == "Confirm change" || projectInputForm.style.display == 'none' || projectInputForm.style.display == '') {
    projectTitleInput.value = "";
    addProjectBtn.dataset.projname = "";
    addProjectBtn.innerText = "Add Project";
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
  let projColor = colorSelectionToggle.style.backgroundColor;

  if (projectTitle == '') {
    console.log('empty project title');
  }
  else {
    if (addProjectBtn.innerText == "Add Project") {
      if (!checkDuplicateProjectName(projectTitle)) {       
        let newProject = new Project(projectTitle, projColor, []);
        if (storage.addProject(newProject)) {
          save();
          console.log('add project successfully');
        } else {
          console.log('fail to add project');
        }
      } else {
        console.log("Duplicate project name");
        return;
      }
    } else if (addProjectBtn.innerText == "Confirm change") {
      if (projectTitle != this.dataset.projname) {
        if (checkDuplicateProjectName(projectTitle)) {
          console.log("Duplicate project name");
          return;
        }
      }
      let projectIdx = findProjectIndex(this.dataset.projname);
      console.log(this.dataset.projname, projectIdx);
      storage.projects[projectIdx].title = projectTitle;
      storage.projects[projectIdx].color = projColor;
      save();
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
const taskFormTitle = document.getElementById('taskFormTitle');
const cancelTaskBtn = document.getElementById('cancelTaskBtn');
const taskTitleInput = document.getElementById('taskTitleInput');
const taskDescription = document.getElementById('taskDescription');
const dueDate = document.getElementById('dueDate');
const submitTaskBtn = document.getElementById('submitTaskBtn');

addTaskBtn.addEventListener('click', function() {
  taskFormTitle.innerText = "New Task";
  submitTaskBtn.innerText = "Add Task";
  projectDropdown.disabled = false;
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
    if (submitTaskBtn.innerText == "Add Task") {
      let dueDateObj = new Date(dueDate.value.replace(/-/g, '\/'));
      var task = new Task(taskTitleInput.value,  taskDescription.value, dueDateObj);

      for (var i = 0; i < storage.projects.length; i++) {
        if (storage.projects[i].title == projectDropdown.value) {
          storage.projects[i].addTask(task);
        }
      }
    } else if (submitTaskBtn.innerText == "Confirm Change") {
      let taskIdx = submitTaskBtn.dataset.taskeditid;
      let projectIdx = findProjectIndex(projectDropdown.value);
      storage.projects[projectIdx].tasks[taskIdx].title = taskTitleInput.value;
      storage.projects[projectIdx].tasks[taskIdx].description = taskDescription.value;
      let dueDateObj = new Date(dueDate.value.replace(/-/g, '\/'));
      storage.projects[projectIdx].tasks[taskIdx].dueDateAndTime = dueDateObj;
    }

    save();
  } else {
    alert('Please fill in all required fields');
  }
  taskFormWrapper.style.display = "none";
  return;
})

function findProjectIndex(projectName) {
  for (var i = 0; i < storage.projects.length; i++) {
    if (storage.projects[i].title == projectName) {
      return i;
    }
  }
}

function refreshEditDelTaskBtns() {
  //delete task
  for (var i = 0; i < deleteTaskButtons.length; i++) {
    deleteTaskButtons[i].addEventListener('click', function() {
      let projectIdx = findProjectIndex(this.parentElement.dataset.prjname);
      let taskIdx = this.parentElement.dataset.taskidx;
      storage.projects[projectIdx].removeTask(taskIdx);
      save();
      this.parentElement.style.display = 'none';
    })
  }

  //edit task
  for (var i = 0; i < editTaskButtons.length; i++) {
    editTaskButtons[i].addEventListener('click', function() {
      console.log('edit task clicked!', this.parentElement.dataset.duedate);
      taskFormTitle.innerText = "Edit Task";
      submitTaskBtn.innerText = "Confirm Change";
      submitTaskBtn.dataset.taskeditid = this.parentElement.dataset.taskidx;
      taskFormWrapper.style.display = "block";
      taskTitleInput.value = this.parentElement.dataset.tasktitle;
      taskDescription.value = this.parentElement.dataset.desc;
      projectDropdown.value = this.parentElement.dataset.project;
      projectDropdown.disabled = true;
      var todayDate = new Date(this.parentElement.dataset.duedate).toISOString().slice(0, 10);
      dueDate.value = todayDate;
    })
  }
}

function refreshTaskChkBoxes() {
  for (var i = 0; i < taskItemCheckboxes.length; i++) {
    taskItemCheckboxes[i].addEventListener('click', completeTask);
  }
}

//edit project
const editProjectButtons = document.getElementsByClassName('editProjectBtn');

for (var i = 0; i < editProjectButtons.length; i++) {
  editProjectButtons[i].addEventListener('click', function() {
    console.log('clicked edit prject');
    if (addProjectBtn.innerText = "Add Project" || projectInputForm.style.display == 'none' || projectInputForm.style.display == '') {
      projectTitleInput.value = this.dataset.projname;
      addProjectBtn.dataset.projname = this.dataset.projname;
      colorSelectionToggle.style.backgroundColor = `${this.dataset.color}`;
      colorSelectionToggle.style.border = `1px solid ${this.dataset.color}`;
      addProjectBtn.innerText = "Confirm change";
      projectInputForm.style.display = 'block';
    }
    else {
      //projectInputForm.style.display = 'none';
      projectTitleInput.value = this.dataset.projname;
      colorSelectionToggle.style.backgroundColor = `${this.dataset.color}`;
      colorSelectionToggle.style.border = `1px solid ${this.dataset.color}`;
      addProjectBtn.innerText = "Confirm change";
    }
  })
}

// delete project
const deleteProjectButtons = document.getElementsByClassName('deleteProjectBtn');
console.log({deleteProjectButtons});

for (var i = 0; i < deleteProjectButtons.length; i++) {
  deleteProjectButtons[i].addEventListener('click', function() {
    console.log(this.dataset.projname);
    storage.removeProject(this.dataset.projname);
    save();
  })
}