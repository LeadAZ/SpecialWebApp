// SETUP //

const createstudentbutton = document.getElementById('createstudentbutton')

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
        outputText.textContent = "Message: Please input a valid amount.";
        return;
    }

    if (Number(inputText_userID) == NaN) {
        outputText.textContent = "Message: Please input a valid user ID.";
    }

    // whatever request you do to add civ points after

    outputText.textContent = "Message: You have added " + inputValue_amount + " to user " + inputText_userID + ".";

}

// RUNTIME //

createstudentbutton.addEventListener('click', createStudent);