import githubLogo from "../assets/github-mark/github-mark-white.svg";

const layout = document.createElement('div');

const header = document.createElement('div');
header.id = "header";

const main = document.createElement('div');
main.id = "main";

const nav = document.createElement('div');
nav.id = "nav";

const navItems = document.createElement('ul');

const todayTab = document.createElement('li');
todayTab.textContent = "Today";

const weekTab = document.createElement('li');
weekTab.textContent = "Week";

const projectsTab = document.createElement('li');
projectsTab.textContent = "Projects";

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