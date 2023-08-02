export default class Task {
  title;
  description;
  dueDateAndTime;
  isCompleted;
  constructor(_title, _description, _dueDateAndTime, _isCompleted) {
    this.title = _title;
    this.description = _description;
    this.dueDateAndTime = _dueDateAndTime;
    this.isCompleted = _isCompleted;
  }
}
