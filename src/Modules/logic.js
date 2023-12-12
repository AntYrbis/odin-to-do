import { createAProject } from "./projects";
import { createATask } from './Task.js';

let Tasks = [];

function addTaskToTasks(task){
    Tasks.push(task);
    console.log("Adding : ");
    console.log(task.info());
}

export { addTaskToTasks };