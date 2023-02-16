import { populateMainDiv, pullUpItemForm, pullUpListForm } from "./domChanges";
import { addNewItem, addNewList } from "./domChanges";

let addFuncToButtons = () =>{
    document.getElementById('returnHome').addEventListener('click', populateMainDiv)

    document.getElementById('newListButton').addEventListener('click', pullUpListForm)
    document.getElementById('newListSubmit').addEventListener('click', function(event){event.preventDefault()})
    document.getElementById('newListSubmit').addEventListener('click', addNewList)

    document.getElementById('newItemButton').addEventListener('click', pullUpItemForm)
    document.getElementById('newItemSubmit').addEventListener('click', function(event){event.preventDefault()})
    document.getElementById('newItemSubmit').addEventListener('click', addNewItem)
    


}

export {addFuncToButtons}

