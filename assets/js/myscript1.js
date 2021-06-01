// declare variables to be assigned later
let quiz_questions;
let number;
let difficulty;
let timer;

// array to store dictionaries of question data
// 1 array for each difficulty level
let questions_easy=[{question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"}];

let questions_medium=[{question:"20% of _____ found in the environment is a result of Amazon rainforest.",option1:"nitrogen",option2:"oxygen",option3:"carbon dioxide",option4:"hydrogen",correct:"oxygen"}];

let questions_hard=[{question:"blah",option1:"blah",option2:"blah",option3:"blah",option4:"blah",correct:"blah"}];

// hide introductory element and show quiz div
function hide_show() {
    document.getElementById("introduction").style.display="none";
    document.getElementById("quiz").style.display="block";
}

// get quiz questions
function get_quiz_questions() {
    if (difficulty=="easy") {
        quiz_questions=questions_easy;    
    }
    else if (difficulty=="medium") {
        quiz_questions=questions_medium;
    }
    else if (difficulty=="hard") {
        quiz_questions=questions_hard;
    }
    // console.log(quiz_questions[0].question);
}

// display question and options
function display_question() {

    let number=1;
    let index_number=0;

    document.getElementById("question_text").innerHTML=`Question ${number}: ${quiz_questions[index_number].question}`;
    document.getElementById("options").innerHTML=`
            <input id="option1" type="radio" name="option" value="option1" required>
            <label for="option1">${quiz_questions[index_number].option1}</label>
            <br>
            <input id="option2" type="radio" name="option" value="option2" required>
            <label for="option2">${quiz_questions[index_number].option2}</label>
            <br>
            <input id="option3" type="radio" name="option" value="option3" required>
            <label for="option3">${quiz_questions[index_number].option3}</label>
            <br>
            <input id="option4" type="radio" name="option" value="option4" required>
            <label for="option4">${quiz_questions[index_number].option4}</label>
            `;
}

// after the user clicks submit, hide the form/intro text and start the quiz;
function prepare_game() {
    // console.log(number);
    // console.log(difficulty);
    // console.log(timer);

    // hide introductory element and show quiz div
    hide_show();
    
    // get quiz questions
    get_quiz_questions();

    // display question and options
    display_question();

}

//export let test="25343555";

// once the form is sumbitted get user answers and log to console


function handleSumbit(event){

    // prevent default
    event.preventDefault();

    // console.log("form submitted");

    // get user input and save as variables;
    var radio1 = document.getElementsByName('number_of_questions');
    for (var i = 0; i < radio1.length; i++) {
    if (radio1[i].checked) {
        number=radio1[i].value;
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
    prepare_game();

};

let form1=document.getElementById("user-options");
form1.addEventListener('submit',handleSumbit);

// user submits an answer to a question
// function submit_ans(event){

    // prevent default
    // event.preventDefault();

    // get user input and save as variables;
    // var radio1 = document.getElementsByName('number_of_questions');
    // for (var i = 0; i < radio1.length; i++) {
    // if (radio1[i].checked) {
    //     number=radio1[i].value;
    //     // console.log(number);
    //     // only one radio can be logically checked, don't check the rest
    //     break;
    //     }
    // }

    // display feedback

    // show next question button and remove submit button

    // update progress bar

// };

// let submit_ans=document.getElementById("submit_answer");
// submit_ans.addEventListener('submit',handleSumbit);
