# kokoa-clone-2021
 
### 📖 kokoa-clone 
> 카카오톡의 모바일 버전을 본따 웹 페이지에 간단하게 구현해보았다. <br>

[`kokoa clone 결과물`](https://park-seung-hun.github.io/kokoa_clone-2021/index.html)<br>

### ✅ 사용 Skills
  1. HTML
  2. CSS
  3. Vanilla JS

### 📒 페이지 구조
> 각 페이지들의 body 구조는 아래와 같다. (index와 chat은 navigator-bar 제외)
```html
<body>
  <status-bar>
     <wifi icon> <clock> <battery icon>
  </status-bar>
      
  <main>
     <main header>
     <main content>
  </main>
   
  <navigator-bar>
     <friends btn> <chats btn> <search btn> <more btn> 
  <navigator-bar>
</body>
```

### 📕 주요 기능 
- `버튼 아이콘`을 이용해 해당하는 화면으로 전환
```html
<!--각 화면 하단 위치한 nav-bar의 각 아이콘 마다 <a> 태그를 이용하여 화면 전환-->
     <nav class="nav js-nav">
      <ul class="nav__list">
        <li class="nav__btn">
          <a class="nav__link" href="friends.html">
            <i class="fas fa-user fa-2x"></i>
          </a>
        </li>
        <li class="nav__btn">...
        </li>
        <li class="nav__btn">...
        </li>
        <li class="nav__btn">...
        </li>
      </ul>
    </nav>
```

- `현재 시각`을 JS를 통해 나타냄
```html
    <div class="status-bar">
     ...
      <div class="status-bar__column js-clock">
        <span>00:00</span>
      </div>
     ...
    </div>
```
```javascript
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("span");

function getTime() { // 현재 시간을 가져오기 위한 함수
  const date = new Date(),
    minutes = date.getMinutes(), // min 
    hours = date.getHours();  // hour

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000); // 1초마다 시간을 받아옴
}
init();
```
> [clock.js](https://github.com/Park-Seung-Hun/kokoa_clone-2021/blob/main/js/clock.js)

- `@media Query`를 이용해 지정한 화면 크기보다 커지면 Splash Screen 출력

```html
    <div id="no-mobile" class="no-mobileScreen">
      <img src="css/screens/image/wait.png" alt="" width="10%" />
      <span>Your screen is too big</span>
    </div>
```

```css
/* z-index와 아래 @media를 이용해 splash screen출력*/
#no-mobile {
  position: absolute;
  top: 0;
  z-index: 99;
  height: 100vh;
  width: 100vw;
  background-color: #cde2ef;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 32px;
}
...



/* @media 를 이용해 가로 645px보다 작을 때 정상 화면 출력*/
@media screen and (max-width: 645px) {
  #no-mobile {
    display: none;
  }
} ;
```
> [nomobile.css](https://github.com/Park-Seung-Hun/kokoa_clone-2021/blob/main/css/components/no-mobile.css)

- `컨셉(4계절)을 선택함에 따라 효과 변하는 기능`을 간단한 JS와 CSS를 통해 구현.
  1. 계절에 맞는 배경색 변화 
  2. Splash Screen 변화 (로그인 시 발생하는 효과, 컨셉을 선택하지 않으면 로그인이 안된다.)
  3. Chat Screen 변화 (4계절에 맞는 효과를 채팅방에 구현)
     - [JS 코드 보러가기](https://github.com/Park-Seung-Hun/kokoa_clone-2021/tree/main/js/changeconcept)



컨셉 없음            |봄 컨셉            |  여름 컨셉            |
:-------------------------:|:-------------------------:|:-------------------------:
<img src="https://github.com/Park-Seung-Hun/kokoa_clone-2021/blob/main/resultImage/noconcept.gif" height="450" width="200">  |<img src="https://github.com/Park-Seung-Hun/kokoa_clone-2021/blob/main/resultImage/spring.gif" height="450" width="200">  |  <img src="https://github.com/Park-Seung-Hun/kokoa_clone-2021/blob/main/resultImage/summer.gif" height="450" width="200"> 

가을 컨셉            |  겨울 컨셉            |
:-------------------------:|:-------------------------:
<img src="https://github.com/Park-Seung-Hun/kokoa_clone-2021/blob/main/resultImage/fall.gif" height="450" width="200">  |  <img src="https://github.com/Park-Seung-Hun/kokoa_clone-2021/blob/main/resultImage/winter.gif" height="450" width="200">

### 📘 추가할 기능
 - `달력` 기능 추가 
   1. 기본 달력틀을 JS와 CSS를 통해 구현한다.
   2. 달력에 기념일 & 할일 추가 기능을 JS를 통해 구현한다.

 - `Music` 기능 추가
   1. 날씨 or 계절에 맞는 음악 추천
   2. 앨범 표지 회전 효과

### 📙 출처
[노마드 코더](https://nomadcoders.co/)<br>

봄,겨울 특수효과: [code pen](https://codepen.io/)
