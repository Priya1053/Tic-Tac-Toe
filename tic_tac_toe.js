let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new-btn");
let winMsg=document.querySelector(".win-msg");
let win=document.querySelector("#msg");


let turnO=true; //playerO,playerX

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true
        }
        box.disabled=true;
        winnerCheck();
    })
})

const  winnerCheck = ()=>{
    for(let patterns of winPatterns)
    {
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;


        if(pos1!="" && pos2!="" && pos3!="")
            if(pos1 === pos2 && pos2===pos3 )
                {
                    console.log("winner",pos1);
                    showWinner(pos1);
                }
    }
}

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}

const anableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    win.innerText="Congratulations! winner is " + winner;
    winMsg.classList.remove("hide");
    disableBox();
}

const resetGame=()=>{
    turnO=true;
    anableBox();
    winMsg.classList.add("hide")
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);