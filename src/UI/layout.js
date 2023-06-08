import githubLogo from "../assets/github-mark/github-mark-white.svg";
import addIcon from "../assets/add_icon.svg";

const layout = document.createElement('div');


/* Header section */
const header = document.createElement('div');
header.id = "header";
const logoWrapper = document.createElement('div');
const title = document.createElement('h1');
title.textContent = "Planner";
logoWrapper.appendChild(title);
header.appendChild(logoWrapper);


/* Main section */
const main = document.createElement('div');
main.id = "main";

const nav = document.createElement('div');
nav.id = "nav";

const navItems = document.createElement('ul');

const todayTab = document.createElement('li');
const todayButton = document.createElement('button');
todayButton.textContent = "Today";
todayTab.appendChild(todayButton);

const weekTab = document.createElement('li');
const weekButton = document.createElement('button');
weekButton.textContent = "Week";
weekTab.appendChild(weekButton);

const projectsTab = document.createElement('li');
const projectButton = document.createElement('button');
projectButton.textContent = "Projects";
projectButton.id = "projectButton";
projectsTab.appendChild(projectButton);
const newProjectButton = document.createElement('button');
const addIconWrapper = document.createElement('img');
addIconWrapper.src = addIcon;
addIconWrapper.style.width = "1.2rem";
newProjectButton.appendChild(addIconWrapper);
newProjectButton.id = "newProjectButton";
projectsTab.appendChild(newProjectButton);


navItems.appendChild(todayTab);
navItems.appendChild(weekTab);
navItems.appendChild(projectsTab);

nav.appendChild(navItems);
main.appendChild(nav);

const viewWrapper = document.createElement('div');
const view = document.createElement('div');
view.id = 'view';

viewWrapper.appendChild(view);
main.appendChild(viewWrapper);


/* Footer section */
const footer = document.createElement('div');
footer.id = "footer";
const creditWrapper = document.createElement('p');
creditWrapper.textContent = "Made by Nin"
const githubWrapper = document.createElement('img');
githubWrapper.src = githubLogo;
footer.appendChild(creditWrapper);
footer.appendChild(githubWrapper);

layout.appendChild(header);
layout.appendChild(main);
layout.appendChild(footer);

export default layout;
