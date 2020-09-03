function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;
    //create a new li
    let newLi = document.createElement("li");
    //create a new input
    let checkbox = document.createElement("input");
    //create delete button
    let deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";

    deletebutton.addEventListener("click", function(event) {
      toDoList.removeChild(this.parentElement);
    });

    //set the input's type to checkbox
    checkbox.type = "checkbox";
    //set the title
    newLi.textContent = title;
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    newLi.appendChild(deletebutton);
    //attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = "";

  });
};

window.onload = function() {
  onReady();
};
