// PSEUDOCODE: 
// 1. Create START button to begin quiz.
//      1. When START is clicked, the game fills screen and START disappears.
// 2. Begin 120 SECOND TIMER to answer the multiple choice questions.
//      1. IF all questions are answered before time runs out, game ends.
//      2. IF time runs out before all questions are answered, game ends.
// 
// 3. Display results.
//      1. Win/Lose Results.
//      2. Correct Answers.
//      3. Incorrect Answers.
//      4. Unanswered.

$(document).ready(function() {

    var number = 120;
    var timerId;
    var correctCount = 0;
    var incorrectCount = 0;
    var unanswered = 0;

    function run() {
        intervalId = setIterval(decrement, 1000);
    }

    function stop() {
        clearInterval(intervalId);
    }

    function show() {
        $('#time').show();
    }

    $('#start').on('click', function() {
        
    }

    $('input[type=radio]').on("change", function() {
        correctCount = $('input[value=right]:checked').length;
        incorrectCount = $('input[value=wrong]:checked').length;
        unanswered = (5-(correctCount + incorrectCount));
    })


})