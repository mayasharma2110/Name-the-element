// SET UP GAME

// START ON QUESTION 1 OF GAME
let currentQuestionNumber=1;
let currentQuestionNumberIndex=0;
let numberAnswered=0;

// START PROGRESS BAR ON 0 (CORRECT) and 0 (INCORRECT)
let numberCorrect = 0;
let percentCorrect = 0;
let numberIncorrect = 0;
let percentIncorrect = 0;

// VARIABLES FROM LOCAL STORAGE
// Attribution for local sotrage information at 
// https://www.w3schools.com/html/html5_webstorage.asp and 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API.

let number = localStorage.getItem("number");
let difficulty = localStorage.getItem("difficulty");
let timer = localStorage.getItem("timer");

// ARRAYs TO STORE OBJECTS OF QUESTION DATA, 1 ARRAY FOR EACH DIFFICULTY LEVEL

// Attribution for quiz questions at https://www.thoughtco.com, 
// https://tutor-pace.typepad.com/onlinetutoring/2015/09/25-basic-and-most-interesting-chemistry-facts.html
// and  https://www.zmescience.com/science/chemistry/amazing-chemistry-facts/. 
let questionsEasy=[
    {question:"The chemical forumla for table salt is ________ chloride.",option1:"Oxygen (O)",option2:"Helium (He)",option3:"Sodium (Na)",option4:"Carbon (C)",correct:"Sodium (Na)"},
    {question:"________ is a colorless gas, but when in liquid or solid state, it is blue.",option1:"Nitrogen (N)",option2:"Carbon (C)",option3:"Phosphorus (P)",option4:"Oxygen (O)",correct:"Oxygen (O)"},
    {question:"________ is the most abundant element in universe.",option1:"Hydrogen (H)",option2:"Zinc (Zn)",option3:"Potassium (K)",option4:"Gold (Au)",correct:"Hydrogen (H)"},
    {question:"________ is the most abundant element on earth.",option1:"Hydrogen (H)",option2:"Oxygen (O)",option3:"Helium (He)",option4:"Nitrogen (N)",correct:"Oxygen (O)"},
    {question:"Since ________ is light as compared to air, ________ balloons float easily.",option1:"Helium (He)",option2:"Hydrogen (H)",option3:"Nitrogen (N)",option4:"Oxygen (O)",correct:"Helium (He)"},
    {question:"The second most abundant element in the universe is ________. ",option1:"Nitrogen (N)",option2:"Helium (He)",option3:"Oxygen (O)",option4:"Calcium (Ca)",correct:"Helium (He)"},
    {question:"The primary use of ________ is for fertilizer production.",option1:"Gold (Au)",option2:"Zinc (Zn)",option3:"Sodium (Na)",option4:"Phosphorus (P)",correct:"Phosphorus (P)"},
    {question:"Your body is 3% ________ by weight. All living organisms contain this element.",option1:"Nitrogen (N)",option2:"Oxygen (O)",option3:"Hydrogen (H)",option4:"Carbon (C)",correct:"Nitrogen (N)"},
    {question:"9000 pencils lead (graphite) can be produced with the _____ found in human body.",option1:"Oxygen (O)",option2:"Calcium (Ca)",option3:"Carbon (C)",option4:"Phosphorus (P)",correct:"Carbon (C)"},
    {question:"________ is an element found in water and toothpaste.",option1:"Carbon (C)",option2:"Gola (Au)",option3:"Fluorine (F)",option4:"Silver (Ag)",correct:"Fluorine (F)"}
];

