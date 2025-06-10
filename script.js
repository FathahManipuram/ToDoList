const input=document.querySelector(".input-wraper input");
const btn = document.querySelector(".input-wraper button");
const taskContainer= document.querySelector(".task-container")

function addTask(value){
	if(value.trim()==""){
		alert("Add your task")
	}else{
	let li= document.createElement("li");
	li.textContent= value;
	taskContainer.appendChild(li);
	let span= document.createElement("span");
	span.innerHTML= "\u00d7";
	li.appendChild(span);

	
	input.value=""
	input.focus()
	saveData();
	}
	
}

btn.addEventListener("click", ()=>{
	addTask(input.value)
});

taskContainer.addEventListener("click", function(event){
	if(event.target.tagName=="LI"){	
		event.target.classList.toggle("checked")
		saveData()
	}else if(event.target.tagName==="SPAN"){
		event.target.parentElement.remove()
		saveData()
	}	
})
function saveData(){
	localStorage.setItem("data",taskContainer.innerHTML)	
}
function getdata(){
	taskContainer.innerHTML= localStorage.getItem('data')
}
getdata()