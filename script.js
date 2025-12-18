
// ;) //
console.log("this malformed baby NOT is a faliure, gg");
console.log("gg indeed.");

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
    
    if (Number.isNaN(Number(inputValue_amount)) || inputValue_amount == "") {
        outputText.textContent = "Message: Please input a valid amount."; console.log("failure")
        return;
    }

    if (Number.isNaN(Number(inputValue_userID)) || inputValue_userID == "") {
        outputText.textContent = "Message: Please input a valid user ID."; console.log("failure")
        return;
    }

    // whatever request you do to add civ points after
    //got it
    //yknow i just realized we should move this to the bottom maybe because it hasn't actually succeeded yet. i'll comment it out for now and move it.
    //outputText.textContent = "Message: You have added " + inputValue_amount + " to user " + inputValue_userID + "."; console.log("success")
    // "fetching" the information to the backend
    fetch('', {
        //you problably know what these mean
        method: 'POST',
        //there are like around 4 HTTP official requests, like POST, PUT, GET, and DELETE. I'll make a more detailed guide in the README.
        headers: {
            'Content-Type': 'application/json'
        },
        //I never really dug into why this content-type is like this but it's always required
        body: JSON.stringify({
            //the body is the data to send, and we need to convert it into a json string or else our backend doesn't like us anymore
            //All you did before was just check if the strings can be converted to valid numbers.
            //We actually have to do that work now.
            id: Number(inputValue_userID), //these both are pretty self-explanatory
            points: Number(inputValue_amount),
            //we forgot to add the reason so i just made it non-adjustable for now
            //you can edit that later if you want
            reason: "this will NOT be a malformed baby hopefully" //You can change this to anything.
        })
    })
    //final real succeed line
    //I just realized we don't really have any way to say that it failed from the backend...
    //fine for now
    //You can add that if you really want to
    //I know we shouldn't go without error handling but this is just a project.
    //If I really need to and this fails I will add it and take what the backend HTTP code was.
    outputText.textContent = "Message: You have added " + inputValue_amount + " to user " + inputValue_userID + "."; console.log("success yay")
}

// RUNTIME //

createstudentbutton.addEventListener('click', createStudent);
addcivpointsbutton.addEventListener('click', addCivPoints);
