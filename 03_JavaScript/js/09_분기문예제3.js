const price = document.getElementById("price");
let 총금액 = 0;
function add(num) {
  // num = 파라미터 = 매개변수
  switch (num) {
    case "1":
      총금액 += 3000;
      break;
    case "2":
      총금액 += 5500;
      break;
    case "3":
      총금액 += 8800;
      break;
  }
  price.innerText = "금액확인하기 : " + 총금액;
}
/*
        const price = document.getElementById("price");
        function add( num   ) {
            price.innerText = "금액확인하기 : " + num;
        }
*/
