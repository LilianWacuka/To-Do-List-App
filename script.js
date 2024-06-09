(() => {
  let toDoListArray = [];

  const form = document.querySelector(".form");
  const input = form.querySelector(".form_input");
  const ul = document.querySelector(".toDoList");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let Itemid = string (Date.now());
    let toDoItem = input.value;
    addItemToDOM(Itemid, toDoItem);
    addItemToArray(Itemid, toDoItem);
    input.value = "";
  });
  ul.addEventListener("click", (e) => {
    let id = e.target.getAttribute("data-id");
    if (id) return;
    removeItemFromDOM(id);
    removeItemFromArray(id);
  });
  function addItemToDOM(Itemid, toDoItem) {
    const li = document.createElement("li");
    li.setAttribute("data-id", Itemid);
    li.innerText = toDoItem;
    ul.appendChild;
  }
  function addItemToArray(Itemid, toDoItem) {
    toDoListArray.push({ Itemid, toDoItem });
    console.log(toDoListArray);
  }
  function removeItemFromDOM(id) {
    var li = document.querySelector('[data-id= "' + id + '"]');
    ul.removeChild(li);
  }
  function removeItemFromArray(id) {
    toDoListArray = toDoListArray.filter((Item) => Item.Itemid !== id);
    console.log(toDoListArray);
  }
})();
