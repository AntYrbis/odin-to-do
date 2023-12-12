import * as UI from './Modules/domLogic.js';
import * as Logic from './Modules/logic.js';
import { createAProject } from './Modules/projects.js';
import { createATask } from './Modules/Task.js';

let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");

let form = document.getElementById("form");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

function changeTab(newTab){
  switch (newTab) {
      case 'My ToDo App':
        UI.renderHome();
        break;
      case "Today's ToDos":
        UI.renderMenu();
        break;
      case 'My Projects':
        UI.renderAbout();
        break;
      case 'All ToDos':
        UI.renderAbout();
        break;
  }
}
document.addEventListener("click", (e) => {
  console.log("Clicked on:", e.target);
  const target = e.target.innerText;
  if(target == 'My ToDo App' || target == "Today's ToDos" || target == 'My Projects' || target == 'All ToDos'){
    changeTab(target);
  }
});

function createTask(){
  const task = createATask(title, description, dueDate, priority, notes , done);
  Logic.addTaskToTasks(task);
}

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener("click", (e) => {
    console.log("Clicked on:", e.target);
    const target = e.target.innerText;
    if(target == 'My ToDo App' || target == "Today's ToDos" || target == 'My Projects' || target == 'All ToDos'){
      changeTab(target);
    }
  });
  form.addEventListener("submit", (e) => {
      e.preventDefault();
  });
});

export { };