let questionsMedium=[
    {question:"20% of ________ found in the environment is a result of Amazon rainforest.",option1:"Nitrogen (N)",option2:"Sodium (Na)",option3:"Oxygen (O)",option4:"Hydrogen (H)",correct:"Oxygen (O)"},
    {question:"The only two non-silvery metals are gold and _____.",option1:"Aluminium (Al)",option2:"Zinc (Zn)",option3:"Silver (Au)",option4:"Copper (Cu)",correct:"Copper (Cu)"},
    {question:"Your body is 3% ________ by weight. All living organisms contain this element.",option1:"Nitrogen (N)",option2:"Oxygen (O)",option3:"Hydrogen (N)",option4:"Carbon (C)",correct:"Nitrogen (N)"},
    {question:"_____ dioxide in solid state is known as dry ice.",option1:"Nitrogen (N)",option2:"Carbon (C)",option3:"Oxygen (O)",option4:"Hydrogen (N)",correct:"Carbon (C)"},
    {question:"Every _____ atom in your body is likely 13.5 billion years old.",option1:"Hydrogen (H)",option2:"Nitrogen (N)",option3:"Carbon (C)",option4:"Oxygen (O)",correct:"Hydrogen (H)"},
    {question:"Superfluid _____ defies gravity and climbs on walls.",option1:"Sodium (Na)",option2:"Helium (He)",option3:"Oxygen (O)",option4:"Copper (Cu)",correct:"Helium (He)"},
    {question:"Mars is red because of _____ oxide.",option1:"Nitrogen (N)",option2:"Sodium (Na)",option3:"Carbon (C)",option4:"Iron (Fe)",correct:"Iron (Fe)"},
    {question:"Both osmium and iridium are about two times heavier than _____.",option1:"Lead (Pb)",option2:"Phosphorus (P)",option3:"Gold (Au)",option4:"Silver (Ag)",correct:"Lead (Pb)"},
    {question:"The most conductive metals are silver, followed by copper and _____.",option1:"Iron (Fe) ",option2:"Gold (Au)",option3:"Copper (Cu)",option4:"Nickel (Ni)",correct:"Gold (Au)"},
    {question:"Titan's atmosphere consists of over 98% ________. It is the only moon with a dense atmosphere.",option1:"Oxygen (O)",option2:"Nitrogen (N)",option3:"Hydrogen (H)",option4:"Helium (He)",correct:"Nitrogen (N)"}
];

let questionsHard=[
    {question:"Lightning strikes produce ________.",option1:"Nitrogen (N)",option2:"Oxygen (O)",option3:"Ozone (O3)",option4:"Helium (He)",correct:"Ozone (O3)"},
    {question:"Mercury & ________ are the only elements found to be in a liquid state at room temperature.",option1:"Zinc (Zn)",option2:"Copper (Cu)",option3:"Aluminium (Al)",option4:"Bromine (Br)",correct:"Bromine (Br)"},
    {question:"________ is found in a solid state but can be melted into liquid with the warmth present in your hands.",option1:"Gallium",option2:"Bromine (Br)",option3:"Mercury (Hg)",option4:"Zinc (Zn)",correct:"Gallium"},
    {question:"________ is the rarest natural element on earth’s crust with only about 28g present.",option1:"Cerium (Ce)",option2:"Astatine (At)",option3:"Scandium (Sc)",option4:"Carbon (C)",correct:"Astatine (At)"},
    {question:"There is enough ________ present on Earth surface to cover entire land area up to human knees.",option1:"Gold (Au)",option2:"Astatine (At)",option3:"Thulium (Tm)",option4:"Scandium (Sc)",correct:"Gold (Au)"},
    {question:"Your car’s airbags are packed with salt ________ azide, which is very toxic.",option1:"Copper (Cu)",option2:"Sodium (Na)",option3:"Oxygen (O)",option4:"Carbon (C)",correct:"Sodium (Na)"},
    {question:"The heaviest element, in terms of mass per atom, is ________.",option1:"Curium (Cm)",option2:"Berkelium (Bk)",option3:"Californium (Cf)",option4:"Oganesson (Og)",correct:"Oganesson (Og)"},
    {question:"The heaviest element, in terms of density, is either Osmium or ________.",option1:"Iridium (Ir)",option2:"Hassium (Hs)",option3:"Bohrium (Bh)",option4:"Dubnium (Db)",correct:"Iridium (Ir)"},
    {question:"The most electronegative element is ________.",option1:"Lithium (Li)",option2:"Fluorine (F)",option3:"Boron (B)",option4:"Hydrogen (H)",correct:"Fluorine (F)"},
    {question:"The most electropositive element is ________.",option1:"Calcium (Ca)",option2:"Kydrogen (H)",option3:"Francium (Fr)",option4:"Magnesium (Mg)",correct:"Francium (Fr)"}
];

