import { addRemoveItemFunc } from "./buttonFunc";
import {
  addToProjectList,
  getProjectList,
  myCreateObject,
  myCreateList,
  removeList,
  removeItem,
} from "./listInteractions";

let lastClicked;

let addNewItem = () => {
  let newItemTitle = document.getElementById("newItem").value;
  let newItemDesc = document.getElementById("newItemDesc").value;
  let newItemDue = document.getElementById("newItemDue").value;
  let newItemPriority = document.getElementById("newItemPriority").value;

  let list = getProjectList();

  let currentList;

  let myFormatDate = (dateStr) => {
    let dateArr = dateStr.split("-");
    let dateYear = dateArr[0];
    let dateMonth = dateArr[1];
    let dateDay = dateArr[2];

    let formattedDate = `${dateMonth}/${dateDay}/${dateYear}`;

    return formattedDate;
  };

  let setPriorityLevel = (numStr) => {
    let priorityLevel;

    if (numStr == "1") {
      priorityLevel = "Low";
    } else if (numStr == "2") {
      priorityLevel = "Medium";
    } else {
      priorityLevel = "High";
    }
    return priorityLevel;
  };

  let newItemDueFormatted = myFormatDate(newItemDue);
  let newItemPriorityFormatted = setPriorityLevel(newItemPriority);

  for (let i = 0; i < list.length; i++) {
    if (`${list[i].name}Div` == lastClicked) {
      currentList = list[i];
    }
  }

  let validObject = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "") {
        return false;
      }
    }
    return true;
  };

  if (
    validObject([
      newItemTitle,
      newItemDesc,
      newItemDueFormatted,
      newItemPriorityFormatted,
    ])
  ) {
    for (let x = 0; x < currentList.content.length; x++) {
      if (currentList.content[x].title == newItemTitle) {
        removeItem(`${currentList.content[x].title}remove`);
      }
    }
    currentList.content.push(
      myCreateObject(
        newItemTitle,
        newItemDesc,
        newItemDueFormatted,
        newItemPriorityFormatted
      )
    );
  }
  populateListInfo(currentList);
  clearForm();
};

let addNewList = () => {
  let name = document.getElementById("listName").value;

  if (name != "") {
    addToProjectList(myCreateList(name));
  }

  populateMainDiv();
  clearForm();
};

let clearForm = () => {
  document.getElementById("newListForm").reset();
  document.getElementById("newItemForm").reset();
};

let addToClicked = (id) => {
  lastClicked = id;
};

let createListItemDiv = (item) => {
  let itemDivContainer = document.createElement("div");

  let itemDiv = document.createElement("div");

  itemDivContainer.insertAdjacentElement("beforeend", itemDiv);

  itemDivContainer.setAttribute("class", `itemDivContainer`);

  let getPopFunc = () => {
    return populateListInfo(item);
  };

  let getClickedFunc = () => {
    return addToClicked(`${item.name}Div`);
  };

  itemDiv.setAttribute("class", "itemDiv");
  itemDiv.setAttribute("id", `${item.name}Div`);
  itemDiv.addEventListener("click", getPopFunc);
  itemDiv.addEventListener("click", getClickedFunc);

  //   itemDiv.innerText = `${item.name}`;

  //   let nameDiv = document.createElement("div");
  //   let removeButton = document.createElement("button");

  //   removeButton.setAttribute("id", `${item.name}remove`);

  //   nameDiv.innerText = `${item.name}`;
  //   removeButton.innerText = "remove";

  //   itemDiv.insertAdjacentText("beforeend", nameDiv);
  //   itemDiv.insertAdjacentText("beforeend", removeButton);

  itemDiv.insertAdjacentHTML(
    "beforeend",
    `<div>${item.name}</div>
       `
  );

  itemDiv.insertAdjacentHTML(
    "afterend",
    `<button id="${item.name}remove" class='removeButton'>remove</button>`
  );

  let getRemoveFunc = () => {
    return removeList(item.name);
  };

  //   document
  //     .getElementById(`${item.name}remove`)
  //     .addEventListener("click", getRemoveFunc);

  return itemDivContainer;
};

let closeDescDiv = () => {
  document.getElementById("itemDescription").innerText = "";
  document.getElementById("itemDescription").style.display = "none";
};

let populateItemDesc = (item) => {
  let completed;

  let editItem = () => {
    document.getElementById("itemDescription").innerText = "";
    document.getElementById("itemDescription").style.display = "none";
    document.getElementById("mainDiv").style.display = "none";
    document.getElementById("newItemForm").style.display = "block";

    document.getElementById("newItem").value = `${item.title}`;
    document.getElementById("newItemDesc").value = `${item.desc}`;
  };

  if (item.completed == true) {
    completed = "Done";
    document.getElementById(
      "itemDescription"
    ).style.backgroundColor = `#3cfa68`;
  } else {
    completed = "Not Done";
    document.getElementById(
      "itemDescription"
    ).style.backgroundColor = `#ff5757`;
  }

  document.getElementById("itemDescription").innerText = "";
  document.getElementById("itemDescription").style.display = "flex";

  document.getElementById("itemDescription").insertAdjacentHTML(
    "beforeend",
    `<div>
    <button id="${item}Edit">Edit</button>
    <button id="${item}CloseButton">close</button>
    </div> 
      `
  );

  document
    .getElementById("itemDescription")
    .insertAdjacentHTML(
      "beforeend",
      `<div> Title: ${item.title} <span style="text-decoration: underline; margin-left: 30px"> Priority: ${item.priority} </span> <span style="margin-left: 30px">${completed}</span>  </div>`
    );
  document
    .getElementById("itemDescription")
    .insertAdjacentHTML(
      "beforeend",
      `<div style="text-align: center"> <div>Description:</div>  <br> ${item.desc}</div>`
    );

  document
    .getElementById(`${item}CloseButton`)
    .addEventListener("click", closeDescDiv);

  document.getElementById(`${item}Edit`).addEventListener("click", editItem);
};

