var taskName = document.getElementById("taskName");
var taskStart = document.getElementById("taskStart");
var taskEnd = document.getElementById("taskEnd");
var taskInfo = document.getElementById("taskInfo");
var taskSubmitBtn = document.getElementById("taskSubmit");
var taskClearBtn = document.getElementById("taskClear");
var modalBar = document.getElementById("modal-bar");
var Moverlay = document.getElementById("deleteOverlay");
var deletYesBtn = document.getElementById("modal-btn-yes");
var deletNoBtn = document.getElementById("modal-btn-no");
var editOverlay = document.getElementById("editOverlay");
var taskEditName = document.getElementById("taskReName");
var taskEditStart = document.getElementById("taskReStart");
var taskEditEnd = document.getElementById("taskReEnd");
var taskEditInfo = document.getElementById("taskReInfo");
var taskEditYesBtn = document.getElementById("taskEdit");
var taskEditNoBtn = document.getElementById("editCancel");
var timeOut;
var taskBoxContainer;
var taskBox;
var title;
var time;
var caption;
var taskDeleteBtn;
var taskEditBtn;
var taskBtnContain;

function clear() {
  taskName.value = "";
  taskStart.value = "";
  taskEnd.value = "";
  taskInfo.value = "";
}

function editClear() {
  taskEditName.value = "";
  taskEditStart.value = "";
  taskEditEnd.value = "";
  taskEditInfo.value = "";
}

var editConfirm = () => {
  if (taskEditName.value == "") {
    alert("لطفا اسم فعالیت (اجباری) و بقیه ی اطلاعات را وارد کنید (اختیاری)");
  } else {
    title.innerHTML = taskEditName.value;
    time.innerHTML =
      "ساعت : " + taskEditStart.value + " " + "الی  " + taskEditEnd.value;
    caption.innerHTML = taskEditInfo.value;
    editOverlay.style.scale = 0;
    editClear();
  }
};

var editModal = () => {
  editOverlay.style.scale = 1;
  taskEditYesBtn.addEventListener("click", editConfirm);
  taskEditNoBtn.addEventListener("click", () => {
    editOverlay.style.scale = "0";
  });
};

// this method makes the task using the values of the inputs that user entered
function createTask() {
  taskBoxContainer = document.querySelector(".footer");
  taskBox = document.createElement("div");
  taskBox.classList.add("task");
  title = document.createElement("h3");
  title.innerHTML = taskName.value;
  time = document.createElement("h4");
  time.innerHTML = "ساعت : " + taskStart.value + " " + "الی  " + taskEnd.value;
  caption = document.createElement("p");
  caption.innerText = taskInfo.value;
  //a button to delete the tasks
  taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.innerText = "حذف یادداشت";
  taskDeleteBtn.classList.add("dltBtn", "taskBtn");
  //   button to edit tasks
  taskEditBtn = document.createElement("button");
  taskEditBtn.innerText = "ویرایش";
  taskEditBtn.classList.add("edtBtn", "taskBtn");
  //   a div to contain the task buttons
  taskBtnContainer = document.createElement("div");
  taskBtnContainer.classList.add("taskBtns");
  taskBtnContainer.appendChild(taskEditBtn);
  taskBtnContainer.appendChild(taskDeleteBtn);
  taskBox.appendChild(title);
  taskBox.appendChild(time);
  taskBox.appendChild(caption);
  taskBox.appendChild(taskBtnContainer);
  taskBoxContainer.appendChild(taskBox); //making the taskbox
  clear(); // ======> a function to clear inputs after making rhe task
  //   a function to close the delete modal
  var close = () => {
    Moverlay.style.scale = "0";
    modalBar.classList.remove("modalAnimation");
  };

  taskEditBtn.addEventListener("click", editModal);

  // ======>delete confirm btn => opens a modal for user to confirm the form delete
  taskDeleteBtn.addEventListener("click", () => {
    timeOut = setTimeout(close, 5050);
    Moverlay.style.scale = "1";
    modalBar.classList.add("modalAnimation");

    deletYesBtn.addEventListener("click", () => {
      Moverlay.style.scale = "0";
      taskBoxContainer.removeChild(taskBox);
      modalBar.classList.remove("modalAnimation");
    });

    deletNoBtn.addEventListener("click", () => {
      clearTimeout(timeOut);
      Moverlay.style.scale = "0";
      modalBar.classList.remove("modalAnimation");
    });
  });
}

function getData() {
  if (taskName.value == "") {
    alert("وارد کردن نام فعالیت اجباری می باشد");
  } else {
    createTask();
  }
}

taskSubmitBtn.addEventListener("click", getData);
taskClearBtn.addEventListener("click", clear);

var head = document.getElementById("head");
var link;
var switchBtn = document.getElementById("dark");
// var white = document.getElementById("white");

switchBtn.addEventListener("click", function switchM (event)  {
  event.target.
  if (switchBtn.id == "dark") {
    link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles/dark.css";
    link.type = "text/css";
    head.appendChild(link);
    switchBtn.id = "white";
    switchBtn.classList.add("dark-btn");
    switchBtn.innerHTML = "Light";
  } else {
    head.removeChild(link);
    switchBtn.id = "dark";
    switchBtn.innerHTML = "Dark";
  }
});
