var newtask = document.querySelector("#input");
var submit = document.querySelector("#submit");
var incomplete = document.querySelector("#incompletetask");
var complete = document.querySelector("#completetask");
var createnewtask = function (task) {
  console.log("creatingtask");
  var listitem = document.createElement("li");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");
  label.innerText = task;
  checkbox.type = "checkbox";
  listitem.appendChild(checkbox);
  listitem.appendChild(label);
  return listitem;
};
var addtask = function () {
  console.log("addingtask");
  var listitem;
  if(newtask.value !== "")
    listitem = createnewtask(newtask.value);
  incomplete.appendChild(listitem);
  newtask.value = "";

  bindincompleteitems(listitem, completetask);
};
var completetask = function () {
  var listitem = this.parentNode;
  var deletebutton = document.createElement("button");
  deletebutton.innerText = "delete";
  deletebutton.className = "btn btn-danger delete";
  listitem.appendChild(deletebutton);
  var checkbox = listitem.querySelector("input[type=checkbox]");
  checkbox.remove();
  listitem.className = "completedItem";
  complete.appendChild(listitem);
  bindcompleteitems(listitem, deletetask);
}
var deletetask = function () {
  console.log("deleteingtask");
  var listitem = this.parentNode;
  var ul = listitem.parentNode;
  ul.removeChild(listitem);
}
var bindincompleteitems = function (taskitem, checkboxclick) {
  console.log("building incompletelist");
  var checkbox = taskitem.querySelector("input[type=checkbox]");
  checkbox.onchange = checkboxclick;
}
var bindcompleteitems = function (taskitem, deletebuttonpress) {
  console.log("binding the completelist");
  var deletebutton = taskitem.querySelector(".delete");
  deletebutton.onclick = deletebuttonpress;
}
for(var i = 0; i< incomplete.children.length; i++){
    bindincompleteitems(incomplete.children[i],completetask);
}
for(var i = 0; i< complete.children.length; i++){
    bindcompleteitems(complete.children[i],deletetask);
}
submit.addEventListener("click",addtask);


