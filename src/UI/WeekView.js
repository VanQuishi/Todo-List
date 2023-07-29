import editIcon from "../assets/edit_icon.svg";
import deleteIcon from "../assets/delete_icon.svg";

export default class WeekView {
  htmlDisplay;
  constructor(weekBegin, weekEnd, weekList) {
    let weekWrapper = document.createElement('div');
    weekWrapper.className = 'viewChild';

    let taskItems = ""
    weekList.forEach(item => {     
      taskItems += this.createTaskItem(item[0], item[1], item[2], item[3]);
    });

    weekWrapper.innerHTML += `
      <div class="todayTitle">
        <h2>Due This Week</h2>
        <h2>${weekBegin} - ${weekEnd}</h2>
      </div>
      <div class="taskListWrapper">
          <ul class="tasksList">${taskItems}</ul>
      </div>
    `;

    this.htmlDisplay = weekWrapper;
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
      `
    }
    else {
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
      `
    }
    
    return taskItemHTML;
  }
}