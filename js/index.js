let inputBox = document.querySelector(".input-area input");
let addBtn = document.querySelector(".input-area button");
let taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", () => {
	let inputBoxValue = inputBox.value;
	if (inputBoxValue == "") {
		alert("You must write something");
	} else {
		var li = document.createElement("li");
		li.textContent = `${inputBoxValue}`;
		taskList.appendChild(li);
		var span = document.createElement("span");
		span.textContent = "\u2716";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveTasks();
});

taskList.addEventListener(
	"click",
	e => {
		if (e.target.tagName == "LI") {
			e.target.classList.toggle("checked");
			saveTasks();
		} else if (e.target.tagName == "SPAN") {
			e.target.parentElement.remove();
			saveTasks();
		}
	},
	false
);

const saveTasks = () => {
	localStorage.setItem("tasks", taskList.innerHTML);
};

const showTasksList = () => {
	taskList.innerHTML = localStorage.getItem("tasks");
};

showTasksList();
