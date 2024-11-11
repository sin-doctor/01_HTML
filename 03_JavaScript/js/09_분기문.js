function check1() {
    let result = 0;
    for (let a = 1; a <= 10; a++) {
        result += a;
        if (a == 5) {
            break; //a 라는 숫자가 5가 되면 행동을 멈춤.
            // break는 for문을 조건식에서 모든 숫자의 행동을 진행하다가
            // 특정 숫자나 값이 보이면 for문을 모두 중단
            // for문에서 중단하기 전의 값을 저장한 상태로 탈출
        }
    }
    alert(result); //result 에는 1부터 5까지 더한 숫자 값표기
}
function check2() {
    let result = 0;
    for (let b = 1; b <= 20; b++) {
        result += b;
        if (b == 15) {
            break; 
        }
    }
    alert("총 더한 값은 ["+ result +"]입니다."); 
}
function check3(){
    
    for (let abc = 1; abc <= 20; abc++) {
        console.log("ABC의 값 :"+abc);
        if(abc % 3 == 0){
            break;
        }
        console.log("ABC의 값 ["+abc+"]");
    }
}

