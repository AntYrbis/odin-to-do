class project{
    constructor(name, description, tasks = []){
        this.name = name;
        this.description = description;
        this.tasks = tasks;
    }

    // Getter methods
    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getTasks() {
        return this.tasks;
    }

    // Setter methods (if needed)
    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    // Methods to manage tasks
    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
        this.tasks.splice(index, 1);
        }
    }

    //other methods
    createAProject(name, description, tasks){
        this.setName(name);
        this.setDescription(description);
        this.setTasks(tasks);
    }
}

export {project};