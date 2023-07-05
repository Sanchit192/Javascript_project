function toggleNav() {
    var sideNavWidth = document.getElementById("mySidenav").style.width;
    if (sideNavWidth === "250px") {
      closeNav();
    } else {
      openNav();
    }
  }
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  function display(){
    document.getElementById("up").style.display="block";
  }
  function display2(){
    document.getElementById("t1").style.display="block";
  }
//       function addTask() {
//   // Get the input value
//   var itemInput = document.getElementById("taskInput");
//   var itemText = itemInput.value;

//   // Check if the input is not empty
//   if (itemText.trim() !== "") {
//     // Create a new list item
//     var newItem = document.createElement("div");
//     newItem.className = "list-item";

//     // Create a checkbox
//     var checkbox = document.createElement("input");
//     checkbox.type = "checkbox";

//     checkbox.addEventListener("change", removeItem);
//     newItem.appendChild(checkbox);

//     // Create a label for the item
//     var label = document.createElement("label");
//     label.textContent = itemText;
//     newItem.appendChild(label);

//     // Add the new item to the list
//     var list = document.getElementById("taskList");
//     list.appendChild(newItem);

//     // Clear the input
//     itemInput.value = "";
//   }

// }
// function removeItem(event) {
//   var checkbox = event.target;
//   var listItem = checkbox.parentNode;
//   listItem.remove();
// }
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    var li = document.createElement("li");
    li.className = "list-group-item task-item";
    
    var taskText = document.createElement("div");
    taskText.className = "task-text h5";
    taskText.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(taskText);
    
    var taskActions = document.createElement("div");
    taskActions.className = "task-actions mt-3";
    
    var removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger me-3";
    removeBtn.appendChild(document.createTextNode("Remove"));
    removeBtn.addEventListener("click", function() {
      li.remove();
    });
    taskActions.appendChild(removeBtn);
    
    var doneBtn = document.createElement("button");
    doneBtn.className = "btn btn-success me-3";
    doneBtn.appendChild(document.createTextNode("Done"));
    doneBtn.addEventListener("click", function() {
      taskText.classList.toggle("text-decoration-line-through");
    });
    taskActions.appendChild(doneBtn);
    
    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-secondary me-3";
    editBtn.appendChild(document.createTextNode("Edit"));
    editBtn.addEventListener("click", function() {
      var newText = prompt("Edit task:", taskText.innerText);
      if (newText !== null) {
        taskText.innerText = newText;
      }
    });
    taskActions.appendChild(editBtn);
    
    li.appendChild(taskActions);
    
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function addTask1() {
  var taskInput = document.getElementById("taskInput1");
  var taskList = document.getElementById("taskList1");

  if (taskInput.value !== "") {
    var li = document.createElement("li");
    li.className = "list-group-item task-item";
    
    var taskText = document.createElement("div");
    taskText.className = "task-text h5";
    taskText.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(taskText);
    
    var taskActions = document.createElement("div");
    taskActions.className = "task-actions mt-3";
    
    var removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger me-3";
    removeBtn.appendChild(document.createTextNode("Remove"));
    removeBtn.addEventListener("click", function() {
      li.remove();
    });
    taskActions.appendChild(removeBtn);
    
    var doneBtn = document.createElement("button");
    doneBtn.className = "btn btn-success me-3";
    doneBtn.appendChild(document.createTextNode("Done"));
    doneBtn.addEventListener("click", function() {
      taskText.classList.toggle("text-decoration-line-through");
    });
    taskActions.appendChild(doneBtn);
    
    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-secondary me-3";
    editBtn.appendChild(document.createTextNode("Edit"));
    editBtn.addEventListener("click", function() {
      var newText = prompt("Edit task:", taskText.innerText);
      if (newText !== null) {
        taskText.innerText = newText;
      }
    });
    taskActions.appendChild(editBtn);
    
    li.appendChild(taskActions);
    
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
