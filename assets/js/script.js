/* 
    EVENT HANDLERS BELOW!
    * Two Types: 
        1) Code is executed when page has finished loading the content
        2) Code is executed once a button is clicked
    Tutorial Source: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first]
*/

// NOTE: Once page has finished loading the code in this block below will execute
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    /* 
        SYNTAX: [ for (let i = 0; i < buttons.length; i ++) {} ] 
        * NOTE: [i = 0 - will set i to zero] [i < button.length - checks to see if i is less than the button array] [i++ - this will increment i by 1]
        * The for loop SYNTAX  above is an older syntax, as such a newer syntax to achieve this effect has been used below: 
    */

    /* 
        * Benifits of for loop synatx below: 
            1) Goes through buttons array and return each element in array. 
            2) This data shall be stored in the specified variable on each iteration attempt
            3) Reads cleaner for users
    */
        for (let button of buttons) {
            button.addEventListener("click", function() {
                if (this.getAttribute("data-type") === "submit"){
                    // [ alert("Submission successful!"); ] No longer needed, replaced by [checkAnswer();] function
                    checkAnswer();
                } else {
                    let gameType = this.getAttribute("data-type");
                    // Inside this code block [this.] referes to a specific button 
                    // [ alert(`You clicked the ${gameType} button.`); ] This code is commented out as we want the addition game to start once page loads
                    runGame("gameType"); //set the parameter in the runGame function outside this code block
                }
                // Use back quotes [``] when asigning text to alert code. 
                // The alert will present pop-up " You clicked [button clicked]"
            })
         }
        runGame("addition");    
})

/**
The [function runGame(){}...] supports main game loop. It is: 
    1) Called whent the script is first loaded and 
    2) after users' answers has been processed. 
*/
function runGame(gameType) {
/* 
    Source Tutorial: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first]
    * The console tab in GC Dev Tools was used to test beforehand, before adding this to the .js file
    * This [Math.floor()......] creates two random number between 1 and 25. 
*/
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

    //To test: 1) Pass the gameType into the function as an argument. If correct the question will display.
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2); 
    } 
    //To test: 2) If incorrect, it will throw an error [ i.e. use of 'else'], this will appear as a pop-up box in window
    else {
        alert(`Unknown game type: ${gameType}`);
    //This throw message will display in the console when unidentified game type is clicked (e.g. division)
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}
/** 
 * The function [checkAnswer(){}...] is used to; check the answer against first element in the returned [calculateCorrectAnswer();] array
*/
/*Tutorial Source: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=first] */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
       alert("Well Done! You aced it, that's the correct answer!"); 
    } else {
        alert(`Really? Yuu answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}, bruh.`);
    }
    
    runGame(calculatedAnswer[1]);
}

/**
    The function [calculatedCorrectAnswer(){}...] is used to 
    1) Get the operand(s) (i.e. numbers) and the operator(s) ("+", "-", "/" and/or "x")
    from the DOM.
    2) Returns th correct answer from the  above process
    Source: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=first] 
*/
function calculateCorrectAnswer() {
//[parseInt] overides JS's default string function (JS handles values as a string). As such [parseInt] handles values as an interger
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText; 

    if (operator === "+") {
        return [operand1 + operand2, "additon"];
    } else {
        alert(`The operator ${operator} has not been implemented!`);
        throw `unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

// Tutorial Source: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=first]
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1; 
    document.getElementById('operand2').textContent = operand2; 
    document.getElementById('operator').textContent = "+"; 

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayMultiplyQuestion() {

}





