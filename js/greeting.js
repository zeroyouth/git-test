const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기한다. 그리고 중요한 정보를 담은 변수는 카멜케이스를 쓰지만 별로 안중요한 거면 대문자로 씀.. 컨벤션임, 실수를 만들고 싶지 않은 string이라는 사실을 기억하고 상기시키기 좋음.
const USERNAME_KEY ="username";

function loginSubmit(event) {
  event.preventDefault(); //기존에 행하는 이벤트를 막아라 자동제출해서 넘어가는 막음.
  loginForm.classList.add(HIDDEN_CLASSNAME); //로그인폼을 다시 숨겨줌
  const username = loginInput.value; //유저이름은 인풋으로 받음
  localStorage.setItem(USERNAME_KEY, username); //로컬저장소에 username 저장
  paintGreetings(username);
}

function paintGreetings(username) {//2번쓰이는 코드를 함수로 묶어줬다.
    greeting.innerHTML = `Hello <span style='color:blue'>${username}!</span>`;
    greeting.classList.remove(HIDDEN_CLASSNAME); //greeting에 히든 숨겨서 h1 보여주기
}

loginForm.addEventListener("submit", loginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){//username 비워져있다면 hidden클래스 삭제, 즉 이름 입력하는 form을 보여줘라
    loginForm.classList.remove(HIDDEN_CLASSNAME); //여기서는 폼을 보여줌
    loginForm.addEventListener("submit", loginSubmit); //submit되면 로그인제출 함수가 진행됨
} else { //username 저장되어 있다면 표시해주기
    paintGreetings(savedUsername); //유저가 저장해놓은 이름을 받아서 인자로 넣어준다.
}

