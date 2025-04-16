//form
const goalFormWrapper = document.querySelector("#goal-form-wrapper");
const goalForm = document.querySelector("#goal-form");
const goalInput = document.querySelector("#goal-form input");
//goal-display
const goalDisplayWrapper = document.querySelector("#goal-display-wrapper");
const goalDisplayText = document.querySelector("#goal-display-text");
const goalCheckbox = document.querySelector("#goal-checkbox");
const checkIcon = document.querySelector(".checked-icon");
//dropdown
const dropdownToggle = document.querySelector("#goal-dropdown-toggle");
const dropdown = document.querySelector("#goal-dropdown");
const dropdownNewBtn = document.querySelector("#dropdown-new-btn");
const dropdownEditBtn = document.querySelector("#dropdown-edit-btn");
const dropdownClearBtn = document.querySelector("#dropdown-clear-btn");

//constants
const HIDDEN_CLASSNAME = "hidden";
const CANCEL_LINE_CLASSNAME = "cancel-line";
const GOAL_KEY = "goal";
const GOAL_CHECKED_KEY = "goal_checked";

let goalChecked = false;

/** goal */
function saveGoal(newGoal) {
    localStorage.setItem(GOAL_KEY, newGoal);
}

function removeGoal() {
    localStorage.removeItem(GOAL_KEY);
    localStorage.removeItem(GOAL_CHECKED_KEY);
}

function paintGoal(newGoal) {
    goalFormWrapper.classList.add(HIDDEN_CLASSNAME);
    goalDisplayWrapper.classList.remove(HIDDEN_CLASSNAME);
    goalDisplayText.innerHTML = newGoal;
    paintGoalCheckbox();
}

function paintGoalInput(existedGoal) {
    console.log(`existedGoal : ${existedGoal}`);
    console.log(`type of existedGoal : ${typeof existedGoal}`);

    goalDisplayWrapper.classList.add(HIDDEN_CLASSNAME);
    goalFormWrapper.classList.remove(HIDDEN_CLASSNAME);

    if ((existedGoal !== null) && (existedGoal !== undefined)) {
        goalInput.value = existedGoal;
    }
}

function handleGoalSubmit(event) {
    event.preventDefault();
    const newGoal = goalInput.value;
    goalInput.value = null;
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
        checkIcon.classList.remove(HIDDEN_CLASSNAME);
        goalDisplayText.classList.add(CANCEL_LINE_CLASSNAME);
        dropdownNewBtn.classList.remove(HIDDEN_CLASSNAME);
        dropdownEditBtn.classList.add(HIDDEN_CLASSNAME);
    }
    else {
        //checked 표시 해제
        checkIcon.classList.add(HIDDEN_CLASSNAME);
        goalDisplayText.classList.remove(CANCEL_LINE_CLASSNAME);
        dropdownNewBtn.classList.add(HIDDEN_CLASSNAME);
        dropdownEditBtn.classList.remove(HIDDEN_CLASSNAME);
    }
}

function handleGoalCheckbox() {
    goalChecked = !goalChecked;

    paintGoalCheckbox();
    saveGoalChecked(goalChecked);

}
/**goal dropdown */

function handleDropdownToggle() {
    dropdown.classList.toggle(HIDDEN_CLASSNAME);

}
function handleDropdownClear() {
    removeGoal();
    paintGoalInput();
}

function handleDropdownEdit() {
    console.log(`edit goal -> ${savedGoal}`)
    paintGoalInput(savedGoal);
}

//로직 수정 필요
function handleDropdownNew() {
    goalChecked = false;
    removeGoal();
    paintGoalInput();
}



goalForm.addEventListener("submit", handleGoalSubmit);

goalCheckbox.addEventListener("click", handleGoalCheckbox);

dropdownToggle.addEventListener("click", handleDropdownToggle);

dropdownClearBtn.addEventListener("click", handleDropdownClear);
dropdownEditBtn.addEventListener("click", handleDropdownEdit);
dropdownNewBtn.addEventListener("click", handleDropdownNew);


const savedGoal = localStorage.getItem(GOAL_KEY);
const savedGoalChecked = JSON.parse(localStorage.getItem(GOAL_CHECKED_KEY));

if (savedGoalChecked !== null) {
    console.log(`savedGoalChecked : ${savedGoalChecked}`);
    goalChecked = savedGoalChecked;
}

if (savedGoal !== null) {
    paintGoal(savedGoal);
}