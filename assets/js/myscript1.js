// declare variables to be assigned later
let quizQuestions;
let number;
let difficulty;
let timer;

// start on question 1 for quiz
let currentQuestionNumber=1;
let currentQuestionNumberIndex=0;

// array to store dictionaries of question data
// 1 array for each difficulty level
let questionsEasy=[
    {question:"The chemical forumla for table salt is soduim ________.",option1:"blah",option2:"blah",option3:"chloride (Cl)",option4:"blah",correct:"chloride (Cl)"},
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

// hide introductory element and show quiz div
function showQuiz() {
    document.getElementById("introduction").style.display="none";
    document.getElementById("quiz").style.display="block";
};

function currentQuestionBar() {
    if (number==5) {
        // console.log("show 5 questions");   
        document.getElementById("current_question").innerHTML=`
        <span>1</span> <span>2</span> <span>3</span> <span>4</span> <span>5</span>
        `;
    }
    else if (number==10) {
        // console.log("show 10 questions");  
        document.getElementById("current_question").innerHTML=`
        <span>1</span> <span>2</span> <span>3</span> <span>4</span> <span>5</span>
        <span>6</span> <span>7</span> <span>8</span> <span>9</span> <span>10</span>
        `;
    }
    else if (number==15) {
        // console.log("show 15 questions"); 
        document.getElementById("current_question").innerHTML=`
        <span>1</span> <span>2</span> <span>3</span> <span>4</span> <span>5</span>
        <span>6</span> <span>7</span> <span>8</span> <span>9</span> <span>10</span>
        <span>11</span> <span>12</span> <span>13</span> <span>14</span> <span>15</span>
        `; 
    }
};

// get quiz questions
function getQuizQuestions() {
    if (difficulty=="easy") {
        quizQuestions=questionsEasy;    
    }
    else if (difficulty=="medium") {
        quizQuestions=questionsMedium;
    }
    else if (difficulty=="hard") {
        quizQuestions=questionsHard;
    }
    // console.log(quizQuestions[0].question);
};

// display question and options
function displayQuestion() {

    // current question number is already defined to 1 and its index to 0

    document.getElementById("question_text").innerHTML=`Question ${currentQuestionNumber}: ${quizQuestions[currentQuestionNumberIndex].question}`;
    document.getElementById("options").innerHTML=`
            <input id="option1" type="radio" name="option" value="option1" required>
            <label for="option1">${quizQuestions[currentQuestionNumberIndex].option1}</label>
            <br>
            <input id="option2" type="radio" name="option" value="option2">
            <label for="option2">${quizQuestions[currentQuestionNumberIndex].option2}</label>
            <br>
            <input id="option3" type="radio" name="option" value="option3">
            <label for="option3">${quizQuestions[currentQuestionNumberIndex].option3}</label>
            <br>
            <input id="option4" type="radio" name="option" value="option4">
            <label for="option4">${quizQuestions[currentQuestionNumberIndex].option4}</label>
            `;
};

// after the user clicks submit, hide the form/intro text and start the quiz;
function prepareGame() {
    // console.log(number);
    // console.log(difficulty);
    // console.log(timer);

    // hide introductory element and show quiz div
    showQuiz();

    // show current question number in bar
    currentQuestionBar();

    // get quiz questions
    getQuizQuestions();

    // display question and options
    displayQuestion();

    // display progress bar
    
};

// once the form is sumbitted get user answers and log to console
function handleSumbit(event){

    // prevent default
    event.preventDefault();

    // console.log("form submitted");

    // get user input and save as variables;
    var radio1 = document.getElementsByName('number_of_questions');
    for (var i = 0; i < radio1.length; i++) {
    if (radio1[i].checked) {
        number=parseInt(radio1[i].value);
        // console.log(number);
        // only one radio can be logically checked, don't check the rest
        break;
        }
    }

    var radio2 = document.getElementsByName('difficulty_level');
    for (var i = 0; i < radio2.length; i++) {
    if (radio2[i].checked) {
        difficulty=radio2[i].value;
        // console.log(difficulty);
        break;
        }
    }

    var radio3 = document.getElementsByName('timer_yn');
    for (var i = 0; i < radio3.length; i++) {
    if (radio3[i].checked) {
        timer=radio3[i].value;
        // console.log(timer);
        break;
        }
    }

    // prepare game
    prepareGame();

};

let form1=document.getElementById("user-options");
form1.addEventListener('submit',handleSumbit);

// user submits an answer to a question
function sumbittedAnswer(event){

    // prevent default
    event.preventDefault();

    // get user input and save as variables;
    // var radio = document.getElementsByName('option');
    // for (var i = 0; i < radio.length; i++) {
    // if (radio[i].checked) {
    //     user_ans=radio1[i].value;
    //     // console.log(user_ans);
    //     // only one radio can be logically checked, don't check the rest
    //     break;
    //     };
    // };

    console.log("submitted answer");

    // display feedback

    // show next question button and remove submit button

    // update progress bar

};

let userSubmit=document.getElementById("submit_answer");
userSubmit.addEventListener('submit',sumbittedAnswer);

// next question event listener
// update current question bar
// show next question
// redisplay submit button and remove next question button
