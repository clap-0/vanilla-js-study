const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

// toDos배열을 문자열로 만들어서 Local Storage에 저장한다
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 누른 delete버튼이 있는 toDo를 삭제하고 toDos배열에서 제외시켜 최신화시킨다
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// toDo에 관한 객체를 인자로 받아 화면에 형식에 맞게 출력한다
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = newToDo.id;
  span.innerText = newToDo.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// toDo가 submit되었을 때 새로고침을 막고 출력 및 저장함수를 실행시킨다
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  // 현재 시간을 id로 하고, newToDo를 갖는 객체를 만든다
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// Local Storage에 이미 저장된 toDos가 있는 경우 화면에 표시한다
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  // 문자열 형태인 savedToDos를 배열로 변환하여 parsedToDos에 저장한다
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => paintToDo(item));
}
