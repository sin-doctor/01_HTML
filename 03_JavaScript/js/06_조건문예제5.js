function checkSeason() {
  const month = document.getElementById("month").value;
  const msg = document.getElementById("seasonMsg");

  if (month >= 3 && month <= 5) {
    msg.innerText = "봄입니다.";
    msg.className = "spring";
  } else if (month >= 6 && month <= 8) {
    msg.innerText = "여름입니다.";
    msg.className = "summer";
  } else if (month >= 9 && month <= 11) {
    msg.innerText = "가을입니다.";
    msg.className = "fall";
  } else if (month == 12 || month == 1 || month == 2) {
    msg.innerText = "겨울입니다.";  
    msg.className = "winter";
  }else {
    msg.innerText = "1에서 12 사이의 숫자를 입력하세요."
    msg.className = "";
  }
}

/*
3 ~ 5월
봄입니다.
spring 클래스 추가
6 ~ 8월
여름입니다.
summer 클래스 추가
9월 ~ 11월
가을입니다.
fall 클래스 추가
12월 1월 2월
month == 12 || month == 1 || month == 2
겨울입니다.
winter 클래스 추가

나머지
1에서 12 사이의 숫자를 입력하세요
텍스트 보이기
클래스 초기화 
초기화방법 
className = ""; 설정 */
