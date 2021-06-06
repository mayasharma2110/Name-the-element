// once the form is sumbitted get user answers and log to console
function startGame(event){

    // prevent default
    event.preventDefault();

    console.log("form submitted");

    //get user choices
    let number = parseInt($('[name="number_of_questions"]:checked')[0].value);
    let difficulty = $('[name="difficulty_level"]:checked')[0].value;
    let timer = $('[name="timer_yn"]:checked')[0].value;
    
    //save variables to local storage
    localStorage.setItem("number", number);
    localStorage.setItem("difficulty", difficulty);
    localStorage.setItem("timer", timer);

    // localStorage.setItem("lastname", "Smith");

    //submit form
    form1.submit();

};

let form1=document.getElementById("user-options");
if (document.body.contains(form1)) {
    form1.addEventListener('submit',startGame);
};