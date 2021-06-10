// SET UP GAME

// START ON QUESTION 1 OF GAME
let currentQuestionNumber=1;
let currentQuestionNumberIndex=0;

// START PROGRESS BAR ON 0 (CORRECT) and 0 (INCORRECT)
let currentCorrect = 0;
let currentIncorrect = 0;
let percentIncorrect = 0;
let percentCorrect = 0;

// VARIABLES FROM LOVAL STORAGE
let number = localStorage.getItem("number");
let difficulty = localStorage.getItem("difficulty");
let timer = localStorage.getItem("timer");

// ARRAYs TO STORE OBJECTS OF QUESTION DATA, 1 ARRAY FOR EACH DIFFICULT LEVEL

let questionsEasy=[
    {question:"The chemical forumla for table salt is soduim ________.",option1:"option1",option2:"option2",option3:"chloride (Cl)",option4:"option4",correct:"chloride (Cl)"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"}
];

let questionsMedium=[
    {question:"20% of ________ found in the environment is a result of Amazon rainforest.",option1:"nitrogen (N)",option2:"oxygen (O)",option3:"carbon dioxide (CO2)",option4:"hydrogen (H)",correct:"oxygen (O)"},
    {question:"The only two non-silvery metals are gold and _____",option1:"copper (Cu)",option2:"blah",option3:"blah",option4:"blah",correct:"copper (Cu)"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"}
];

let questionsHard=[
    {question:"Lightning strikes produce ________, which produces the characteristic smell after lightning storms.",option1:"ozone (O3)",option2:"blah",option3:"blah",option4:"blah",correct:"ozone (O3)"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"},
    {question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"}
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
        // console.log("show 5 questions");   
        document.getElementById("current_question").innerHTML=`
        <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
        `;
    }
    else if (number==10) {
        // console.log("show 10 questions");  
        document.getElementById("current_question").innerHTML=`
        <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
        <div>6</div> <div>7</div> <div>8</div> <div>9</div> <div>10</div>
        `;
    }
    else if (number==15) {
        // console.log("show 15 questions"); 
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

    // document.getElementById("question_text").innerHTML=`Question ${currentQuestionNumber}`;
    document.getElementById("question_text").innerHTML=`Question ${currentQuestionNumber}: ${quizQuestions[currentQuestionNumberIndex].question}`;
    document.getElementById("options").innerHTML=`
            <input id="option1" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option1}" required>
            <label for="option1">${quizQuestions[currentQuestionNumberIndex].option1}</label>
            <br>
            <input id="option2" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option2}">
            <label for="option2">${quizQuestions[currentQuestionNumberIndex].option2}</label>
            <br>
            <input id="option3" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option3}">
            <label for="option3">${quizQuestions[currentQuestionNumberIndex].option3}</label>
            <br>
            <input id="option4" type="radio" name="option" value="${quizQuestions[currentQuestionNumberIndex].option4}">
            <label for="option4">${quizQuestions[currentQuestionNumberIndex].option4}</label>
            `;
};

//USER SUMBITS AN ANSWER
function sumbittedAnswer(event){

    // prevent default
    event.preventDefault();

    // get user input and save as variables;
    let userAnswer=$('[name="option"]:checked')[0].value

    // update current question bar 
    updateCompleteQuestionBar(currentQuestionNumber,currentQuestionNumberIndex);


    // check answer and give feedback, also update progress bar based on userResult
    displayFeedback(userAnswer);

    // IF NOT LAST QUESTION

    // show next question button and hide submit button
    showNextQuestionButton();

    // IF LAST QUESTION

    // show play again button and hide submit button
    // showPlayAgainButton();
    // display overall feedback to user
    // overallFeedback();

};

let userSubmit=document.getElementById("user_picks");
userSubmit.addEventListener('submit',sumbittedAnswer);

function updateCompleteQuestionBar(currentQuestionNumber,currentQuestionNumberIndex) {
    $("#current_question").children().eq(currentQuestionNumberIndex).removeClass("current_question_color").addClass("completed_question_color");
}

function showNextQuestionButton(){
    $("#next_question").children().removeClass("hide").addClass("show");
    $("#submit_answer").removeClass("show").addClass("hide"); 
}

function displayFeedback(userAnswer) {

    // console.log(userAnswer);
    let userResult = userAnswer===quizQuestions[currentQuestionNumberIndex].correct;
    if (userResult) {
        document.getElementById("user_feedback").innerHTML=`Well done you got it correct!`;
        updateProgressBarCorrect();
    } else {
        document.getElementById("user_feedback").innerHTML=`Sorry you got it wrong, the correct answer is ${quizQuestions[currentQuestionNumberIndex].correct}`;
        updateProgressBarIncorrect();
    }
}

function updateProgressBarCorrect() {
    // let percentadd=1/number*100;
    percentCorrect=currentCorrect+1/number*100;
    document.getElementById("progress_bar").innerHTML=`
        <div class="progress">
            <div class="progress-bar bg-incorrect" role="progressbar" style="width: ${percentIncorrect}%" aria-valuenow="${percentIncorrect}" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-correct" role="progressbar" style="width: ${percentCorrect}%" aria-valuenow="${percentCorrect}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`;
}

function updateProgressBarIncorrect() {
    // let percentadd=1/number*100;
    percentIncorrect=currentIncorrect+1/number*100;
    document.getElementById("progress_bar").innerHTML=`
        <div class="progress">
            <div class="progress-bar bg-incorrect" role="progressbar" style="width: ${percentIncorrect}%" aria-valuenow="${percentIncorrect}" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-correct" role="progressbar" style="width: ${percentCorrect}%" aria-valuenow="${percentCorrect}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`;
}

//USER CLICKS NEXT QUESTION
function nextQuestion(event){

    // increment variable values
    currentQuestionNumber++;
    currentQuestionNumberIndex++;
    console.log(currentQuestionNumber);

    //clear user feedback
    clearUserFeedback();
    
    // update current question bar 
    updateCurrentQuestionBar(currentQuestionNumber,currentQuestionNumberIndex);

    // display question and options
    displayQuestion(quizQuestions, currentQuestionNumber, currentQuestionNumberIndex);

    // IF NOT LAST QUESTION

    // show next submit button and hide next question button
    showSubmitButton();

    // IF LAST QUESTION

    // show play again button and hide submit button
    // showPlayAgainButton();
    // display overall feedback to user
    // overallFeedback();

};

let userNextQuestion=document.getElementById("next_question").children[0];
userNextQuestion.addEventListener('click',nextQuestion);

function clearUserFeedback() {
    $("#user_feedback").html("");
}

function updateCurrentQuestionBar(currentQuestionNumber, currentQuestionNumberIndex) {
    $("#current_question").children().eq(currentQuestionNumberIndex).addClass("current_question_color");
}

function showSubmitButton() {
    $("#next_question").children().removeClass("show").addClass("hide");
    $("#submit_answer").removeClass("hide").addClass("show"); 
}