//PREPARE GAME AND SHOW 1ST QUESTION

//add timer
let x = countdown();

//Attribution for countdown function: https://www.w3schools.com/howto/howto_js_countdown.asp
function countdown() {

    if (timer=="yes") {

    // Get today's date and time
    var now = new Date().getTime();
    
    var countDownDate = now + number*60000;//60000 milliseconds per minute

    // Update the count down every 1 second
    let x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // console.log(seconds);

        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = `
        <div id="timer1">
            <h3>${minutes}m + ${seconds}s</h3>
        </div>`;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer1").innerHTML = "TIME'S UP!";
            // end the game early
            endGameEarly();
            }
            
        }, 1000);

        return x; 

    } else if (timer=="no") {
        let x=0;
        return x;
    }

}
// end of countdown function

let quizQuestions=prepareGame();

function prepareGame() {

    // show current question number in bar
    currentQuestionBar();

    // get quiz questions
    let quizQuestions = getQuizQuestions();

    // display question and options
    displayQuestion(quizQuestions, currentQuestionNumber, currentQuestionNumberIndex);

    return quizQuestions;
    
};

// current question bar
function currentQuestionBar() {
    if (number==5) {
        document.getElementById("current_question").innerHTML=`
        <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
        `;
    }
    else if (number==10) {
        document.getElementById("current_question").innerHTML=`
        <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
        <div>6</div> <div>7</div> <div>8</div> <div>9</div> <div>10</div>
        `;
    }
    else if (number==15) {
        document.getElementById("current_question").innerHTML=`
        <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
        <div>6</div> <div>7</div> <div>8</div> <div>9</div> <div>10</div>
        <div>11</div> <div>12</div> <div>13</div> <div>14</div> <div>15</div>
        `; 
    }
    //add background color to question no 1
    $("#current_question").children().first().addClass("current_question_color");
};

// get quiz questions
function getQuizQuestions() {
    if (difficulty=="easy") {
        let questionsEasy1 = questionsEasy.sort(() => Math.random() - 0.5);//randomize order of questions
        // Attribution for randomizing arrays found at https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        return questionsEasy1.slice(0,number);
    }
    else if (difficulty=="medium") {
        let questionsMedium1 = questionsMedium.sort(() => Math.random() - 0.5);//randomize order of questions
        return questionsMedium1.slice(0,number); 
    }
    else if (difficulty=="hard") {
        let questionsHard1 = questionsHard.sort(() => Math.random() - 0.5);//randomize order of questions
        return questionsHard1.slice(0,number); 
    }
};

// display question and options
function displayQuestion(quizQuestions, currentQuestionNumber, currentQuestionNumberIndex) {

    document.getElementById("question_text").innerHTML=`Question ${currentQuestionNumber}: ${quizQuestions[currentQuestionNumberIndex].question}`;
    document.getElementById("options").innerHTML=`
            <div class="container-fluid home">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <input id="option1" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option1}" required>
                        <label for="option1" class="label_colour">${quizQuestions[currentQuestionNumberIndex].option1}</label>
                        <br>
                        <input id="option2" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option2}">
                        <label for="option2" class="label_colour">${quizQuestions[currentQuestionNumberIndex].option2}</label>
                        <br>
                    </div>
                    <div class="col-12 col-md-6">
                        <input id="option3" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option3}">
                        <label for="option3" class="label_colour">${quizQuestions[currentQuestionNumberIndex].option3}</label>
                        <br>
                        <input id="option4" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option4}">
                        <label for="option4" class="label_colour">${quizQuestions[currentQuestionNumberIndex].option4}</label>
                    </div>
                </div>
            </div>
            `;
};

//end game early
function endGameEarly() {
    // hide restart and reselect buttons, show play again button
    $("#reselect_restart").addClass("hide");   
    $("#b_play_again").removeClass("hide").addClass("show");  

    //hide submit/next question button
    if ($("#next_question").children()[0].className=="show") {
        $("#next_question").children().removeClass("show").addClass("hide"); 
    } else if ($("#submit_answer")[0].className=="show") {
        $("#submit_answer").removeClass("show").addClass("hide"); 
    }

    // display overall feedback to user
    overallFeedback();
}


