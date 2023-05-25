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

ProjectView.appendChild(projectTitleButton);
export default ProjectView;
