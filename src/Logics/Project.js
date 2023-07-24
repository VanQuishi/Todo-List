export default class Project {
  title;
  color;
  tasks;
  constructor(_title, _color, _tasks) {
    this.title = _title;
    this.color = _color;
    this.tasks = sortTasksAsc(_tasks);
  }

  set title(_title) {
    console.log("called setter");
    this.title = _title;
  }

  get title() {
    return this.title;
  }

  set color(_color) {
    this.color = _color;
  }

  get color() {
    return this.color;
  }

  set tasks(_tasks) {
    this.tasks = sortTasksAsc(_tasks);
  }

  get tasks() {
    return this.tasks;
  }

  addTask = (_task) => {
    this.tasks.push(_task);
    this.tasks = sortTasksAsc(this.tasks);
  }

  removeTask = (_taskIdx) => {
    this.tasks.splice(_taskIdx, 1);
    this.tasks = sortTasksAsc(this.tasks);
    return;
  }
}

function sortTasksAsc(_tasks) {
  console.log("reached outide loop of sortTask");
  for (let i = 1; i < _tasks.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (_tasks[j].dueDateAndTime > _tasks[i].dueDateAndTime) {
        console.log("reached here of sortTask");
        [_tasks[j + 1], _tasks[j]] = [_tasks[j], _tasks[j + 1]];
      }
    }
  }

  return _tasks;
}
