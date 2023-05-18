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
    this.#tasks = _tasks;
  }

  get tasks() {
    return this.#tasks;
  }
}
