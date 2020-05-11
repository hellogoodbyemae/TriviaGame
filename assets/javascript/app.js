// PSEUDOCODE: 
// 1. Create START button to begin quiz.
//      1. When START is clicked, the game fills screen and START disappears.
// 2. Begin 120 SECOND TIMER to answer the multiple choice questions.
//      1. IF all questions are answered before time runs out, game ends.
//      2. IF time runs out before all questions are answered, game ends.
// 
// 3. Display results. Results fill screen and game disappears.
//      1. End Results.
//      2. Correct Answers.
//      3. Incorrect Answers.
//      4. Unanswered.

$(document).ready(function() {

    var number = 30;
    var intervalId;
    var rightCount = 0;
    var wrongCount = 0;
    var unanswered = 0;

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    $(window).on("load", hide);

    $('#start').on('click', function(){
        $(this).hide();
        show();
        run();
    });

    $('#done').on('click', function(){
        $('#start').hide();
        hide();
        results();
        stop();
    });

    function results(){
        var finish = $('<h2>').html('You Finished!');
        var correct = $('<p>').html('Correct: ' + rightCount);
        var incorrect = $('<p>').html('Incorrect: ' + wrongCount);
        var noAnswer = $('<p>').html('Unanswered: ' + unanswered);
        var newDiv = $('<div class="timer text-center" id="summary">');
        newDiv.append(finish);
        newDiv.append(correct);
        newDiv.append(incorrect);
        newDiv.append(noAnswer);
        $('.top:nth(2)').append(newDiv);
    }

    function decrement(){
        number--;

        $("#timer").html(" " + number + " seconds");

        if (number === 1) {
            $("#timer").html(" " + number + " seconds");
        }
        else if (number === 0) {
            $('#start').hide();
            hide();
            results();
            stop();
        }
    }

    function stop(){
        clearInterval(intervalId);
    }

    function hide(){
        $('.form-group').hide();
        $('#time').hide();
        $('#done').hide();
    }

    function show(){
        $('.q1').show();
        $('#time').show();
        $('#done').show();
    }

    $('input[type=radio]').on("change", function(){
        rightCount = $('input[value=right]:checked').length;
        wrongCount = $('input[value=wrong]:checked').length;
        unanswered = (5-(rightCount + wrongCount));
    });
})