// click on labels changes background colur
function labelClick(){
    // check if any other siblings with class "selected_label" if so remove class and add class "label_colour"
    for (var i = 0; i < 4; i++) {
        if ($("label").eq(i)[0].className=="selected_label") {
            $("label").eq(i).removeClass("selected_label").addClass("label_colour");
            break;
        }
    }
    $(this).prev().trigger("click");
    $(this).removeClass("label_colour").addClass("selected_label");
}

document.getElementsByTagName("label")[0].addEventListener("click",labelClick);
document.getElementsByTagName("label")[1].addEventListener("click",labelClick);
document.getElementsByTagName("label")[2].addEventListener("click",labelClick);
document.getElementsByTagName("label")[3].addEventListener("click",labelClick);

//USER SUMBITS AN ANSWER
function sumbittedAnswer(event){

    // prevent default
    event.preventDefault();

    // increment variable values
    numberAnswered++;

    // get user input and save as variables;
    let userAnswer=$('[name="option"]:checked')[0].value

    // update current question bar 
    updateCompleteQuestionBar(currentQuestionNumber,currentQuestionNumberIndex);


    // check answer and give feedback, also update progress bar based on userResult
    [numberCorrect,percentCorrect,numberIncorrect,percentIncorrect] = displayFeedback(userAnswer);

    // IF NOT LAST QUESTION
    if (currentQuestionNumber<number) {
        // show next question button and hide submit button
            showNextQuestionButton();
    }

    if (currentQuestionNumber==number) {
        endGame();
    } 

    return [numberAnswered,numberCorrect,percentCorrect,numberIncorrect,percentIncorrect];
};

document.getElementById("user_picks").addEventListener('submit',sumbittedAnswer);

function updateCompleteQuestionBar(currentQuestionNumber,currentQuestionNumberIndex) {
    // Attribution to select an index from an array in jQuery: https://api.jquery.com/eq/
    $("#current_question").children().eq(currentQuestionNumberIndex).removeClass("current_question_color").addClass("completed_question_color");
}

function showNextQuestionButton(){
    $("#next_question").children().removeClass("hide").addClass("show");
    $("#submit_answer").removeClass("show").addClass("hide"); 
}

function displayFeedback(userAnswer) {
    let userResult = userAnswer===quizQuestions[currentQuestionNumberIndex].correct;
    // console.log(quizQuestions[currentQuestionNumberIndex].correct);
    if (userResult) {
        document.getElementById("user_feedback").innerHTML=`Well done you got it correct!`;
        // label green
        $('[name="option"]:checked').next().removeClass("selected_label").addClass("correct");
        [numberCorrect,percentCorrect,numberIncorrect,percentIncorrect]=updateProgressBarCorrect(numberCorrect,percentCorrect,numberIncorrect,percentIncorrect);
        return [numberCorrect,percentCorrect,numberIncorrect,percentIncorrect];
    } else {
        document.getElementById("user_feedback").innerHTML=`Sorry you got it wrong, the correct answer is ${quizQuestions[currentQuestionNumberIndex].correct}.`;
        // label red
        $('[name="option"]:checked').next().removeClass("selected_label").addClass("incorrect");
        // show correct ans in green
        for (var i = 0; i < 4; i++) {
            if ($('[name="option"]')[i].value==quizQuestions[currentQuestionNumberIndex].correct) {
            // console.log(i);
            $('[name="option"]').eq(i).next().removeClass("label_colour").addClass("correct");
            // only 1 option can be correct, dont check the rest
            break;
            }
        }
        [numberCorrect,percentCorrect,numberIncorrect,percentIncorrect]=updateProgressBarIncorrect(numberCorrect,percentCorrect,numberIncorrect,percentIncorrect);
        return [numberCorrect,percentCorrect,numberIncorrect,percentIncorrect];
    }
}

function updateProgressBarCorrect(numberCorrect,percentCorrect,numberIncorrect,percentIncorrect) {
    numberCorrect++;
    percentCorrect=percentCorrect+1/number*100;
    // Progress bar using bootstrap styling 
    document.getElementById("progress_bar").innerHTML=`
        <div class="progress">
            <div class="progress-bar bg-incorrect" role="progressbar" style="width: ${percentIncorrect}%" aria-valuenow="${percentIncorrect}" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-correct" role="progressbar" style="width: ${percentCorrect}%" aria-valuenow="${percentCorrect}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`;
    // End of progress bar using bootstrap styling 
    return [numberCorrect,percentCorrect,numberIncorrect,percentIncorrect];
}

