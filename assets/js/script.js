/* 
    EVENT HANDLERS BELOW!
    * Two Types: 
        1) Code is executed when page has finished loading the content
        2) Code is executed once a button is clicked
    Tutorial Source: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first]
*/

// NOTE: Once page has finished loading the code in this block will execute
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    /* 
        SYNTAX: [ for (let i = 0; i < buttons.length; i ++) {} ] 
        * NOTE: [i = 0 - will set i to zero] [i < button.length - checks to see if i is less than the button array] [i++ - this will increment i by 1]
        * The for loop above is an older syntax, as such a newer syntax to achieve this effect has been used below: 
    */
        for (let button of buttons) {
            button.addEventListener("click", function() {
                if (this.getAttribute("data-type") === "submit"){
                    alert("Submission successful!");
                } else {
                    let gameType = this.getAttribute("data-type");
                    alert(`You clicked the ${gameType} button.`);
                }
                // Use back quotes [``] when asigning to this type of alert code. 
                // The alert will present pop-up " You clicked [button clicked]"
            })
         }

        /* 
            * Benifits of synatx above: 
                1) Goes through buttons array and return each element in array. 
                2) This data shall be stored in the specified variable on each iteration attempt
                3) Reads cleaner for users
        */

        // NOTE: Inside this code block [this.] referes to a specific button 
})

/*
    * Using the SRP for each function below: 
    * Avoid creating too many variables in the 'global scope'. To do this, make sure everything is contained within a fucntion block of code.
    Source: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first]
*/

/**
This [Math.floor()......] creates two random number between 1 and 25. 
The function supports main game loop. It is: 
    1) Called whent the script is first loaded and 
    2) after users' answers has been processed. 
*/
function runGame() {
/* 
    Source Tutorial: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first]
    * The console tab in GC Dev Tools was used to test beforehand, before adding this to the .js file
*/
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}





