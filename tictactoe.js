let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");

let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".message-container");
let msg=document.querySelector("#msg");
let turnIndicator = document.querySelector("#turn-indicator");

let turn0=true;
 const Winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];



boxes.forEach((box) => {
box.addEventListener("click",()=>{
  
    if(turn0){
    box.innerText="⭕";
    turnIndicator.innerText = "Player 2's Turn (❌)";
    turn0=false;

    }
    else{
    box.innerText="❌";
    turn0=true;
    turnIndicator.innerText = "Player 1's Turn (⭕)";
    }
    box.disabled=true;
    checkWinner();
});
});

const disabledboxes=()=>{
for(let box of boxes){
    box.disabled=true;
   // box.innerText="";
}
};

const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    };

   

 const showWinner=(winner,winningPattern)=>{
msg.innerHTML=`congratulations 🎉, the winner is the player  with symbol  ${winner}`;
msgcontainer.classList.remove("hide");
winningPattern.forEach(index => {
    boxes[index].classList.add("winning-box");
  });

turnIndicator.innerText = "";

disabledboxes();
 }

const checkWinner=()=>{
    for(let pattern of Winpatterns){
        let pos1Val=boxes[pattern[0]].innerText;
       let pos2Val= boxes[pattern[1]].innerText;
       let pos3Val= boxes[pattern[2]].innerText;
       if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
          
            showWinner(pos1Val,pattern);
           return;

        }
        //else
        //console.log(`the game ends on draw`);
 }
    }
  

  let isDraw = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      isDraw = false;
    }
  });

  if (isDraw) {
    msg.innerHTML = `It's a draw! 🤝`;
    msgcontainer.classList.remove("hide");
     turnIndicator.innerText = "";
  }
  };

  const Resetgame=()=>{
    turn0=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
    turnIndicator.innerText = "Player 1's Turn (⭕)";
boxes.forEach(box => {
  box.classList.remove("winning-box");
});

  };


  newGamebtn.addEventListener("click",Resetgame);
  resetBtn.addEventListener("click",Resetgame);


 