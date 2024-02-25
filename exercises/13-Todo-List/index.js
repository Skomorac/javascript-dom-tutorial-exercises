document.addEventListener("DOMContentLoaded", function () {
  const addToDoInput = document.getElementById("addToDo");
  const toDoList = document.querySelector("ul");

  // Add task
  function addTask() {
    const taskText = addToDoInput.value.trim();

    if (taskText !== "") {
      const newTask = document.createElement("li");
      newTask.innerHTML = `<span class="delete"><i class="fa fa-trash"></i></span> ${taskText}`;
      toDoList.appendChild(newTask);
      addToDoInput.value = "";
    }
  }

  // Delete task
  function deleteTask(event) {
    if (event.target.classList.contains("fa-trash")) {
      const taskItem = event.target.closest("li");
      taskItem.remove();
    }
  }

  // Event listener for adding tasks on Enter key press
  addToDoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Event delegation for deleting tasks on trash icon click
  toDoList.addEventListener("click", deleteTask);
});
