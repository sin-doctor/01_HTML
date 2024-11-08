/* 어린이 청소년 성인 판별*/
function check4(){
// 입력한 나이 값 가져오기
const age = document.getElementById("inputAge").value;

//만약 13세 이하 = 어린이
//   0세이상           입력한 나이가 13세 이하
    if( age >= 0 &&  age <= 13){ //0세부터 13세 사이
        alert("어린이 입니다.");
    
} else if ( 19 <= age &&  age <= 120) { // 19세 이상이라면 성인
    alert("성인입니다.");
}else if ( age >=14  && age <= 18 ){ 
    alert("청소년 입니다.");
}else {
    alert("잘못입력했습니다.")
}
} 