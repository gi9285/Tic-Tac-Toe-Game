let boxes = document.querySelectorAll(".box");
let message = document.querySelector(".msg");
let newGame = document.querySelector("#new-game");

let playerX = true;
let count = 0;

let winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.classList.remove("color-o");
    box.classList.remove("disable");
    box.addEventListener("click", ()=>{
       if (playerX){
        box.innerText = "X";
        playerX = false;
       } 
       else{
        box.innerText = "O";
        box.classList.add("color-o");
        playerX = true;
       }
       box.classList.add("disable");
    //    box.disabled =  true;    // disabled is not vailid property for a div because div not a input
       count++ ;
       let isWinner = checkWinner ();

       if (count === 9 && !isWinner){
        gameDraw();
       }

    });    
 
});

const gameDraw = ()=>{
    message.innerText = `match was Draw.`
    message.classList.remove("hide");
}

const resetGame = ()=>{  
    count = 0; 
    playerX = true;
    enableBoxes();
    message.classList.add("hide");
    

};

const disableBoxes = ()=>{
    for (let box of boxes){
        box.classList.add("disable");
    }
};

const enableBoxes = ()=>{
    for (let box of boxes){
        box.classList.remove("color-o");
        box.classList.remove("disable");
        box.innerText = " ";
    }
};


const showWinner = (winner)=>{
    message.innerText = `Congratulation, winner is " ${winner} "`;
    message.classList.remove("hide");
    disableBoxes();
;
}

const checkWinner = () =>  {
    for (pattern of winnerPattern){
           let posVal1 = boxes[pattern[0]].innerText;
           let posVal2 = boxes[pattern[1]].innerText;
           let posVal3 = boxes[pattern[2]].innerText;

           if (posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if (posVal1 === posVal2 && posVal2 === posVal3){
                // console.log("winner!", posVal1);
                showWinner(posVal1);
                return true;
            }
           }
    }    
};


newGame.addEventListener("click", resetGame);
// newGame.addEventListener("click", resetGame);

// let count = 0;
// boxes.forEach((b) =>{

//     b.addEventListener("click", ()=>{
//         count += 1;
//         console.log(`count is = ${count}`);

//         if (count === 9){
//             // console.log(`no winner is found`);
//             message.innerHTML = `Match is "Draw", keep playing`;
//         }
       
//     });
  
// });


