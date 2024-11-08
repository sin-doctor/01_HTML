function check1(){
    /*
    for([1]초기식 ; [2]조건식; [4]증감식) {
        [3]
    
    */ 
    //for ()안에서 공간을 구분짓는 기준은 ;으로 구분짓는다.
    /*
    for(최초 1회만 어떤 값인지 보여지는 공간 ; {}안에 들어가서 작성되어있는 코드를 실행할 수 있는 권한의 조건; 
        더하거나 뺄 값 ++ -- 
    ){
        조건이 true 일때 실행할 공간
    }

} */
// for 문 안에는 const(상수) 대신 let(변수)를 사용함

// 문자열 형식으로 모든 숫자 출력해서 숫자들이 모두 나왔는지 확인해보기

let 결과 =""; // 빈 문자 제공

for(let 숫자 = 1; 숫자 <= 5 ; 숫자 ++){
    // 결과라는 변수명에 숫자를 1부터 5까지 누적해서 이어 붙이기를 원함
    결과 += 숫자;
    // 결과 = 결과 + 숫자 ; 
    console.log("결과 : " + 결과);


}

console.log("==============")
console.log("최종으로 출력되는 결과 값은")
console.log(결과 + " 입니다.")

}
/* 1부터 10까지 연속으로 출력하는 숫자들 표기*/
function check2(){
    for( let a = 1; a<= 10; a++) {
        console.log("1 ~ 10 : "+a);
    }

}
function check3(){
    for( let a = 1; a<= 20; a++) {
        console.log("1 ~ 20 : "+a);
    }
}
function check4(){
    for( let a = 5; a<= 15; a++) {
        console.log("5 ~ 15 : "+a);
        numbers.push(a);
    }
    alert("최종 출력된 수: " + numbers.join(', '));
    
}