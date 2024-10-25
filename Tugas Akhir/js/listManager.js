let items = ["Item 1", "Item 2", "Item 3"];
let list = document.getElementById("itemList");

items.forEach(function (item) {
  let li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});
