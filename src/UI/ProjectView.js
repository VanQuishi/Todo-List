// Each Project is a dropdown of its tasks, sorted based on due date:
/*
    + Project title is displayed with its color background
    + First Project tasks are displayed by default
    + User can expand/collapse any of the Projects' dropdowns
    */
// Each task comes along with a checkbox, edit icon, delete icon
import editIcon from "../assets/edit_icon.svg";
import deleteIcon from "../assets/delete_icon.svg";

export default class ProjectView {
  htmlDisplay;
  constructor(projectTitle, projectColor, projectTasks) {
    console.log("called setter projectView");
    let projectWrapper = document.createElement("div");
    projectWrapper.className = "viewChild";

    let taskItems = "";
    projectTasks.forEach((task, idx) => {
      taskItems += this.createTaskItem(task, projectTitle, idx);
    });

    projectWrapper.innerHTML += `
            <button class="projectTitleButton" style="background-color:${projectColor}" data-project="${projectTitle}">${projectTitle}</button>
            <div class="taskListWrapper" id="${projectTitle}taskListWrapper">
                <ul class="tasksList">${taskItems}</ul>
            </div>
        `;

    this.htmlDisplay = projectWrapper;
  }

  createTaskItem = (task, projectTitle, idx) => {
    let dueDate = new Date(task.dueDateAndTime).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    let taskItemHTML = "";
    if (task.isCompleted) {
      taskItemHTML = `
                <li class="taskItem ${projectTitle} taskItemCross" data-project="${projectTitle}" data-tasktitle="${task.title}" data-desc="${task.description}" data-duedate="${task.dueDateAndTime}" data-prjname="${projectTitle}" data-taskidx="${idx}">
                    <input type="checkbox" class="taskItemCheckbox" checked>
                    <div>${task.title}</div>
                    <div>${dueDate}</div>
                    <div class="editTaskBtn">
                        <img src="${editIcon}">
                    </div>
                    <div class="deleteTaskBtn">
                        <img src="${deleteIcon}">
                    </div>
                </li>
            `;
    } else {
      taskItemHTML = `
            <li class="taskItem ${projectTitle}" data-project="${projectTitle}" data-tasktitle="${task.title}" data-desc="${task.description}" data-duedate="${task.dueDateAndTime}" data-prjname="${projectTitle}" data-taskidx="${idx}">
                <input type="checkbox" class="taskItemCheckbox">
                <div>${task.title}</div>
                <div>${dueDate}</div>
                <div class="editTaskBtn">
                    <img src="${editIcon}">
                </div>
                <div class="deleteTaskBtn">
                    <img src="${deleteIcon}">
                </div>
                </li>
            `;
    }

    return taskItemHTML;
  };
}
