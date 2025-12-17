// ;) //
console.log("this malformed baby is a faliure")

// SETUP //

const createstudentbutton = document.getElementById('createstudentbutton')
const addcivpointsbutton = document.getElementById('addcivpointsbutton')

// FUNCTIONS //

function createStudent() {

    Notification.requestPermission();
    console.log("requested permission from user for notification access");

    const button = document.getElementById('createstudentbutton');
    const inputText = document.getElementById('createstudenttext');
    const outputText = document.getElementById('createstudentoutputtext');

    const inputValue = inputText.value;

    if (inputValue != "") {
        outputText.textContent = 'Message: You have added student ' + inputValue + '.';
    } else {
        outputText.textContent = 'Message: Please enter a name.';
    }
    
}

function addCivPoints() {

    const button = document.getElementById('addcivpointsbutton');
    const inputText_amount = document.getElementById('addcivpointstext_amount');
    const inputText_userID = document.getElementById('addcivpointstext_student');
    const outputText = document.getElementById('addcivpointsoutputtext');

    const inputValue_amount = inputText_amount.value;
    const inputValue_userID = inputText_userID.value;
    
    if (Number(inputValue_amount) == NaN) {
        outputText.textContent = "Message: Please input a valid amount."; console.log("failure")
        return;
    }

    if (Number(inputValue_userID) == NaN) {
        outputText.textContent = "Message: Please input a valid user ID."; console.log("failure")
        return;
    }

    // whatever request you do to add civ points after
    outputText.textContent = "Message: You have added " + inputValue_amount + " to user " + inputText_userID + "."; console.log("success")

}

// RUNTIME //

createstudentbutton.addEventListener('click', createStudent);
addcivpointsbutton.addEventListener('click', addCivPoints);
