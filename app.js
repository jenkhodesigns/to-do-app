/*function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = newToDoText.value;      //get the text

    let newLi = document.createElement("li");      //create a new li

    let checkbox = document.createElement("input");      //create a new input

    let deletebutton = document.createElement("button");      //create delete button
    deletebutton.textContent = "Delete";

    deletebutton.addEventListener("click", function(event) {
      toDoList.removeChild(this.parentElement);
    });

    checkbox.type = "checkbox";      //set the input's type to checkbox

    newLi.textContent = title;      //set the title

    newLi.appendChild(checkbox);      //attach the checkbox to the li

    newLi.appendChild(deletebutton);

    toDoList.appendChild(newLi);      //attach the li to the ul

    newToDoText.value = "";    //empty the input

  });
};
*/
function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  let toDos = [];
  let id = 0;

  function renderTheUI() {
    const toDoList = document.getElementById("toDoList");
    toDoList.textContent = "";

    toDos.forEach(function(toDo) {
      const newLi = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const deletebutton = document.createElement("button");
      deletebutton.textContent = "Delete!";

      deletebutton.addEventListener("click", event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        });
        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deletebutton);
    });
  };

  function createNewToDo() {
    console.log("hello");
    const newToDoText = document.getElementById("newToDoText");
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;

    console.log(toDos);

    newToDoText.value = "";
    id.value = "";
    renderTheUI();
  }

  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
};

window.onload = function() {
  onReady();
};
