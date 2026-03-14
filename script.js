function addTask(){

let input=document.getElementById("taskInput");
let task=input.value.trim();

if(task==="") return;

let li=document.createElement("li");

let span=document.createElement("span");
span.textContent=task;

span.onclick=function(){
span.classList.toggle("completed");
}

let del=document.createElement("button");
del.textContent="X";
del.className="delete";

del.onclick=function(){
li.remove();
}

li.appendChild(span);
li.appendChild(del);

document.getElementById("taskList").appendChild(li);

input.value="";
}
