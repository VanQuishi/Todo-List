import editIcon from "../assets/edit_icon.svg";
import deleteIcon from "../assets/delete_icon.svg";

export default class TodayView {
  htmlDisplay;
  constructor(todayDate, todayList) {
    console.log('called constructor TodayView');
    let todayWrapper = document.createElement('div');
    todayWrapper.className = 'viewChild';

    let taskItems = ""
    let i = 0;
    todayList.forEach(item => {     
      taskItems += this.createTaskItem(item[0], item[1], i);
      i++;
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

  createTaskItem = (task, projectColor, taskID) => {
    let taskItemHTML = `
        <li class="taskItem taskItemToday" style="background-color:${projectColor}">
            <input type="checkbox" class="taskItemCheckbox" id="${taskID}">
            <div>${task.title}</div>
            <div>
              <img src="${editIcon}">
            </div>
            <div>
              <img src="${deleteIcon}">
            </div>
        </li>
    `

    return taskItemHTML;
  }
}