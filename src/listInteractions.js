import { populateListInfo, populateMainDiv } from "./domChanges";
import { lastClicked } from "./domChanges";


let projectList;

let listModified = () => {
  if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.
    let arrToStore = [];

    for (let i = 0; i < getProjectList().length; i++) {
      arrToStore.push(JSON.stringify(getProjectList()[i]));
    }

    localStorage.projectList = JSON.stringify(arrToStore);
  } else {
    // Sorry! No Web Storage support..
  }
};

if (typeof Storage !== "undefined") {
  // listModified();
  // Code for localStorage/sessionStorage.
  if (localStorage.getItem("projectList") == null) {
    console.log("its null");

    projectList = [
      {
        name: "Study",
        content: [
          {
            title: "Finish To Do",
            desc: "need to finish today",
            dueDate: "02/13/2023",
            priority: "High",
            completed: false,
          },
          {
            title: "Reading",
            desc: "need to finish today",
            dueDate: "02/13/2023",
            priority: "Medium",
            completed: false,
          },
          {
            title: "More Reading",
            desc: "need to finish today",
            dueDate: "02/13/2023",
            priority: "Low",
            completed: false,
          },
        ],
      },
      {
        name: "Shopping",
        content: [
          {
            title: "Milk",
            desc: "need milk to bake cake",
            dueDate: "01/26/2024",
            priority: "High",
            completed: false,
          },
          {
            title: "Eggs",
            desc: "also for cake",
            dueDate: "01/26/2024",
            priority: "High",
            completed: false,
          },
        ],
      },
    ];
  } else {
    projectList = [];

    // console.log(localStorage.projectList);
    // console.log(JSON.parse(localStorage.projectList));

    for (let i = 0; i < JSON.parse(localStorage.projectList).length; i++) {
      projectList.push(JSON.parse(JSON.parse(localStorage.projectList)[i]));
    }
  }

  console.log(projectList);
} else {
  // Sorry! No Web Storage support..
}

let getProjectList = () => {
  return projectList;
};

let myCreateList = (name, content = []) => {
  return { name, content };
};

let myCreateObject = (
  title,
  desc = "",
  dueDate = "",
  priority = "1",
  completed = false
) => {
  return { title, desc, dueDate, priority, completed };
};

let addToProjectList = (item) => {
  for (let i = 0; i < getProjectList().length; i++) {
    if (getProjectList()[i].name == item.name) {
      getProjectList().splice(i, 1, item);
      return;
    }
  }
  getProjectList().push(item);
};

let removeList = (name) => {
  for (let i = 0; i < getProjectList().length; i++) {
    if (getProjectList()[i].name == name) {
      getProjectList().splice(i, 1);
    }
  }
  populateMainDiv();
  listModified();
};

let removeItem = (thisId) => {
  let currentName = `${thisId.slice(0, -6)}`;

  for (let i = 0; i < getProjectList().length; i++) {
    if (getProjectList()[i].name == `${lastClicked.slice(0, -3)}`) {
      let currentList = getProjectList()[i];
      for (let x = 0; x < currentList.content.length; x++) {
        if (currentList.content[x].title == currentName) {
          currentList.content.splice(x, 1);
          populateListInfo(currentList);
          document.getElementById("itemDescription").style.display = "none";
        }
      }
    }
  }
  listModified();
};

export {
  addToProjectList,
  getProjectList,
  myCreateObject,
  myCreateList,
  listModified,
  removeItem,
  removeList,
};
