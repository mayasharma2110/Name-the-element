window.onload = console.log("hello");

// user responses
let number;
let difficulty;
let timer;

// once the form is sumbitted get user answers and log to console

function handleSumbit(event){

    // prevent default
    event.preventDefault();

    console.log("form submitted");

    // get user input and save as (global) variables and log to console
    var radio1 = document.getElementsByName('number_of_questions');
    for (var i = 0; i < radio1.length; i++) {
    if (radio1[i].checked) {
        number=radio1[i].value;
        console.log(number);
        // only one radio can be logically checked, don't check the rest
        break;
        }
    }

    var radio2 = document.getElementsByName('difficulty_level');
    for (var i = 0; i < radio2.length; i++) {
    if (radio2[i].checked) {
        difficulty=radio2[i].value;
        console.log(difficulty);
        break;
        }
    }

    var radio3 = document.getElementsByName('timer_yn');
    for (var i = 0; i < radio3.length; i++) {
    if (radio3[i].checked) {
        timer=radio3[i].value;
        console.log(timer);
        break;
        }
    }
    console.log(timer);

    // export number, difficulty and timer variables to be used in myscript2/quiz.html
    // export number;
    // export difficulty;
    // export timer;

    // submit form
    //form1.submit();

};

let form1=document.getElementById("user-options");
form1.addEventListener('submit',handleSumbit);

    