let createToDoItemDiv = (item) => {
  let toDoDivContainer = document.createElement("div");
  let toDoDiv = document.createElement("div");

  let priorityColor;

  if (item.priority == "High") {
    priorityColor = "red";
  } else if (item.priority == "Medium") {
    priorityColor = "orange";
  } else {
    priorityColor = "green";
  }

  toDoDiv.style.borderColor = priorityColor;
  toDoDiv.style.borderWidth = "3px";
  toDoDiv.style.marginRight = "5px";

  toDoDivContainer.setAttribute("class", "toDoDivContainers");
  toDoDivContainer.insertAdjacentElement("beforeend", toDoDiv);

  let getPopDescFunc = () => {
    return populateItemDesc(item);
  };

  toDoDiv.insertAdjacentHTML(
    "beforeend",
    `<div class="itemInfo" style="font-size: 26px">${item.title}</div>
                         <div class="itemInfo" style="font-size: 14px">${item.dueDate}</div>
                         <input type="checkbox" id="${item.title}Check">`
  );

  toDoDivContainer.insertAdjacentHTML(
    "beforeend",
    `<button class="removeItem" id="${item.title}Remove">Remove</button>`
  );

  toDoDiv.setAttribute("class", "itemDiv");
  toDoDiv.setAttribute("id", `${item.title}Div`);
  toDoDiv.addEventListener("click", getPopDescFunc);

  return toDoDivContainer;
};

let insertListItemDiv = (item) => {
  document
    .getElementById("mainDiv")
    .insertAdjacentElement("beforeend", createListItemDiv(item));
};

let insertToDoDiv = (item) => {
  document
    .getElementById("mainDiv")
    .insertAdjacentElement("beforeend", createToDoItemDiv(item));
};

let populateListInfo = (list) => {
  document.getElementById("newItemButton").style.display = "block";
  document.getElementById("newListButton").style.display = "none";
  document.getElementById("newItemForm").style.display = "none";
  document.getElementById("mainDiv").style.display = "block";

  document.getElementById("mainDiv").innerText = "";

  let listItems = list.content;

  for (let i = 0; i < listItems.length; i++) {
    createToDoItemDiv(listItems[i]);
    insertToDoDiv(listItems[i]);
  }

  for (let i = 0; i < listItems.length; i++) {
    let completeItem = (id) => {
      if (
        document.getElementById(`${listItems[i].title}Check`).checked == true
      ) {
        document.getElementById(id).style.textDecoration = "Line-through";
        listItems[i].completed = true;
        populateItemDesc(listItems[i]);
      } else {
        document.getElementById(id).style.textDecoration = "none";
        listItems[i].completed = false;
        populateItemDesc(listItems[i]);
      }
    };

    let getCompleteFunc = () => {
      completeItem(`${listItems[i].title}Div`);
    };

    document
      .getElementById(`${listItems[i].title}Check`)
      .addEventListener("click", getCompleteFunc);
  }

  addRemoveItemFunc();
};

let populateMainDiv = () => {
  let listArr = getProjectList();

  styleMainDiv();

  for (let i = 0; i < listArr.length; i++) {
    createListItemDiv(listArr[i]);
    insertListItemDiv(listArr[i]);
  }
};

let pullUpListForm = () => {
  document.getElementById("newListButton").style.display = "none";
  document.getElementById("mainDiv").style.display = "none";
  document.getElementById("newListForm").style.display = "flex";
};

let pullUpItemForm = () => {
  document.getElementById("newItemButton").style.display = "none";
  document.getElementById("itemDescription").style.display = "none";
  document.getElementById("mainDiv").style.display = "none";
  document.getElementById("newItemForm").style.display = "block";
};

let styleMainDiv = () => {
  document.getElementById("mainDiv").style.display = "block";
  document.getElementById("itemDescription").style.display = "none";
  document.getElementById("itemDescription").innerText = "";
  document.getElementById("newListForm").style.display = "none";
  document.getElementById("newItemForm").style.display = "none";
  document.getElementById("newListButton").style.display = "block";
  document.getElementById("newItemButton").style.display = "none";
  document.getElementById("mainDiv").innerText = "";
};

export {
  addNewItem,
  addNewList,
  lastClicked,
  populateListInfo,
  populateMainDiv,
  pullUpItemForm,
  pullUpListForm,
};
