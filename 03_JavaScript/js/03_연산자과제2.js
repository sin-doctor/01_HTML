const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const pm = document.getElementById("inputMp");
const tp = document.getElementById("inputTp");
const msg = document.getElementById("msg");

// 핸드폰 일반전화 둘 중 하나라도 작성햇는지 확인하는 멘트
// 만약에 작성을 하지 않았다 둘 중 하나 입력하라는 문구가 나오고 
// 작성했다면 문구가 안보이게
function signUp(){
    const abc = 10; 
    // const 새로 만들어준 이름을 아래에서 사용하지 않았기 때문에 글자가 흐리게 보이는것.
    // 글자를 선명하기 보기 위해서는 abc 라는 새로 만들어진 변수명을 아래에서 사용해야함
    const mobilePhone = pm.value;
    const telPhone = tp.value;
   mp.Value || tp.value ? msg.style.display = "none" :  msg.style.display ="block";
}


// 로그인성공 로그인 실패했는지
// 임의로 아이디나 비밀번호를 설정 맞는지 확인
// 사용자들이 회원가입한 아이디와 비밀번호 불러오기 [DB]
// id = khzzang pw = kht1004
function login(){
    const id = inputId.Value;
    const pw = inputPw.Value;

    id== "khzzang" && pw== "kht1004" ? alert("로그인성공!") : alert("로그인실패!");

}