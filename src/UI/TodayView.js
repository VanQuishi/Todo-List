import editIcon from "../assets/edit_icon.svg";
import deleteIcon from "../assets/delete_icon.svg";

export default class TodayView {
  htmlDisplay;
  constructor(todayDate, todayList) {
    console.log("called constructor TodayView");
    let todayWrapper = document.createElement("div");
    todayWrapper.className = "viewChild";

    let taskItems = "";
    todayList.forEach((item) => {
      taskItems += this.createTaskItem(item[0], item[1], item[2], item[3]);
    });

    todayWrapper.innerHTML += `
      <div class="todayTitle">
        <h2>Due Today</h2>
        <h2>${todayDate}</h2>
      </div>
      <div class="taskListWrapper">
          <ul class="tasksList">${taskItems}</ul>
      </div>
    `;

    this.htmlDisplay = todayWrapper;
  }

  createTaskItem = (task, projectTitle, projectColor, idx) => {
    let taskItemHTML = "";
    if (task.isCompleted) {
      taskItemHTML = `
        <li class="taskItem ${projectTitle} taskItemToday taskItemCross" style="background-color:${projectColor}" data-project="${projectTitle}" data-tasktitle="${task.title}" data-desc="${task.description}" data-duedate="${task.dueDateAndTime}" data-prjname="${projectTitle}" data-taskidx="${idx}">
            <input type="checkbox" class="taskItemCheckbox" checked>
            <div>${task.title}</div>
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
        <li class="taskItem ${projectTitle} taskItemToday" style="background-color:${projectColor}" data-project="${projectTitle}" data-tasktitle="${task.title}" data-desc="${task.description}" data-duedate="${task.dueDateAndTime}" data-prjname="${projectTitle}" data-taskidx="${idx}">
            <input type="checkbox" class="taskItemCheckbox">
            <div>${task.title}</div>
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
