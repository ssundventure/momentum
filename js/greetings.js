import { HIDDEN_CLASSNAME } from "../util/utility";

const login = document.querySelector("#login");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting-text");

const goal = document.querySelector("#goal");
const clock = document.querySelector("#clock");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  login.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  clock.classList.remove(HIDDEN_CLASSNAME);
  goal.classList.remove(HIDDEN_CLASSNAME);
  login.classList.add(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if (savedUsername === null) {
  goal.classList.add(HIDDEN_CLASSNAME);
  clock.classList.add(HIDDEN_CLASSNAME);

  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello! What's your name?`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);

}
