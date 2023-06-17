export default class Task {
  title;
  description;
  dueDateAndTime;
  isCompleted;
  constructor(_title, _description, _dueDateAndTime) {
    this.title = _title;
    this.description = _description;
    this.dueDateAndTime = _dueDateAndTime;
    this.isCompleted = false;
  }

  set title(_title) {
    this.title = _title;
  }

  get title() {
    return this.title;
  }

  set description(_description) {
    this.description = _description;
  }

  get description() {
    return this.description;
  }
  
  set dueDateAndTime(_dueDateAndTime) {
    this.dueDateAndTime = _dueDateAndTime;
  }

  get dueDateAndTime() {
    return this.dueDateAndTime;
  }
  
  set isCompleted(_isCompleted) {
    this.isCompleted = _isCompleted;
  }

  get isCompleted() {
    return this.isCompleted;
  }
}