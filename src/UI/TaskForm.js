const TaskForm = document.createElement('div');
TaskForm.id = "taskFormWrapper";

TaskForm.innerHTML = `
  <div style="display: flex; justify-content: center">
    <h3>New Task</h3>
  </div>
  <div id="taskForm">
    <label for="taskTitle">Task Title:</label>
    <input type="text" id="taskTitleInput" for="taskTitle">
    <label for="taskDescription">Description:</label>
    <textarea id="taskDescription" for="taskDescription" rows="5"></textarea>
    <label for="dueDate">Due date:</label>
    <input type="date" for="dueDate" id="dueDate">
    <div id="btnTaskWrapper">
      <button class="blueBtn btnTask" id="addTaskBtn">Add Task</button>
      <button class="redBtn btnTask" id="cancelTaskBtn">Cancel</button>
    </div>
  </div>
`;

export default TaskForm;