let input_task_field = document.getElementById("input_task");
let entered_tasks = document.getElementById("entered_tasks");
function getInput_Data() {
  if (input_task_field.value.trim() != "") {
    entered_tasks.innerHTML += ` 
      <ul>
        <li class="data_saved_in_local_storage" >${input_task_field.value}</li>
        <div class="task-icons">
          <span class="material-symbols-outlined edit-icon" id="edit" onclick = "edit_Task(this)" >edit_square</span>
          <span class="material-symbols-outlined delete-icon" onclick="delete_Task(this)">delete</span>
        </div>
      </ul>
    `;
    input_task_field.value = "";

    localStorage.setItem("data", input_task_field.value);
  } else {
    Swal.fire({
      icon: "error",
      title: "Task Should not be empty...",
    });
  }
}

// Save this data to the local storage {

// Function to delete a task
function delete_Task(a) {
  let task = a.closest("ul");
  task.remove();
}

// Function to edit a task:

function edit_Task(span) {
  console.log(span);
  ulElem = span.closest("ul");
  let liElement = span.closest("ul").querySelector("li");

  input_task_field.value = liElement.innerText;
  ulElem.remove();
  // Clear the input field after editing

  // Display a warning message using SweetAlert2
  Swal.fire({
    icon: "warning",
    title: "Please remember to save your edited task.",
  });
}

// Apply Sortable Feature in this JS

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Sortable on each column
  new Sortable(document.getElementById("entered_tasks"), {
    group: "kanban-list",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
  });

  new Sortable(document.getElementById("doing_tasks"), {
    group: "kanban-list",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
  });

  new Sortable(document.getElementById("done_tasks"), {
    group: "kanban-list",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
  });
});
