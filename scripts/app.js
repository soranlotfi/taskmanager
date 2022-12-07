
let taskName=document.getElementById("taskName")
let taskStart=document.getElementById("taskStart")
let taskEnd=document.getElementById("taskEnd")
let taskInfo=document.getElementById("taskInfo")
let taskSubmitBtn=document.getElementById("taskSubmit")
let taskClearBtn=document.getElementById("taskClear")

function createTask(){
    var taskBoxContainer=document.querySelector(".footer")
    var taskBox = document.createElement("div")
    taskBox.classList.add('task')
    var title=document.createElement('h3')
    title.innerHTML=taskName.value;
    var time=document.createElement("h4")
    time.innerHTML="ساعت : " + taskStart.value + " " + "الی  " + taskEnd.value;
    var caption = document.createElement('p')
    caption.innerHTML=taskInfo.value;
    var btn = document.createElement('button')
    btn.innerText="hello";
    taskBox.appendChild(title)
    taskBox.appendChild(time)
    taskBox.appendChild(caption)
    taskBox.appendChild(btn)
    taskBoxContainer.appendChild(taskBox)
    btn.addEventListener('click',()=>{
        taskBox.style.display="none"
    })
}


function getData(){
    if(taskName.value=="" || taskStart.value=="" ||taskEnd.value==""){
        alert("لطفا مقادیر خواسته شده را وارد کنید")
    }
    else{ 
   createTask()
    }
}

taskSubmitBtn.addEventListener("click",getData);


