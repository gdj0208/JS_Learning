
const USERNAME_KEY = "username";
const HIDDEN_KEY = "hidden";
const GREETING_KEY = "greeting"

const loginForm = document.getElementById("login-form");
const login_input = loginForm.querySelector("input");
const login_button = loginForm.querySelector("button");
const link_naver = document.getElementById("goto_naver");
const greeting = document.getElementById(GREETING_KEY);

const savedUsername = localStorage.getItem(USERNAME_KEY);


let id;
let prev_class;

function onLoginSubmit(event) {
    event.preventDefault();


    id = login_input.value;
    prev_class = login_input.classList.add(HIDDEN_KEY);

    localStorage.setItem(USERNAME_KEY, id);

    greeting.innerText = `Hello ${id}`;
    greeting.classList.remove("hidden");
}

function show_username_or_input() {
    if(savedUsername == null) {
        // 유저가 저장된 상태가 아닌 경우
        loginForm.classList.remove(HIDDEN_KEY);
        greeting.classList.add(HIDDEN_KEY);
    }
    else {
        // 유가 저장된 경우
        greeting.innerText = `Hello ${savedUsername}`;
        loginForm.classList.add(HIDDEN_KEY);
        greeting.classList.remove(HIDDEN_KEY);
    }
}

function going_naver(event) {
    alert("Clicked");
    event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);
link_naver.addEventListener("click", going_naver);

show_username_or_input();