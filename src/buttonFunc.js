import {
  lastClicked,
  populateMainDiv,
  pullUpItemForm,
  pullUpListForm,
} from "./domChanges";
import { addNewItem, addNewList } from "./domChanges";
import { getProjectList, removeItem, removeList } from "./listInteractions";

let addFuncToButtons = () => {
  document
    .getElementById("returnHome")
    .addEventListener("click", populateMainDiv);

  document
    .getElementById("newListButton")
    .addEventListener("click", pullUpListForm);
  document
    .getElementById("newListSubmit")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
  document
    .getElementById("newListSubmit")
    .addEventListener("click", addNewList);

  document
    .getElementById("newItemButton")
    .addEventListener("click", pullUpItemForm);
  document
    .getElementById("newItemSubmit")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
  document
    .getElementById("newItemSubmit")
    .addEventListener("click", addNewItem);
};

let addRemoveFunc = () => {
  let removeButtons = document.getElementsByClassName("removeButton");

  for (let i = 0; i < removeButtons.length; i++) {
    let getRemoveFunc = () => {
      return removeList(`${removeButtons[i].id.slice(0, -6)}`);
    };

    removeButtons[i].addEventListener("click", getRemoveFunc);
  }
};

let addRemoveItemFunc = () => {
  let removeItemButtons = document.getElementsByClassName("removeItem");

  for (let i = 0; i < removeItemButtons.length; i++) {
    let getRemoveItem = () => {
      return removeItem(removeItemButtons[i].id);
    };
    removeItemButtons[i].addEventListener("click", getRemoveItem);
  }
};

export { addFuncToButtons, addRemoveFunc, addRemoveItemFunc };
