import { populateMainDiv, setDefaultDate } from "./domChanges";
import { addFuncToButtons, addRemoveFunc } from "./buttonFunc";
import "./styles.css";
import { getProjectList } from "./listInteractions";

populateMainDiv();
addFuncToButtons();
addRemoveFunc();
setDefaultDate();

// if (typeof Storage !== "undefined") {
//   // Code for localStorage/sessionStorage.
//   if (localStorage.getItem("projectList") == null) {
//     console.log("its null");
//   } else {
//     console.log(localStorage.projectList);
//   }
// } else {
//   // Sorry! No Web Storage support..
// }
