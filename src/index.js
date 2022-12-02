document.addEventListener("DOMContentLoaded", () => {
  // your code here 
  let form = document.querySelector("form")
  form.addEventListener("submit", (event)=>{
      e.preventDefault()//prevents loading of the page
      handleToDo(event.target.newTaskDescription.value)
      form.reset()
  })
});
//Function to create our to do list
function handleToDo(todo){
 
  //adding elements
  //Adding a list element
 let li = document.createElement("li")
 //Adding a delete button
 let btn = document.createElement("button") 
 //Listening to the event when the delete button is clicked
 btn.addEventListener("click", handleDelete)
 //Assigning values to our delete button
 btn.textContent= "J"
 // Assigning text to the element
 li.textContent = `${todo}`
 // the button must be appendend to the list
 li.appendChild(btn)
 //document.querySelector("#tasks").appendChild(li)
 document.getElementById("tasks").appendChild(li)
}
//creating a function that deletes done todo list items
 function handleDelete(event){
  event.target.parentNode.remove()
 }