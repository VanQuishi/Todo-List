import Project from "./Project";

export default class LocalStorage {
  #projects;
  constructor(_projects) {
    this.projects = _projects;
    this.saveProjects();
  }

  set projects(_projects) {
    this.#projects = _projects;
  }

  get projects() {
    return this.#projects;
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
    console.log("called saveProjects()");
    localStorage.setItem('myLocalProjects', JSON.stringify(this.projects));
  }

  loadProjects() {
    if (localStorage.getItem('myLocalProjects')) {
      var existingProjects = JSON.parse(localStorage.getItem('myLocalProjects'));
      console.log({existingProjects});

      existingProjects.forEach(item => {
        let project = new Project(item['title'], item['color']);
        this.projects.push(project);
      });
    }
  }
}