const clock = document.querySelector("#clock");

// 현재 시각을 불러와서 출력한다
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval()은 처음 1000ms가 지난 후 실행되므로 먼저 한번 실행한다
getClock();
setInterval(getClock, 1000);
