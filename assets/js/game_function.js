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
        question: "What does 'href' stand for?",
        option1: "High Referee",
        option2: "Hyper Reference",//
        option3: "Hot Refrigerator",
        option4: "Home Refinance"
    }, {
        question: "Where should the <script> tag go in the HTML?",
        option1: "At the end of the <body> tag or in the head with a 'defer' attribute",//
        option2: "Anywhere on the page",
        option3: "Under a <div> tag",
        option4: "After a <link> tag"
    }, {
        question: "What practice of writing is this called: thisIsAnExample",
        option1: "Camel Case",//
        option2: "iPhone/eBay Case",
        option3: "Snake Case",
        option4: "Pascal Case"
    }, {
        question: "What does the '*' selector do in CSS?",
        option1: "Adds styling to all text elements on the page",
        option2: "Applies styling to the <body> tag of the page",
        option3: "Can be used to multiply integers in CSS",
        option4: "Selects and styles all elements in the HTML"//
    }, {
        question: "What does it mean for an element to end like this: '.../>'",
        option1: "It is a self-closing tag",//
        option2: "This tag is commented out",
        option3: "It is a tag located in the <head>",
        option4: "No styling can be applied to this tag"
    }, {
        question: "What is the JavaScript 'prompt()' command do?",
        option1: "Tells the user to write a function",
        option2: "Prompts the user to inspect the page",
        option3: "Prompts the user with a boolean input field",//
        option4: "Asks the user to go outside"
    }, {
        question: "What is jQuery?",
        option1: "An internet search engine",
        option2: "A source-code editor",
        option3: "A third-party API made to simplify DOM manipulation & JavaScript code",//
        option4: "An open-source mod for 'Doom'(1993 video game)"
    }, {
        question: "What's the difference between a function declaration and a function expression?",
        option1: "Declaration names a function for later use, expression stores the function in a var/const",//
        option2: "Expressions are hoisted to the top of the code, but declarations are not",
        option3: "Expressions require a name, declarations do not",
        option4: "Declarations do not apply to the global scope, but expressions do"
    }, {
        question: "Which of these is not a primitive type of JavaScript data?",
        option1: "boolean",
        option2: "string",
        option3: "function",//
        option4: "null"
    }, {
        question: "What is the difference between '#' and '.' in a CSS file?",
        option1: "'#' denotes pseudo-elements, '.' denotes pseudo-classes",
        option2: "'.' is used to select a class attribute from the HTML, '#' is used to select an ID attribute",//
        option3: "'#' selects all numbers on the page, '.' selects all complete sentences",
        option4: "'.' specifies a single, unique element to select, '#' selects styles for a group of elements"
    }, {
        question: "What is the emmet abbreviation for setting up an empty HTML page?",
        option1: "type .html, then tab",
        option2: "type !, then tab",//
        option3: "type #html, thentab",
        option4: "type html+, then tab"
    }, {
        question: "What is the CSS box model?",
        option1: "Makes a box for text input under elements",
        option2: "Adds styling to all bordered <div> elements",
        option3: "The margin, border, padding, and content of the box surrounding every HTML element",//
        option4: "A way to seperate all images and text from each other by putting them in their own box"
    }, {
        question: "Where should one use <div> tags?",
        option1: "Only under the <head> tag",
        option2: "To add breaks to parts of the HTML where another tag would be innapropriate",//
        option3: "<div> tags are the best tags and should be used as often as possible",
        option4: "To specifically represent an independent item section of content"
    }, {
        question: "What should the last line of code on a HTML source page be?",
        option1: "</body>",
        option2: "<script src=''></script>",
        option3: "</html>",//
        option4: "</div>"
    }, {
        question: "What denotes a string in JavaScript?",
        option1: "var, const, or a let statement",
        option2: "At least 3 dashes or underscores surrounding the data",
        option3: "Data being true or false",
        option4: "Single or double quotes surrounding the data"//
    }, {
        question: "Which of these is not one of the five CSS positioning methods?",
        option1: "Static",
        option2: "Anchored",//
        option3: "Absolute",
        option4: "Relative"
    }, {
        question: "What does ':hover' pseudo-class do in the CSS?",
        option1: "Applies styles depending on the status of content",
        option2: "Applies styles depending on if the user can edit the code",
        option3: "Applies styles if the mouse pointer is on top of the selected element",//
        option4: "Applies styles if they include a hoverboard"
    }, {
        question: "What is a high level, list-like, unfixed object in JavaScript?",
        option1: "const",
        option2: "array",//
        option3: "if statement",
        option4: "jQuery"
    }
];

