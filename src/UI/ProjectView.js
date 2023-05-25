// Each Project is a dropdown of its tasks, sorted based on due date:
    /*
    + Project title is displayed with its color background
    + First Project tasks are displayed by default
    + User can expand/collapse any of the Projects' dropdowns
    */
// Each task comes along with a checkbox, edit icon, delete icon

const ProjectView = document.createElement('div');

const projectTitleButton = document.createElement('button');
projectTitleButton.className = 'projectTitleButton';
projectTitleButton.style.backgroundColor = "yellow";
projectTitleButton.textContent = "Home";

const taskListWrapper = document.createElement('div');
taskListWrapper.className = 'taskListWrapper';
const taskList = document.createElement('ul');

let taskItem0 = document.createElement('li');
taskItem0.className = "taskItem";

let checkbox0 = document.createElement('input');
checkbox0.type = "checkbox";
checkbox0.className = "taskItemCheckbox";

let taskTitle0 = document.createElement('div');
taskTitle0.textContent = "Clean bathroom";

let taskDueDate0 = document.createElement('div');
taskDueDate0.textContent = "May 24, 2023";

let taskEditButton0 = document.createElement('div');
taskEditButton0.textContent = "edit";

let taskDeleteButton0 = document.createElement('div');
taskDeleteButton0.textContent = "delete";

taskItem0.appendChild(checkbox0);
taskItem0.appendChild(taskTitle0);
taskItem0.appendChild(taskDueDate0);
taskItem0.appendChild(taskEditButton0);
taskItem0.appendChild(taskDeleteButton0);

let taskItem1 = document.createElement('li');
taskItem1.className = "taskItem";

let checkbox1 = document.createElement('input');
checkbox1.type = "checkbox";
checkbox1.className = "taskItemCheckbox";

let taskTitle1 = document.createElement('div');
taskTitle1.textContent = "Clean bathroom";

let taskDueDate1 = document.createElement('div');
taskDueDate1.textContent = "May 24, 2023";

let taskEditButton1 = document.createElement('div');
taskEditButton1.textContent = "edit";

let taskDeleteButton1 = document.createElement('div');
taskDeleteButton1.textContent = "delete";

taskItem1.appendChild(checkbox1);
taskItem1.appendChild(taskTitle1);
taskItem1.appendChild(taskDueDate1);
taskItem1.appendChild(taskEditButton1);
taskItem1.appendChild(taskDeleteButton1);

taskList.appendChild(taskItem0);
taskList.appendChild(taskItem1);
taskListWrapper.appendChild(taskList);

ProjectView.appendChild(projectTitleButton);
ProjectView.appendChild(taskListWrapper);
export default ProjectView;
