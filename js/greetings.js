const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const toDo = document.querySelector(".todo-container");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 사용자가 이름을 입력한 경우 입력받은 이름을
// Local Storage에 저장하고 출력한다
function onLoginSubmit(event) {
  // submit 이벤트를 막아 새로고침이 되지 않도록 한다
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// 인수로 받은 이름과 투두리스트를 화면에 보이게 한다
function paintGreetings(username) {
  greeting.innerText = `Hello! ${username}`;
  toDo.classList.remove(HIDDEN_CLASSNAME);
}

// Local Storage에 저장된 이름이 없는 경우 로그인폼을 보여줘 입력받고, 있는 경우 출력한다
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