function updateProgressBarIncorrect(numberCorrect,percentCorrect,numberIncorrect,percentIncorrect) {
    numberIncorrect++;
    percentIncorrect=percentIncorrect+1/number*100;
    // Progress bar using bootstrap styling 
    document.getElementById("progress_bar").innerHTML=`
        <div class="progress">
            <div class="progress-bar bg-incorrect" role="progressbar" style="width: ${percentIncorrect}%" aria-valuenow="${percentIncorrect}" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-correct" role="progressbar" style="width: ${percentCorrect}%" aria-valuenow="${percentCorrect}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`;
    // End of progress bar using bootstrap styling 
    return [numberCorrect,percentCorrect,numberIncorrect,percentIncorrect];
}

function endGame() {
    // show play again button and hide submit button
    showPlayAgainButton();
    // display overall feedback to user
    overallFeedback();
}

function showPlayAgainButton() {
    $("#submit_answer").removeClass("show").addClass("hide"); 
    $("#reselect_restart").addClass("hide");
    $("#b_play_again").removeClass("hide").addClass("show");   
}

function overallFeedback() {
    $("#overall_feedback").html(`
    <p>You answered ${numberAnswered} out of ${number} questions. You got ${numberCorrect} question(s) correct (${percentCorrect}%) and ${numberIncorrect} question(s) incorrect (${percentIncorrect}%).</p>
    <p>Click below to play another quiz!</p>
    `)
}

//USER CLICKS NEXT QUESTION
function nextQuestion(event){

    // increment variable values
    currentQuestionNumber++;
    currentQuestionNumberIndex++;

    //clear user feedback
    clearUserFeedback();
    
    // update current question bar 
    updateCurrentQuestionBar(currentQuestionNumber,currentQuestionNumberIndex);

    // display question and options
    displayQuestion(quizQuestions, currentQuestionNumber, currentQuestionNumberIndex);

    // show next submit button and hide next question button
    showSubmitButton();

};

document.getElementById("next_question").children[0].addEventListener('click',nextQuestion);

function clearUserFeedback() {
    $("#user_feedback").html("");
}

function updateCurrentQuestionBar(currentQuestionNumber, currentQuestionNumberIndex) {
    // Attribution to select an index from an array in jQuery: https://api.jquery.com/eq/
    $("#current_question").children().eq(currentQuestionNumberIndex).addClass("current_question_color");
}

function showSubmitButton() {
    $("#next_question").children().removeClass("show").addClass("hide");
    $("#submit_answer").removeClass("hide").addClass("show"); 
}

// restart button
function restartQuiz() {
    // reset current question bar to question 1
    currentQuestionBar();

    //reset variables
    currentQuestionNumber=1;
    currentQuestionNumberIndex=0;
    numberAnswered=0;
    numberCorrect = 0;
    percentCorrect = 0;
    numberIncorrect = 0;
    percentIncorrect = 0;

    //reset to question 1 of quiz
    displayQuestion(quizQuestions, currentQuestionNumber, currentQuestionNumberIndex);

    //submit/next question buttons
    // if class of next_question is show then hide and show submit button
    if ($("#next_question").children()[0].className=="show") {
        showSubmitButton();
    }

    //reset progress bar
    // Progress bar using bootstrap styling 
    document.getElementById("progress_bar").innerHTML=`
        <div class="progress">
            <div class="progress-bar bg-incorrect" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-correct" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`;
    // End of progress bar using bootstrap styling 

    //reset timer
    resetTimer();

    return [currentQuestionNumber,currentQuestionNumberIndex,numberAnswered,numberCorrect,percentCorrect,numberIncorrect,percentIncorrect]
}

document.getElementById("b_restart").addEventListener("click",restartQuiz);

function resetTimer() {
    if (timer=="yes") {
        clearInterval(x);
        document.getElementById("timer").innerHTML="";
        x=countdown();
        return x;
    }
}