const username = document.getElementById('username');
const email = document.getElementById('email');
const boardSize = document.getElementById('boardSize');
const error = document.getElementById('error');

const entryForm = document.getElementById('entryForm')

// Check form
function formValidation(event){
    if(username.value.length == 0){
        console.log("There is no username");
        error.removeAttribute("hidden");
        error.innerText = "Ups... There is no username"; // <-- used insted of innerHTML because que only want to edit the text.
        username.focus();
        event.preventDefault();
        return false;
    }
    else if(email.value.length == 0){
        console.log("There is no email");
        error.removeAttribute("hidden");
        error.innerText = "Ups... There is no email.";
        email.focus();
        event.preventDefault();
        return false;
    }
    else if(boardSize.selectedIndex == 0){
        console.log("No board size was selected");
        error.removeAttribute("hidden");
        error.innerText = "Ups... There is size selected for your board";
        boardSize.focus();
        event.preventDefault();
        return false;
    }
    return true;
}

entryForm.addEventListener('submit', formValidation);