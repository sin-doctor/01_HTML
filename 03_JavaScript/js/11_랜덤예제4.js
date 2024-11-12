function pickFruit() {
  const result = document.getElementById("result");
  const fruit = [
    "사과",
    "오렌지",
    "바나나",
    "체리",
    "망고",
    "포도",
    "딸기",
    "파인애플",
    "블루베리",
    "복숭아",
  ];
  //1. 과일들의 총 갯수
  console.log(fruit.length);
  //2. index 5에 있는 과일 이름 출력
  console.log(fruit[5]);
  // 3. 랜덤으로 과일 하나 뽑기
  const randomIndex = Math.floor(Math.random() *fruit.length);
  const randomFruit = fruit[randomIndex ];
  // 랜덤으로 뽑힌 과일 화면에 표시
  result.innerText = randomFruit;

  // tip //
  // 큰따옴표나 작은따옴표로 문자열과 변수명을 구분짓지 않고 한번에 작성하는 방법
  // 역따옴표는 문자열과 변수명을 모두 한 번에 작성하는 방법
  // 변수명에는 ${변수명} 으로 표기를 하면 위에있는 변수명으로 표기
  result.innerText = `랜덤으로 뽑힌 과일 : ${randomFruit}`;
}
