document.addEventListener("DOMContentLoaded", () => {
  //Functionallity for "create new Text" Button
  const newTask = (event) => {
    event.preventDefault()

    //create toDoItem
    const newToDo = document.createElement("li")
    newToDo.textContent = document.getElementById("new-task-description").value
    
    //add remove Button
    const removeButton = document.createElement("button")
    removeButton.textContent = "X"
    removeButton.addEventListener("click", () => {
      newToDo.remove()
    })
    newToDo.append(removeButton)

    const toDoList = document.getElementById("tasks")
    toDoList.append(newToDo)
    
  }
  
  const taskSubmit = document.getElementById("create-task-form")
  taskSubmit.addEventListener("submit", newTask)

});