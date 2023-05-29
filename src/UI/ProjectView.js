// Each Project is a dropdown of its tasks, sorted based on due date:
    /*
    + Project title is displayed with its color background
    + First Project tasks are displayed by default
    + User can expand/collapse any of the Projects' dropdowns
    */
// Each task comes along with a checkbox, edit icon, delete icon

export default class ProjectView {
    htmlDisplay;
    constructor(projectTitle, projectColor, projectTasks) {
        console.log('called setter projectView');
        let projectWrapper = document.createElement('div');
        projectWrapper.className = 'viewChild';

        let taskItems = ""
        projectTasks.forEach(task => {
            taskItems += this.createTaskItem(task);
        });

        projectWrapper.innerHTML += `
            <button class="projectTitleButton" style="background-color:${projectColor}">${projectTitle}</button>
            <div class="taskListWrapper" id="${projectTitle}taskListWrapper">
                <ul class="tasksList">${taskItems}</ul>
            </div>
        `;

        this.htmlDisplay = projectWrapper;
    }

    createTaskItem = (task) => {
        let dueDate = task.dueDateAndTime.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
        let taskItemHTML = `
            <li class="taskItem">
                <input type="checkbox" class="taskItemCheckbox">
                <div>${task.title}</div>
                <div>${dueDate}</div>
                <div>Edit</div>
                <div>Delete</div>
            </li>
        `

        return taskItemHTML;
    }
}
