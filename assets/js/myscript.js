console.log("hello");

// once the form is sumbitted get user answers and log to console

function submitted_form(event) {

    // prevent default
    event.preventDefault();

    // get user input and save as variables and log to console
    var radio1 = document.getElementsByName('number_of_questions');
    for (var i = 0; i < radio1.length; i++) {
    if (radio1[i].checked) {
        // do whatever you want with the checked radio
        let number=radio1[i].value;
        console.log(number);
        // only one radio can be logically checked, don't check the rest
        break;
        }
    }

    var radio2 = document.getElementsByName('difficulty_level');
    for (var i = 0; i < radio2.length; i++) {
    if (radio2[i].checked) {
        let difficulty=radio2[i].value;
        console.log(difficulty);
        break;
        }
    }

    var radio3 = document.getElementsByName('timer_yn');
    for (var i = 0; i < radio3.length; i++) {
    if (radio3[i].checked) {
        let timer=radio3[i].value;
        console.log(timer);
        break;
        }
    }

    // submit form
    usereoptionsform.submit();
};

let usereoptionsform=document.getElementById("user-options");
usereoptionsform.addEventListener("sumbit",submitted_form);