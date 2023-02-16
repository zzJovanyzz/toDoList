import { populateMainDiv } from "./domChanges";


let projectList = [{name: "Shopping", content:[{ title: "Milk", desc: "need milk to bake cake", dueDate: "01/26/24", priority: "1", completed: false}, { title: "Eggs", desc: "also for cake", dueDate: "01/26/24", priority: "1", completed: false} ]}, 
                   {name: "Study",    content:[{ title: "Finish To Do", desc: "need to finish today", dueDate: "02/13/23", priority: "1", completed: false}, { title: "Reading", desc: "need to finish today", dueDate: "02/13/23", priority: "1", completed: false}, { title: "More Reading", desc: "need to finish today", dueDate: "02/13/23", priority: "1", completed: false} ]}];

let myCreateList = (name, content = []) =>{

    return {name, content}
}

let myCreateObject = (title, desc = "", dueDate ="", priority = "1" , completed = false) =>{

    return {title, desc, dueDate, priority, completed}
}


let getProjectList = () =>{
    return projectList
}

let addToProjectList = (item) =>{
    getProjectList().push(item)
}

export { addToProjectList, getProjectList, myCreateObject, myCreateList}