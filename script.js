var Lessons = [
    {
        lessons: ["Mathematics"],
        tasks: [
            { text: "2 + 2 =", answer: "4" },
            { text: "5 * 5 =", answer: "25" },
            { text: "10 / 2 =", answer: "5" }
        ],
        completedTasks: 0,
        totalTasks: 3
    },
    {
        lessons: ["Geometry"],
        tasks: [
            { text: "Calculate the area of a square with side length 4.", answer: "16" },
        ],
        completedTasks: 0,
        totalTasks: 1
    },
    {
        lessons: ["History"],
        tasks: [
            { text: "Who was the first president of the United States?", answer: "George Washington" },
        ],
        completedTasks: 0,
        totalTasks: 1
    },
    {
        lessons: ["Science"],
        tasks: [
            { text: "What is the chemical symbol for water?", answer: "H2O" },
        ],
        completedTasks: 0,
        totalTasks: 1
    }
];

var totalLessons = Lessons.length;
var currentLesson = 0;
var userScore = 0;

function startLesson() {
    displayLessons();
}

function displayLessons() {
    var lessonsWrapper = document.getElementById("lessons-wrapper");
    lessonsWrapper.innerHTML = "";

    for (var i = 0; i < totalLessons; i++) {
        var lesson = Lessons[i];
        var lessonDiv = document.createElement("div");
        lessonDiv.className = "lesson";
        lessonDiv.textContent = lesson.lessons[0];
        lessonDiv.setAttribute("onclick", "selectLesson(" + i + ")");
        lessonsWrapper.appendChild(lessonDiv);
    }
}

function selectLesson(index) {
    currentLesson = index;
    displayLessonTasks();
}

function displayLessonTasks() {
    var tasksContainer = document.getElementById("lesson-tasks-container");
    tasksContainer.innerHTML = "<h3>" + Lessons[currentLesson].lessons[0] + " Tasks</h3>";

    var lessonTasks = Lessons[currentLesson].tasks;
    for (var i = 0; i < lessonTasks.length; i++) {
        var task = lessonTasks[i];
        var taskDiv = document.createElement("div");
        taskDiv.innerHTML = "<p>" + task.text + "</p>";
        var input = document.createElement("input");
        input.type = "text";
        input.id = "task" + i;
        taskDiv.appendChild(input);
        tasksContainer.appendChild(taskDiv);
    }

    var submitButton = document.createElement("button");
    submitButton.className = "primary"; 
    submitButton.textContent = "Submit";
    submitButton.setAttribute("onclick", "checkAnswers()");
    tasksContainer.appendChild(submitButton);

    var retryButton = document.createElement("button");
    retryButton.className = "secondary";
    retryButton.textContent = "Retry";
    retryButton.setAttribute("onclick", "retryLesson()");
    tasksContainer.appendChild(retryButton);
}

function checkAnswers() {
    var lessonTasks = Lessons[currentLesson].tasks;
    var completedTasks = 0;

    for (var i = 0; i < lessonTasks.length; i++) {
        var userAnswer = document.getElementById("task" + i).value.trim().toLowerCase();
        var correctAnswer = lessonTasks[i].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            completedTasks++;
        }
    }

    Lessons[currentLesson].completedTasks = completedTasks;
    userScore += completedTasks;

    if (completedTasks === lessonTasks.length) {
        displayMessage("Congratulations! You've completed the lesson.");
        nextLesson();
    } else {
        displayMessage("You completed " + completedTasks + " out of " + lessonTasks.length + " tasks. Retry?");
    }
}

function displayMessage(message) {
    var messageContainer = document.getElementById("message-container");
    messageContainer.textContent = message;
}

function retryLesson() {
    displayLessonTasks();
}

function nextLesson() {
    currentLesson++;

    if (currentLesson < totalLessons) {
        displayLessonTasks();
    } else {
        displayCompletion();
    }
}

function displayCompletion() {
    var tasksContainer = document.getElementById("lesson-tasks-container");
    tasksContainer.innerHTML = "<h3>Congratulations! You've completed all lessons.</h3>";

    displayMessage("Congratulations! You've completed all lessons.");

    var percentContainer = document.getElementById("percent-container");
    percentContainer.innerHTML = "<h4>Percentage completion for each section:</h4>";

    for (var i = 0; i < totalLessons; i++) {
        var lesson = Lessons[i];
        var lessonPercent = Math.round((lesson.completedTasks / lesson.totalTasks) * 100);
        percentContainer.innerHTML += "<p>" + lesson.lessons[0] + ": " + lessonPercent + "%</p>";
    }

    var totalPercent = Math.round((userScore / (totalLessons * 30)) * 100);
    percentContainer.innerHTML += "<h4>Total Percentage: " + totalPercent + "%</h4>";
    
}
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");

    var container = document.querySelector(".container");
    container.classList.toggle("expanded");
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const header = document.getElementById("header");
    const body = document.body;

    sidebar.classList.toggle("sidebar-open");
    body.classList.toggle("no-scroll"); 


    const toggleBtn = document.getElementById("toggleBtn");
    toggleBtn.style.display = sidebar.classList.contains("sidebar-open") ? "none" : "block";
    header.classList.toggle("sidebar-open");
}

function expandSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("collapsed");

    var container = document.querySelector(".container");
    container.classList.add("expanded");
}
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
}
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");

    var container = document.querySelector(".container");
    container.classList.toggle("expanded");
}

function loadUser() {
}

function registerUser() {
}

function loadUser() {
}

function registerUser() {
}
