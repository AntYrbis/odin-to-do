class task {
    constructor(title, description, dueDate, priority, notes = '', done) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.done = done;
      this.info = function () {
        str = this.title + ", " + this.description ;
        if (this.done) {
            str += ", done\n";
        }
        else {
            str += ", not done yet\n";
        }
        return str;
    };
    }
  
    // Getter methods
    getTitle() {
      return this.title;
    }
  
    getDescription() {
      return this.description;
    }
  
    getDueDate() {
      return this.dueDate;
    }
  
    getPriority() {
      return this.priority;
    }
  
    getNotes() {
      return this.notes;
    }
  
    getDone() {
      return this.done;
    }
  
    // Setter methods (if needed)
    setTitle(title) {
      this.title = title;
    }
  
    setDescription(description) {
      this.description = description;
    }
  
    setDueDate(dueDate) {
      this.dueDate = dueDate;
    }
  
    setPriority(priority) {
      this.priority = priority;
    }
  
    setNotes(notes) {
      this.notes = notes;
    }
  
    setDone(done) {
      this.done = done;
    }

    //other methods
    createATask(title, description, dueDate, priority, notes , done){
      this.setTitle(title);
      this.setDescription(description);
      this.setDueDate(dueDate);
      this.setPriority(priority);
      this.setNotes(notes);
      this.setDone(done);
    }
}

export {task};