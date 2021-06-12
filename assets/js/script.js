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
                if (this.getAttribute("data-type") === "submit") {
                    // [ alert("Submission successful!"); ] No longer needed, replaced by [checkAnswer();] function
                    checkAnswer();
                } else {
                    let gameType = this.getAttribute("data-type");
                    // Inside this code block [this.] referes to a specific button 
                    // [ alert(`You clicked the ${gameType} button.`); ] This code is commented out as we want the addition game to start once page loads
                    runGame(gameType); //set the parameter in the runGame function outside this code block
                }
                // Use back quotes [``] when asigning text to alert code. 
                // The alert will present pop-up " You clicked [button clicked]"
            })
        }

        //The block of code below check if the key [enter on keybord] was pressed. This will allow user to enter answer by pressing the key rather than button
        document.getElementById("answer-box").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                checkAnswer();
            }
        })
        
        runGame("addition");    
})

/**
The [function runGame(){}...] supports main game loop. It is: 
    1) Called whent the script is first loaded and 
    2) after users' answers has been processed. 
*/
function runGame(gameType) {

    document.getElementById("answer-box").value = ""; //This set the box to empty string everytime user answers qeustion 
    document.getElementById("answer-box").focus(); //Ensures the mousecursor will always be in the box to type an anser
/* 
    Source Tutorial: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/?child=first]
    * The console tab in GC Dev Tools was used to test beforehand, before adding this to the .js file
    * This [Math.floor()......] creates two random number between 1 and 25. 
*/
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    //To test: 1) Pass the gameType into the function as an argument. If correct the question will display.
    if (gameType === "addition") {

        displayAdditionQuestion(num1, num2);

    } else if (gameType ==="subtract") {

        displaySubtractQuestion(num1, num2);

    } else if (gameType ==="multiply") {

        displayMultiplyQuestion(num1, num2);

    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/** 
* The function [checkAnswer(){}...] is used to; check the answer against first element in the returned [calculateCorrectAnswer();] array
*Tutorial Source: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=first]
*/
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
       alert("Well Done! You aced it, that's the correct answer!"); 
       incrementScore();
       //integral to tally feature on site, see the correlating functions below for set-up
    } else {
        alert(`Really? You answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
        //integral to tally feature on site, see the correlating functions below for set-up
    }
    runGame(calculatedAnswer[1]);
}

/**
    The function [calculatedCorrectAnswer(){}...] is used to 
    1) Get the operand(s) (i.e. numbers) and the operator(s) ("+", "-", "/" and/or "x")
    from the DOM.
    2) Returns th correct answer from the  above process
*/
function calculateCorrectAnswer() {
    //Tutorial Source:  [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=first] 
    //[parseInt] overides JS's default string function (JS handles values as a string). As such [parseInt] handles values as an interger
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText; 

    if (operator === "+") {

        return [operand1 + operand2, "addition"];

    } else if (operator === "-") {

        return [operand1 - operand2, "subtract"];

    } else if (operator === "x") {

        return [operand1 * operand2, "multiply"];

    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 The function [incrementScore(){}]: 
 1) Is used to get the current score
 2) It increments score by x (e.g. 1)
 //Tutorial Source:  [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=first] 
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    /* 
        *[innerText] and [textContent] are interchangeable. They perform the same functions!
        * [++oldScore] is a compund operator and can be replaced by [oldScore +1]. The [++] before the variable will add 1. 
        * putting the [++] after the variable will get the ID of the score and set the inner text to the oldscroe variable. It will then add 1 to the old score. WE DO NOT WANT THIS!
    */
}

/**
 The function [incrementWrongAnswer(){}]: 
 1) Is used to get current tally of inccorect answers from the DOM 
 2) It increments score by x (e.g. 1)
 //Tutorial Source: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=first] 
 */

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

// Tutorial Source: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=first]
function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1; 
    document.getElementById('operand2').textContent = operand2; 
    document.getElementById('operator').textContent = "+"; 

}

function displaySubtractQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1; 
    document.getElementById('operand2').textContent = operand2; 
    document.getElementById('operator').textContent = "-"; 
    
}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2; 
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";     
    /**
     * SYNTAX [operand1 > operand2 ? operand1 : operand2] is a ternary operator, works like an if statment.
     * Syntax above translates to: is x greater than [>] y [?], if so return x, if not, return y [x : y;] (visa versa) 
     * The syntax of this block of code differs from the others as subtraction can produce negative numbers. Source: [https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8874c1f318714d9d90b51500812d382c/?child=first]
    */
}






