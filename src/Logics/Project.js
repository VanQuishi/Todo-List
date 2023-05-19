export default class Project {
  #title;
  #color;
  #tasks;
  constructor(_title, _color) {
    this.title = _title;
    this.color = _color;
    this.tasks = [];
  }

  set title(_title) {
    console.log("called setter");
    this.#title = _title;
  }

  get title() {
    return this.#title;
  }

  set color(_color) {
    this.#color = _color;
  }

  get color() {
    return this.#color;
  }

  set tasks(_tasks) {
    this.#tasks = sortTasksAsc(_tasks);
  }

  get tasks() {
    return this.#tasks;
  }

  addTask = (_task) => {
    this.tasks.push(_task);
    this.tasks = sortTasksAsc(this.tasks);
  }
}

function sortTasksAsc(_tasks) {
  for (let i = 1; i < _tasks.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (_tasks[j + 1].dueDateAndTime < _tasks[j].dueDateAndTime) {
        [_tasks[j + 1], _tasks[j]] = [_tasks[j], _tasks[j + 1]];
      }
    }
  }

  return _tasks;
}
