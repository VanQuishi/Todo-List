import Project from "./Project";
import Task from "./Task";

export default class LocalStorage {
  projects;
  constructor(_projects) {
    this.projects = _projects;
    this.loadProjects();
  }

  set projects(_projects) {
    this.projects = _projects;
  }

  get projects() {
    return this.projects;
  }

  addProject(_project) {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].title == _project.title) {
        return false;
      }
    } 

    this.projects.push(_project);
    return true;
  }

  removeProject(_projectTitle) {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].title == _projectTitle) {
        console.log("reached removeProject");
        this.projects.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  saveProjects() {
    localStorage.setItem('myLocalProjects', JSON.stringify(this.projects));
    console.log("after save", localStorage.getItem('myLocalProjects'));
  }

  loadProjects() {
    console.log("called loadProjects");
    if (localStorage.getItem('myLocalProjects')) {
      var existingProjects = JSON.parse(localStorage.getItem('myLocalProjects'));
      console.log({existingProjects});

      var _projects = [];
      existingProjects.forEach(function(item) {
        console.log(item['title']);
        let project = new Project(item['title'], item['color'], item['tasks']);
        _projects.push(project);
      });

      this.projects = _projects;
    }
  }
}