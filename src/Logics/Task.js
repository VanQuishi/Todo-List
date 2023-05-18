export default class Task {
  #title;
  #description;
  #startDateAndTime;
  #endDateAndTime;
  #isCompleted;
  constructor(_title, _description, _startDateAndTime, _endDateAndTime) {
    this.title = _title;
    this.description = _description;
    this.startDateAndTime = _startDateAndTime;
    this.endDateAndTime = _endDateAndTime;
    this.isCompleted = false;
  }

  set title(_title) {
    this.#title = _title;
  }

  get title() {
    return this.#title;
  }

  set description(_description) {
    this.#description = _description;
  }

  get description() {
    return this.#description;
  }
  
  set startDateAndTime(_startDateAndTime) {
    this.#startDateAndTime = _startDateAndTime;
  }

  get startDateAndTime() {
    return this.#startDateAndTime;
  }

  set endDateAndTime(_endDateAndTime) {
    this.#endDateAndTime = _endDateAndTime;
  }

  get endDateAndTime() {
    return this.#endDateAndTime;
  }

  set isCompleted(_isCompleted) {
    this.#isCompleted = _isCompleted;
  }

  get isCompleted() {
    return this.#isCompleted;
  }
}