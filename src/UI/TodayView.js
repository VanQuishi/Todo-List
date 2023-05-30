export default class TodayView {
  htmlDisplay;
  constructor(todayList, projectColor) {
    console.log('called constructor TodayView');
    let todayWrapper = document.createElement('div');
    todayWrapper.className = 'viewChild';

    let taskItems = ""
    todayList.forEach(task => {
      taskItems += this.createTaskItem(task);
    });

    todayWrapper.innerHTML += `
    
    `
  }

  createTaskItem = (task, projectColor) => {
    let taskItemHTML = `
        <li class="taskItem" style="background-color:${projectColor}">
            <input type="checkbox" class="taskItemCheckbox">
            <div>${task.title}</div>
            <div>Edit</div>
            <div>Delete</div>
        </li>
    `

    return taskItemHTML;
  }
}