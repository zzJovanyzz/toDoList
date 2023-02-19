import { populateListInfo, populateMainDiv } from "./domChanges";
import { lastClicked } from "./domChanges";

let projectList = [
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

let getProjectList = () => {
  return projectList;
};

let addToProjectList = (item) => {
  getProjectList().push(item);
};

let removeList = (name) => {
  for (let i = 0; i < getProjectList().length; i++) {
    if (getProjectList()[i].name == name) {
      getProjectList().splice(i, 1);
    }
  }
  populateMainDiv();
  console.log(getProjectList());
};

let removeItem = (id) => {
  let currentName = `${id.slice(0, -6)}`;

  for (let i = 0; i < getProjectList().length; i++) {
    if (getProjectList()[i].name == `${lastClicked.slice(0, -3)}`) {
      let currentList = getProjectList()[i];
      console.log(currentList);
      for (let x = 0; x < currentList.content.length; x++) {
        if (currentList.content[x].title == currentName) {
          console.log(`item is : ${currentList.content[x].title}`);
          currentList.content.splice(x, 1);
          populateListInfo(currentList);
          document.getElementById("itemDescription").style.display = "none";
          console.log(currentList);
        }
      }
    }
  }

  // console.log(currentName);
  // console.log(currentList)
};

export {
  addToProjectList,
  getProjectList,
  myCreateObject,
  myCreateList,
  removeItem,
  removeList,
};
