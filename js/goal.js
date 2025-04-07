//goal-form
const goalFormWrapper = document.querySelector("#goal-form-wrapper");
const goalForm = document.querySelector("#goal-form");
const goalInput = document.querySelector("#goal-form input");
//goal-display
const goalDisplayWrapper = document.querySelector("#goal-display-wrapper");
const goalDisplayText = document.querySelector("#goal-display-text");
const goalCheckbox = document.querySelector("#goal-checkbox");
const checkIcon = document.querySelector(".checked-icon");

//constants
const HIDDEN_CLASSNAME = "hidden";
const CANCEL_LINE_CLASSNAME = "cancel-line";
const GOAL_KEY = "goal";
const GOAL_CHECKED_KEY = "goal_checked";

let goalChecked = false;

/**goal */
function saveGoal(newGoal) {
    localStorage.setItem(GOAL_KEY, newGoal);
}

function paintGoal(newGoal) {
    goalFormWrapper.classList.add(HIDDEN_CLASSNAME);
    goalDisplayWrapper.classList.remove(HIDDEN_CLASSNAME);
    goalDisplayText.innerHTML = newGoal;
    paintGoalCheckbox();
}

function handleGoalSubmit(event) {
    event.preventDefault();
    const newGoal = goalInput.value;
    paintGoal(newGoal);
    saveGoal(newGoal);
}

/**goal check */
function saveGoalChecked(isChecked) {
    localStorage.setItem(GOAL_CHECKED_KEY, isChecked)
}

function paintGoalCheckbox() {
    console.log(`paint checkbox. 체크여부: ${goalChecked}`);
    if (goalChecked) {
        //checked 표시
        console.log(`checked 표시`);
        checkIcon.classList.remove(HIDDEN_CLASSNAME);
        goalDisplayText.classList.add(CANCEL_LINE_CLASSNAME);
    }
    else {
        //checked 표시 해제
        console.log(`checked 표시 해제`);
        checkIcon.classList.add(HIDDEN_CLASSNAME);
        goalDisplayText.classList.remove(CANCEL_LINE_CLASSNAME);
    }
}

function handleGoalCheckbox() {
    goalChecked = !goalChecked;

    paintGoalCheckbox();
    saveGoalChecked(goalChecked);

}
``
goalForm.addEventListener("submit", handleGoalSubmit);

goalCheckbox.addEventListener("click", handleGoalCheckbox);

const savedGoal = localStorage.getItem(GOAL_KEY);
const savedGoalChecked = JSON.parse(localStorage.getItem(GOAL_CHECKED_KEY));

if (savedGoalChecked !== null) {
    console.log(`savedGoalChecked : ${savedGoalChecked}`);
    goalChecked = savedGoalChecked;
}

if (savedGoal !== null) {
    paintGoal(savedGoal);
}