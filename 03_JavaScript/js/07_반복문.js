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
/*
while 문 기본 구조
while (조건) {
 // 반복할 코드 
  while(조건이 true인 경우 설정){
        조건이 true 일때 실행할 구문 작성
    }
}
 */

// while 1 기능의 버튼을 누르면 1부터 5까지 숫자를 더한 값을 출력
function while1(){
    let num = 1; // let 변할 수 있는 변수명을 작성 const 변할 수 없는 상수명을 작성

    while(num <= 5){
        alert("num의 숫자값은"+num+"입니다.");
        // 계속 num 값이 1이기 때문에 무한 반복
        // num 숫자를 1씩 증가시켜서 숫자가 5가 되면 while문을 종료하기
        num++; // num = num + 1;
    }
}
function while2(){
    let abc= 1;
    while(abc <= 10){
    console.log("while2의 버튼");
    console.log("abc의 값 :"+abc);
    abc++;
    }
}
function while3(){
    let abc = 1;
    while(abc <= 10){
        console.log("while3의 버튼");
        console.log("abc의 값:"+ abc);
        if (abc == 5 ) {
            break;
        }
    }
}
// while4 라는 지역변수 안에서만 사용하는 변수명을 설정할 경우에는
// {} 안에 변수명을 작성
// xyz 숫자 5를 확인
function while4(){
    let xyz = 0;
    while (xyz <= 20)
    xyz ++;
    console.log(xyz);

}
function while5(){
    let start = 5;
    while(start <= 20){
        console.log("숫자는"+start+"입니다.");
        start++;

        if(start == 15){
            break;
        }
    }
}