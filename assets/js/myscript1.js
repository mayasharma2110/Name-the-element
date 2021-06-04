// SET UP GAME

// declare variables to be assigned later
let quizQuestions;
// let number;
// let difficulty;
// let timer;
let currentQuestionNumber=1;
let currentQuestionNumberIndex=0;

// array to store dictionaries of question data
// 1 array for each difficulty level
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

// USER PICKS CHOICES AND DISPLAY FIRST QUESTION

// current question bar
function currentQuestionBar() {
    if (localStorage.getItem("number")==5) {
        // console.log("show 5 questions");   
        document.getElementById("current_question").innerHTML=`
        <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
        `;
    }
    else if (localStorage.getItem("number")==10) {
        // console.log("show 10 questions");  
        document.getElementById("current_question").innerHTML=`
        <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
        <div>6</div> <div>7</div> <div>8</div> <div>9</div> <div>10</div>
        `;
    }
    else if (localStorage.getItem("number")==15) {
        // console.log("show 15 questions"); 
        document.getElementById("current_question").innerHTML=`
        <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
        <div>6</div> <div>7</div> <div>8</div> <div>9</div> <div>10</div>
        <div>11</div> <div>12</div> <div>13</div> <div>14</div> <div>15</div>
        `; 
    }
    //add background color to question no 1
    $("#current_question").children().first().addClass("current_question_color");
    // let currentQ=$("#current_question").children().first();
    // currentQ.addClass("current_question_color");

    // document.getElementById("current_question").innerHTML=`
    //     <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
    //     `;
};

// get quiz questions
function getQuizQuestions() {
    if (localStorage.getItem("difficulty")=="easy") {
        quizQuestions=questionsEasy.slice(0,localStorage.getItem("number"));    
    }
    else if (localStorage.getItem("difficulty")=="medium") {
        quizQuestions=questionsMedium.slice(0,localStorage.getItem("number")); 
    }
    else if (localStorage.getItem("difficulty")=="hard") {
        quizQuestions=questionsHard.slice(0,localStorage.getItem("number")); 
    }
    // console.log(quizQuestions[0].question);
    currentQuestionNumber=1;
    currentQuestionNumberIndex=0;
};

// display question and options
function displayQuestion() {

    // current question number is already defined to 1 and its index to 0
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

// after the user clicks submit, hide the form/intro text and start the quiz;
function prepareGame() {

    // get variales from localStorage

    // console.log(localStorage.getItem("number"));
    // console.log(localStorage.getItem("difficulty"));
    // console.log(localStorage.getItem("timer"));

    // show current question number in bar
    currentQuestionBar();

    // get quiz questions
    getQuizQuestions();

    // display question and options
    displayQuestion();

    // display progress bar
    
};

// once the form is sumbitted get user answers and log to console
function startGame(event){

    // prevent default
    event.preventDefault();
    //get user choices

    console.log("form submitted");

    // get user input and save as variables;
    var radio1 = document.getElementsByName('number_of_questions');
    for (var i = 0; i < radio1.length; i++) {
    if (radio1[i].checked) {
        // save to local storage as submitting form and going to new page clears variables
        localStorage.setItem("number", parseInt(radio1[i].value));
        // only one radio can be logically checked, don't check the rest
        break;
        }
    };

    var radio2 = document.getElementsByName('difficulty_level');
    for (var i = 0; i < radio2.length; i++) {
    if (radio2[i].checked) {
        // save to local storage as submitting form and going to new page clears variables
        localStorage.setItem("difficulty", radio2[i].value);
        break;
        }
    }

    var radio3 = document.getElementsByName('timer_yn');
    for (var i = 0; i < radio3.length; i++) {
    if (radio3[i].checked) {
        // save to local storage as submitting form and going to new page clears variables
        localStorage.setItem("timer", radio3[i].value);
        break;
        }
    }

    // localStorage.setItem("lastname", "Smith");

    //submit form
    form1.submit();

};

if (window.location.href.match('quiz.html') != null) {
   prepareGame();
  };

let form1=document.getElementById("user-options");
if (document.body.contains(form1)) {
    form1.addEventListener('submit',startGame);
};

//USER SUMBITS ANSWER

function displayFeedback(user_ans) {

    // console.log(user_ans);

    if (user_ans===quizQuestions[currentQuestionNumberIndex].correct) {
        document.getElementById("user_feedback").innerHTML=`Well done you got it correct!`;
    } else if (user_ans!=quizQuestions[currentQuestionNumberIndex].correct) {
        document.getElementById("user_feedback").innerHTML=`Sorry you got it wrong, the correct answer is ${quizQuestions[currentQuestionNumberIndex].correct}`;
    }

}


// user submits an answer to a question
function sumbittedAnswer(event){

    // prevent default
    event.preventDefault();

    // get user input and save as variables;
    var radio = document.getElementsByName('option');
    for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
        var user_ans=radio[i].value;
        // console.log(user_ans);
        // only one radio can be logically checked, don't check the rest
        break;
        };
    };

    // check answer and give feedback
    displayFeedback(user_ans);

    // update current question bar 

    // update progress bar

    // show next question button and remove submit button

};

let userSubmit=document.getElementById("user_picks");
if (document.body.contains(userSubmit)) {
    userSubmit.addEventListener('submit',sumbittedAnswer);
};

// next question event listener
// update current question bar
// show next question
// redisplay submit button and remove next question button
