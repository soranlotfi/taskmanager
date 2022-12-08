let taskName = document.getElementById("taskName");
let taskStart = document.getElementById("taskStart");
let taskEnd = document.getElementById("taskEnd");
let taskInfo = document.getElementById("taskInfo");
let taskSubmitBtn = document.getElementById("taskSubmit");
let taskClearBtn = document.getElementById("taskClear");
let modalBar = document.getElementById("modal-bar");
let Moverlay = document.getElementById("overlay");
var deletYesBtn = document.getElementById("modal-btn-yes");
var deletNoBtn = document.getElementById("modal-btn-no");
var timeOut;

function clear() {
//   taskName.value = "";
//   taskStart.value = "";
//   taskEnd.value = "";
//   taskInfo.value = "";
}

// this method makes the task using the values of the inputs that user entered
function createTask() {
  var taskBoxContainer = document.querySelector(".footer");
  var taskBox = document.createElement("div");
  taskBox.classList.add("task");
  var title = document.createElement("h3");
  title.innerHTML = taskName.value;
  var time = document.createElement("h4");
  time.innerHTML = "ساعت : " + taskStart.value + " " + "الی  " + taskEnd.value;
  var caption = document.createElement("p");
  caption.innerHTML = taskInfo.value;
  var deleteBtn = document.createElement("button"); //a button to delete the boxes
  deleteBtn.innerText = "حذف یادداشت";
  deleteBtn.classList.add("dltBtn");
  taskBox.appendChild(title);
  taskBox.appendChild(time);
  taskBox.appendChild(caption);
  taskBox.appendChild(deleteBtn);
  taskBoxContainer.appendChild(taskBox); //making the taskbox
  clear(); // ======> a function to clear inputs after making rhe task
  var close = () => {
    Moverlay.style.scale = "0";
    modalBar.classList.remove("modalAnimation");
  };

  // ======>delete confirm btn => opens a modal for user to confirm the form delete
  deleteBtn.addEventListener("click", () => {
     timeOut = setTimeout(close, 5000);
    Moverlay.style.scale = "1";
    modalBar.classList.add("modalAnimation");
  });
  deletYesBtn.addEventListener("click", () => {
    Moverlay.style.scale = "0";
    taskBox.style.display = "none";
    modalBar.classList.remove("modalAnimation");
  });

  deletNoBtn.addEventListener("click", () => {
    clearTimeout(timeOut);
    Moverlay.style.scale = "0";
    modalBar.classList.remove("modalAnimation");
  });
}

function getData() {
  //     if(taskName.value==""){
  //         alert("وارد کردن نام فعالیت اجباری می باشد")
  //     }
  //     else{
  //    createTask()
  //     }
  createTask();
}

taskSubmitBtn.addEventListener("click", getData);
taskClearBtn.addEventListener("click", clear);
