// SET UP GAME

// START ON QUESTION 1 OF GAME
let currentQuestionNumber=1;
let currentQuestionNumberIndex=0;
let numberAnswered=0;

// START PROGRESS BAR ON 0 (CORRECT) and 0 (INCORRECT)
let numberCorrect = 0;
let numberIncorrect = 0;
let percentIncorrect = 0;
let percentCorrect = 0;

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
    {question:"The chemical forumla for table salt is soduim ________.",option1:"blah",option2:"blah",option3:"Chloride (Cl)",option4:"blah",correct:"Chloride (Cl)"},
    {question:"________ is a colorless gas, but when found in liquid or solid state, it is blue in color.",option1:"blah",option2:"blah",option3:"blah",option4:"Oxygen (O)",correct:"Oxygen (O)"},
    {question:"________ is the most abundant element in universe.",option1:"Hydrogen (H)",option2:"blah",option3:"blah",option4:"blah",correct:"Hydrogen (H)"},
    {question:"________ is the most abundant element on earth.",option1:"blah",option2:"Oxygen (O)",option3:"blah",option4:"blah",correct:"Oxygen (O)"},
    {question:"Since ________ is light as compared to air, ________ balloons float easily.",option1:"Helium (He)",option2:"blah",option3:"blah",option4:"blah",correct:"Helium (He)"},
    {question:"The second most abundant element in the universe is ________. ",option1:"blah",option2:"Helium (He)",option3:"blah",option4:"blah",correct:"Helium (He)"},
    {question:"The primary use of ________ is for fertilizer production.",option1:"blah",option2:"blah",option3:"blah",option4:"Phosphorus (P)",correct:"Phosphorus (P)"},
    {question:"Your body is 3% ________ by weight. All living organisms contain this element.",option1:"Nitrogen (N)",option2:"blah",option3:"blah",option4:"blah",correct:"Nitrogen (N)"},
    {question:"9000 pencils lead (graphite) can be produced with the _____ found in human body.",option1:"blah",option2:"blah",option3:"Carbon (C)",option4:"blah",correct:"Carbon (C)"},
    {question:"________ is an element you encounter daily, most often in water and toothpaste.",option1:"blah",option2:"blah",option3:"Fluorine (F)",option4:"blah",correct:"Fluorine (F)"}
];

let questionsMedium=[
    {question:"20% of ________ found in the environment is a result of Amazon rainforest.",option1:"Nitrogen (N)",option2:"Sodium (Na)",option3:"Oxygen (O)",option4:"Hydrogen (H)",correct:"Oxygen (O)"},
    {question:"The only two non-silvery metals are gold and _____.",option1:"blah",option2:"blah",option3:"blah",option4:"Copper (Cu)",correct:"Copper (Cu)"},
    {question:"Your body is 3% ________ by weight. All living organisms contain this element.",option1:"Nitrogen (N)",option2:"blah",option3:"blah",option4:"blah",correct:"Nitrogen (N)"},
    {question:"_____ dioxide in solid state is known as dry ice.",option1:"blah",option2:"Carbon (C)",option3:"blah",option4:"blah",correct:"Carbon (C)"},
    {question:"Every _____ atom in your body is likely 13.5 billion years old because they were created at the birth of the universe.",option1:"Hydrogen (H)",option2:"blah",option3:"blah",option4:"blah",correct:"Hydrogen (H)"},
    {question:"Superfluid _____ defies gravity and climbs on walls",option1:"blah",option2:"Helium (He)",option3:"blah",option4:"blah",correct:"Helium (He)"},
    {question:"Mars is red because of _____ oxide.",option1:"blah",option2:"blah",option3:"blah",option4:"Iron (Fe)",correct:"Iron (Fe)"},
    {question:"Both osmium and iridium are about two times heavier than _____.",option1:"Lead (Pb)",option2:"blah",option3:"blah",option4:"blah",correct:"Lead (Pb)"},
    {question:"The most conductive metals are silver, followed by copper and _____.",option1:"blah",option2:"Gold (Au)",option3:"blah",option4:"blah",correct:"Gold (Au)"},
    {question:"Saturn's largest moon, Titan, is the only moon in the solar system with a dense atmosphere. Its atmosphere consists of over 98% ________.",option1:"blah",option2:"Nitrogen (N)",option3:"blah",option4:"blah",correct:"Nitrogen (N)"}
];

let questionsHard=[
    {question:"Lightning strikes produce ________, which produces the characteristic smell after lightning storms.",option1:"blah",option2:"blah",option3:"Ozone (O3)",option4:"blah",correct:"Ozone (O3)"},
    {question:"Mercury & ________ are the only elements found to be in a liquid state at room temperature.",option1:"blah",option2:"blah",option3:"blah",option4:"Bromine (Br)",correct:"Bromine (Br)"},
    {question:"________ is an exception found to be in a solid state but can be melted into liquid with the warmth present in your hands.",option1:"Gallium",option2:"blah",option3:"blah",option4:"blah",correct:"Gallium"},
    {question:"________ is the rarest natural element on earth’s crust with only about 28g present.",option1:"blah",option2:"Astatine (At)",option3:"blah",option4:"blah",correct:"Astatine (At)"},
    {question:"There is enough ________ present on Earth surface to cover entire land area up to human knees.",option1:"Gold (Au)",option2:"blah",option3:"blah",option4:"blah",correct:"Gold (Au)"},
    {question:"Your car’s airbags are packed with salt ________ azide, which is very toxic.",option1:"blah",option2:"Sodium (Na)",option3:"blah",option4:"blah",correct:"Sodium (Na)"},
    {question:"The heaviest element, in terms of mass per atom, is ________.",option1:"blah",option2:"blah",option3:"blah",option4:"Oganesson (Og)",correct:"Oganesson (Og)"},
    {question:"The heaviest element, in terms of density, is either Osmium or ________.",option1:"Iridium (Ir)",option2:"blah",option3:"blah",option4:"blah",correct:"Iridium (Ir)"},
    {question:"The most electronegative element is ________.",option1:"blah",option2:"Fluorine (F)",option3:"blah",option4:"blah",correct:"Fluorine (F)"},
    {question:"The most electropositive element is ________.",option1:"blah",option2:"blah",option3:"Francium (Fr)",option4:"blah",correct:"Francium (Fr)"}
];

//PREPARE GAME AND SHOW 1ST QUESTION

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
                        <label for="option1">${quizQuestions[currentQuestionNumberIndex].option1}</label>
                        <br>
                        <input id="option2" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option2}">
                        <label for="option2">${quizQuestions[currentQuestionNumberIndex].option2}</label>
                        <br>
                    </div>
                    <div class="col-12 col-md-6">
                        <input id="option3" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option3}">
                        <label for="option3">${quizQuestions[currentQuestionNumberIndex].option3}</label>
                        <br>
                        <input id="option4" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option4}">
                        <label for="option4">${quizQuestions[currentQuestionNumberIndex].option4}</label>
                    </div>
                </div>
            </div>
            `;
};

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
    if (userResult) {
        document.getElementById("user_feedback").innerHTML=`Well done you got it correct!`;
        [numberCorrect,percentCorrect,numberIncorrect,percentIncorrect]=updateProgressBarCorrect(numberCorrect,percentCorrect,numberIncorrect,percentIncorrect);
        return [numberCorrect,percentCorrect,numberIncorrect,percentIncorrect];
    } else {
        document.getElementById("user_feedback").innerHTML=`Sorry you got it wrong, the correct answer is ${quizQuestions[currentQuestionNumberIndex].correct}.`;
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