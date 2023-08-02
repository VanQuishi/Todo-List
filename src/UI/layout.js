import githubLogo from "../assets/github-mark/github-mark-white.svg";
import addIcon from "../assets/add_icon.svg";

const layout = document.createElement("div");

/* Header section */
const header = document.createElement("div");
header.id = "header";
const logoWrapper = document.createElement("div");
const title = document.createElement("h1");
title.textContent = "Planner";
logoWrapper.appendChild(title);
header.appendChild(logoWrapper);

/* Main section */
const main = document.createElement("div");
main.id = "main";

const nav = document.createElement("div");
nav.id = "nav";

nav.innerHTML = `
  <ul>
    <li><button id="todayViewBtn">Today</button></li>
    <li><button id="weekViewBtn">Week</button></li>
    <li class="projectBtnWrapper"><button id="projectViewBtn">Projects</button><button id="newProjectButton"><img src="${addIcon}" style="width: 1.2rem;"></button></li>    
  </ul>
  <div id="projectInputForm">
    <div id="projectInputLabel">
      <label for="projectInput">Project Name:</label>
    </div>
    <div class="projectSwatchesWrapper">
      <input type="text" id="projectInput">
      <div>
        <span title="Click to choose color">
          <button class="colorBtn" id="colorSelectionToggle"></button>
        </span>
        <div id="colorSelectionWrapper">
          <button class="colorBtn" id="btn1"></button>
          <button class="colorBtn" id="btn2"></button>
          <button class="colorBtn" id="btn3"></button>
          <button class="colorBtn" id="btn4"></button>
          <button class="colorBtn" id="btn5"></button>
        </div>
      </div>
    </div>
    <div class="projectSwatchesWrapper">
      <button class="projectFormBtn blueBtn" id="addProjectBtn">Add Project</button>
      <button class="projectFormBtn redBtn" id="cancelProjectBtn">Cancel</button>
    </div>
  </div>  
  <div id="projectListWrapper">
    <ul id="projectList">
    </ul>
  </div>
`;

main.appendChild(nav);

const viewWrapper = document.createElement("div");
viewWrapper.id = "viewWrapper";

const view = document.createElement("div");
view.id = "view";

const addTaskWrapper = document.createElement("div");
addTaskWrapper.id = "addTaskWrapper";
addTaskWrapper.innerHTML = `
  <button class="blueBtn" id="addTaskBtn">New Task</button>
`;

viewWrapper.appendChild(view);
viewWrapper.appendChild(addTaskWrapper);
main.appendChild(viewWrapper);

/* Footer section */
const footer = document.createElement("div");
footer.id = "footer";
const creditWrapper = document.createElement("p");
creditWrapper.textContent = "Made by Nin";
const githubWrapper = document.createElement("img");
githubWrapper.src = githubLogo;
footer.appendChild(creditWrapper);
footer.appendChild(githubWrapper);

layout.appendChild(header);
layout.appendChild(main);
layout.appendChild(footer);

export default layout;
