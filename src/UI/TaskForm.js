const TaskForm = document.createElement('div');
TaskForm.id = "taskFormWrapper";

TaskForm.innerHTML = `
  <form id="taskForm">
    <label for="taskTitle">Task Title:</label>
    <input type="text" id="taskTitleInput" for="taskTitle">
    <label for="taskDescription">Description:</label>
    <textarea id="taskDescription" for="taskDescription"></textarea>
    <label for="dueDate">Due date:</label>
    <input type="date" for="dueDate">
  </form>
`;

export default TaskForm;