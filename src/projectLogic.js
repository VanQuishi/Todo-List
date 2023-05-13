/*CRUD Project*/

var projects = []; 

class Project{
  constructor(prjTitle, prjColor) {
    this.prjTitle = prjTitle;
    this.prjColor = prjColor;
  }

  //Read Project - To be implemented

  //Update Project
  update = (newPrjTitle, newPrjColor) => {
    this.prjTitle = newPrjTitle;
    this.prjColor = newPrjColor;
  }
}

//Delete Project
function deleteProject(_project) {
  /* projects.forEach((project, index) => {
    if (project.prjTitle == _project.prjTitle) {
      projects.splice(index, 1);
    }
  }); */

  let isDeleted = false;

  projects.every((project, index) => {
    if (project.prjTitle == _project.prjTitle) {
      projects.splice(index, 1);
      isDeleted = true;
      return false;  //break
    }

    return true;  //continue
  });

  return isDeleted;
}

//Add Project
function addProject(_project) {
  let isNotDuplicate = projects.every((project) => {
    if (project.prjTitle == _project.prjTitle) {
      return false;  //break
    }

    return true; // continue
  });

  if (isNotDuplicate) {
    projects.push(_project);
    return true;
  }

  return false;
}