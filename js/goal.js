const goalFormWrapper = document.querySelector("#goal-form-wrapper");
const goalPrintWrapper = document.querySelector("#goal-print-wrapper");
const goalForm = document.querySelector("#goal-form");
const goalInput = document.querySelector("#goal-form input");
const mainGoal = document.querySelector("#main-goal");
const checkbox = document.querySelector("#main-goal-wrapper .checkbox");
const checkIcon = document.querySelector("#checked");

const HIDDEN_CLASSNAME = "hidden";
const CANCEL_LINE_CLASSNAME = "cancel-line";
const MAIN_GOAL = "main_goal";
const MAIN_GOAL_CHECKED = "main_goal_checked";

let goal = "";
let checked = false;

function saveMainGoalChecked(checked) {
    localStorage.setItem(MAIN_GOAL_CHECKED, checked)
}

function saveMainGoal(newMainGoal) {
    localStorage.setItem(MAIN_GOAL, newMainGoal);
}

function paintMainGoal(newMainGoal) {
    goalFormWrapper.classList.add(HIDDEN_CLASSNAME);
    goalPrintWrapper.classList.remove(HIDDEN_CLASSNAME);
    mainGoal.innerHTML = newMainGoal;
}

function handleGoalSubmit(event) {
    event.preventDefault();
    const newMainGoal = goalInput.value;
    paintMainGoal(newMainGoal);
    saveMainGoal(newMainGoal);
}

function handleCheckbox(event) {
    if (checked) {
        //checked 표시
        checkIcon.classList.remove(HIDDEN_CLASSNAME);
        mainGoal.classList.add(CANCEL_LINE_CLASSNAME);
    }
    else {
        ////checked 표시 해제
        checkIcon.classList.add(HIDDEN_CLASSNAME);
        mainGoal.classList.remove(CANCEL_LINE_CLASSNAME);

    }

    checked = !checked;
}

goalForm.addEventListener("submit", handleGoalSubmit);

checkbox.addEventListener("click", handleCheckbox);

const savedMainGoal = localStorage.getItem(MAIN_GOAL);
const savedMainGoalChecked = localStorage.getItem(MAIN_GOAL_CHECKED);

if (savedMainGoal !== null) {
    
    paintMainGoal(savedMainGoal);
}