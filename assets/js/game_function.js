// Make a var for the question text
var question = document.getElementById("questions");
// Make a array for the options
var options = Array.from(document.getElementsByClassName("options-txt"));
// Make an empty object for the current question
var currentQuestion = {};
// Make a empty array for the list of questions
var questionList = [];
// Make a var for the starting score
var score = 0;
// Make a var for the amount of questions in the quiz if you beat the timer
var maxQuestions = 18;
// Fill out list of questions and make new array to put them in
var questions = [
    {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "What does href stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }
];

