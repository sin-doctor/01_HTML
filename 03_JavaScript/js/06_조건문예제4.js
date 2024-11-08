/*

if   else if else 
&& || 사용 X
90점 이상 A
80점 이상 89점 이하 B
70점 이상 79점 이하 C
60점 이상 69점 이하 D
60점 미만          F*/ 

function checkGrade(){

const score = document.getElementById("inputScore").value;
const msg = document.getElementById("gradeMsg");

if(score >= 90){
    msg.innerText= "A";
    msg.className= "A";
}else if( 80 <= score){
    msg.innerText= "B";
    msg.className= "B";
}else if(70 <= score){
    msg.innerText ="C";
    msg.className ="C";
}else if(60 <=score){
    msg.innerText ="D";
    msg.className ="D";
}else{
    msg.innerText="F";
    msg.className="F";
}
}