// SET UP GAME

let quizQuestions;

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

prepareGame();

function prepareGame() {

    // show current question number in bar
    currentQuestionBar();

    // get quiz questions
    getQuizQuestions();

    // display question and options
    displayQuestion();
    
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
    // if (localStorage.getItem("difficulty")=="easy") {
    //     quizQuestions=questionsEasy.slice(0,localStorage.getItem("number"));    
    // }
    // else if (localStorage.getItem("difficulty")=="medium") {
    //     quizQuestions=questionsMedium.slice(0,localStorage.getItem("number")); 
    // }
    // else if (localStorage.getItem("difficulty")=="hard") {
    //     quizQuestions=questionsHard.slice(0,localStorage.getItem("number")); 
    // }
    if (difficulty=="easy") {
        //randomize order of questions
        quizQuestions=questionsEasy.slice(0,number);    
    }
    else if (difficulty=="medium") {
        //randomize order of questions
        quizQuestions=questionsMedium.slice(0,number); 
    }
    else if (difficulty=="hard") {
        //randomize order of questions
        quizQuestions=questionsHard.slice(0,number); 
    }
    // console.log(quizQuestions[0].question);
};

// display question and options
function displayQuestion() {

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
    updateCurrentQuestionBar();

    // show next question button and hide submit button
    showNextQuestionButton();

    // check answer and give feedback, also update progress bar based on userResult
    displayFeedback(userAnswer);

};

function updateCurrentQuestionBar() {
    // console.log(currentQuestionNumber);;
    // console.log(currentQuestionNumberIndex);
    $("#current_question").children().first().removeClass("current_question_color").addClass("completed_question_color");
}

let userSubmit=document.getElementById("user_picks");
if (document.body.contains(userSubmit)) {
    userSubmit.addEventListener('submit',sumbittedAnswer);
};

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
    if (number==5) {
        let percentadd=1/number*100;
        let percentCorrect=currentCorrect+percentadd;
        document.getElementById("progress_bar").innerHTML=`
            <div class="progress">
                <div class="progress-bar bg-incorrect" role="progressbar" style="width: ${percentIncorrect}%" aria-valuenow="${percentIncorrect}" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-correct" role="progressbar" style="width: ${percentCorrect}%" aria-valuenow="${percentCorrect}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
    }
    else if (number==10) {
        let percentadd=1/number*100;
        let percentCorrect=currentCorrect+percentadd;
        document.getElementById("progress_bar").innerHTML=`
            <div class="progress">
                <div class="progress-bar bg-incorrect" role="progressbar" style="width: ${percentIncorrect}%" aria-valuenow="${percentIncorrect}" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-correct" role="progressbar" style="width: ${percentCorrect}%" aria-valuenow="${percentCorrect}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
    }
    else if (number==15) {
        let percentadd=1/number*100;
        let percentCorrect=currentCorrect+percentadd;
        document.getElementById("progress_bar").innerHTML=`
            <div class="progress">
                <div class="progress-bar bg-incorrect" role="progressbar" style="width: ${percentIncorrect}%" aria-valuenow="${percentIncorrect}" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-correct" role="progressbar" style="width: ${percentCorrect}%" aria-valuenow="${percentCorrect}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
    }
}

function updateProgressBarIncorrect() {
    if (number==5) {
        let percentadd=1/number*100;
        let percentIncorrect=currentIncorrect+percentadd;
        document.getElementById("progress_bar").innerHTML=`
            <div class="progress">
                <div class="progress-bar bg-incorrect" role="progressbar" style="width: ${percentIncorrect}%" aria-valuenow="${percentIncorrect}" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-correct" role="progressbar" style="width: ${percentCorrect}%" aria-valuenow="${percentCorrect}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
    }
    else if (number==10) {
        let percentadd=1/number*100;
        let percentIncorrect=currentIncorrect+percentadd;
        document.getElementById("progress_bar").innerHTML=`
            <div class="progress">
                <div class="progress-bar bg-incorrect" role="progressbar" style="width: ${percentIncorrect}%" aria-valuenow="${percentIncorrect}" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-correct" role="progressbar" style="width: ${percentCorrect}%" aria-valuenow="${percentCorrect}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
    }
    else if (number==15) {
        let percentadd=1/number*100;
        let percentIncorrect=currentIncorrect+percentadd;
        document.getElementById("progress_bar").innerHTML=`
            <div class="progress">
                <div class="progress-bar bg-incorrect" role="progressbar" style="width: ${percentIncorrect}%" aria-valuenow="${percentIncorrect}" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-correct" role="progressbar" style="width: ${percentCorrect}%" aria-valuenow="${percentCorrect}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
    }
}


// next question event listener - if last question dont show next question button
    // update current question bar
    // show next question
    // redisplay submit button and remove next question button
// submit button event listener - if last question dont show next question button, this will be play again instead, also will show overall feedback to user



