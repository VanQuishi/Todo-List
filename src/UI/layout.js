import githubLogo from "../assets/github-mark/github-mark-white.svg";

const layout = document.createElement('div');

const header = document.createElement('div');
header.id = "header";
const logoWrapper = document.createElement('div');
const title = document.createElement('h1');
title.textContent = "Planner";
logoWrapper.appendChild(title);
header.appendChild(logoWrapper);

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
newProjectButton.textContent = "+";
newProjectButton.id = "newProjectButton";
projectsTab.appendChild(newProjectButton);


navItems.appendChild(todayTab);
navItems.appendChild(weekTab);
navItems.appendChild(projectsTab);

nav.appendChild(navItems);
main.appendChild(nav);

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