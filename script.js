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

// RUNTIME //

createstudentbutton.addEventListener('click', createStudent);