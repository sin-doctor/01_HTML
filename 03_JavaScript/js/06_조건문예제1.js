function checkAge(){
    const age = document.getElementById("age").value;
    const msg = document.getElementById("ageMsg");

    //18세 이상 관람 가능합니다! 이하일 때 18세 이상만 관람 가능합니다.
    if(18<=age ) {
        msg.innerText = "관람 가능합니다!!!"
        msg.className = "success"; //p 태그 class에 success 라는 표기가 
        /*
        msg.style.color = "green";
        msg.style.backgroundColor = "lightPink";*/

    } else { //18세 미만이라면 여기에 있는 글자 보이기
        msg.innerText = "18세 이상만 관람 가능합니다.";
        msg.className = "fail";

        // 만약 파일명.css 나 style 태그 안에 fail로 작성된 스타일이 없다면 스타일적용 X
        
        /****** className과 style JS 속성 차이점 ******/
        /*
        
        변수명.className = 스타일 4순위
        css 스타일 태그 안에 작성된 css 클래스 속성명 불러오기 실행
        불러온 스타일을 추가 

        변수명.style.속성 (배경,글자색,폰트크기 등)
            변수명.className 보다 스타일 적용 우선순위가 높기 때문에 사용할 때 
                            긴급한 상황이 아니면 사용 자제

        조건문에서 변수명.className으로 시작했다면 다른 {} 안에도 className 으로 맞춰줄 것!

        msg.style.color = "red";
        msg.style.backgroundColor = "orange";*/
    }
}