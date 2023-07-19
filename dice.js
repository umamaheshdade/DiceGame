let teamA = document.getElementById("teamA");
let teamB = document.getElementById("teamB");
let A_score = document.getElementById("score_A");
let B_score = document.getElementById("score_B");
let winner = document.getElementById("result");
let block = document.getElementById("resultblock");

let Score_of_A = 0;
let Score_of_B = 0;



teamA.addEventListener("click",function gaming() {
    let num1 = Math.ceil(Math.random()*6);    
    Score_of_A+=num1;
 
    A_score.textContent="score : "+Score_of_A;
    teamA.src="./images/dice"+num1+".png";

    if (Score_of_A >= 50) {
        teamA.removeEventListener("click",gaming);
        eventtrigger1=true;
        A_score.textContent="score : "+Score_of_A;

        winner.textContent="Team A won the Game!!!";
        let rematchbtn = document.createElement("button");
        block.appendChild(rematchbtn);
        rematchbtn.textContent="Play Agian";
        rematchbtn.classList.add("btn","btn-danger","rematchbtn1");

        rematchbtn.onclick=()=>{
            block.removeChild(rematchbtn);
            A_score.textContent="score : 0";
            B_score.textContent="score : 0";
            winner.textContent="";
            Score_of_A=0;
            Score_of_B=0;
            teamA.addEventListener("click",gaming);
        };
    }
});

teamB.addEventListener("click",function gaming2() {
    let num2 = Math.ceil(Math.random()*6);
    teamB.src="./images/dice"+num2+".png";
    
    Score_of_B+=num2
    B_score.textContent="score : "+Score_of_B;

    if (Score_of_B >= 50) {
        eventtrigger=true
        teamB.removeEventListener("click",gaming2);
        B_score.textContent="score : "+Score_of_B;
        winner.textContent="Team B won the Game!!!";

        let rematchbtn = document.createElement("button");
        block.appendChild(rematchbtn);
        rematchbtn.textContent="Play Agian";
        rematchbtn.classList.add("btn","btn-danger","rematchbtn1");

        rematchbtn.onclick=()=>{
            block.removeChild(rematchbtn);
            B_score.textContent="score : 0";
            A_score.textContent="score : 0";
            winner.textContent="";
            Score_of_A=0;
            Score_of_B=0;
            teamB.addEventListener("click",gaming2);
        };
    }
}
);

