var questions = [{
    ques: "Which NFL team overcame a 25-point deficit to win the 2017 Super Bowl?",
    ans: ["New England Patriots", "Carolina Panthers", "Baltimore Ravens", "Chicago Bears"],
    name: "overcome",
    correct: "New England Patriots",
    divClass: ".overcome"
},
{
    ques: "What football team had the biggest scoring comeback in the history of the Super Bowl?",
    ans: ["Pittsburgh Steelers", "Green Bay Packers", "Dallas Cowboys", "New England Patriots"],
    name: "comeback",
    correct: "New England Patriots",
    divClass: ".comeback"
},
{
    ques: "Who is the only athlete ever to play in a Super Bowl and a World Series?",
    ans: ["Cam Newton", "Deion Sanders", "Odell Beckham", "Tom Brady"],
    name: "worldSeries",
    correct: "Deion Sanders",
    divClass: ".worldSeries"
},
{
    ques: "Which team won the 2016 Super Bowl??",
    ans: ["Minnesota Vikings", "New Engand Patriots", "Oakland Raiders", "Denver Broncos"],
    name: "16Bowl",
    correct: "Denver Broncos",
    divClass: ".16Bowl"
},
{
    ques: "What was the first wild card NFL team to win the Super Bowl?",
    ans: ["The 1980 Oakland Raiders", " The 1990 Detroit Lions", "The 1988 New Yor Jets", "The 1950 New Orleans Saints"],
    name: "firstWild",
    correct: "The 1980 Oakland Raiders",
    divClass: ".firstWild"
},
{
    ques: "Which team won the NFL's first Super Bowl?",
    ans: ["Loas Angeles Rams", "Carolina Panthers", "Green Bay Packers", "Denver Broncos"],
    name: "firstSuperBowl",
    correct: "Green Bay Packers",
    divClass: ".firstSuperBowl"
},
{
    ques: "What is the name of the stadium where Super Bowl XLVIII will be played?",
    ans: ["MetLife Stadium", "Fedex Field", "Lucas Oil Stadium", "Hard Rock Stadium"],
    name: "stadiumBowl",
    correct: "MetLife Stadium",
    divClass: ".stadiumBowl"
},
{
    ques: "This quarterback holds the record for most passing touchdowns in a Super Bowl with 6.",
    ans: ["Jim Kelly", " Joe Montana", "Steve Young", "Troy Aikman"],
    name: "mostPassing",
    correct: "Steve Young",
    divClass: ".mostPassing"
},
{
    ques: "Who performed during halftime of Super Bowl XLII?",
    ans: ["Elton John", "Rod Stewart", "Tom Petty", "Rolling Stones"],
    name: "halftimeShow",
    correct: "Tom Petty",
    divClass: ".halftimeShow"
},
{
    ques: "This quarterback has been named Super Bowl MVP a record 3 times.",
    ans: ["Tom Brady", "Terry Bradshaw", "Joe Montana", "Bart Starr"],
    name: "bowlMVP",
    correct: "Joe Montana",
    divClass: ".bowlMVP"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz