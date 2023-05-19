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

  saveProjects() {
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