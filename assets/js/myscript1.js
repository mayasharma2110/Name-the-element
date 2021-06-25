// jshint esversion: 6

// once the form is sumbitted get user answers and log to console
function startGame(event){

    // prevent default
    event.preventDefault();

    //get user choices
    let number = parseInt($('[name="number_of_questions"]:checked')[0].value);
    let difficulty = $('[name="difficulty_level"]:checked')[0].value;
    let timer = $('[name="timer_yn"]:checked')[0].value;
    
    //save variables to local storage
    localStorage.setItem("number", number);
    localStorage.setItem("difficulty", difficulty);
    localStorage.setItem("timer", timer);

    //submit form
    document.getElementById("user-options").submit();

}

document.getElementById("user-options").addEventListener('submit',startGame);