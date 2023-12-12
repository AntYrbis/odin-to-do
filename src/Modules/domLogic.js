
function showTaskInTasks(){
    console.log("Show Tasks");
}

function showTaskInProject(){
    console.log("Show Project");
}


const container = document.getElementById("task-container");
// Placeholder functions
function renderHome() {
    container.innerHTML = "";
    container.innerHTML = "<h2>Home Tab Content</h2>";
}

function renderMenu() {
    container.innerHTML = "";
    container.innerHTML = "<h2>Menu Tab Content</h2>";
}

function renderAbout() {
    container.innerHTML = "";
    container.innerHTML = "<h2>About Tab Content</h2>";
}


export {showTaskInProject, showTaskInTasks, renderAbout, renderHome, renderMenu};