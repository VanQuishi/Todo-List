export default class TodayView {
  htmlDisplay;
  constructor(todayDate, todayList) {
    console.log('called constructor TodayView');
    let todayWrapper = document.createElement('div');
    todayWrapper.className = 'viewChild';

    let taskItems = ""
    todayList.forEach(item => {
      taskItems += this.createTaskItem(item[0], item[1]);
    });

    todayWrapper.innerHTML += `
      <div class="todayTitle">
        <div>Due Today</div>
        <div>${todayDate}</div>
      </div>
      <div class="taskListWrapper">
          <ul class="tasksList">${taskItems}</ul>
      </div>
    `;

    this.htmlDisplay = todayWrapper;
  }

  createTaskItem = (task, projectColor) => {
    let taskItemHTML = `
        <li class="taskItem taskItemToday" style="background-color:${projectColor}">
            <input type="checkbox" class="taskItemCheckbox">
            <div>${task.title}</div>
            <div>Edit</div>
            <div>Delete</div>
        </li>
    `

    return taskItemHTML;
  }
}