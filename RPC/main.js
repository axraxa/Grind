var count = 0;
var countPc= 0;




const  game = document.querySelector(".container");

game.addEventListener("click",function(e){
    //random output
    const pc = document.querySelectorAll("img");
    const pcChoice = Math.floor(Math.random() * 3);
    const target = e.target;

    //getting atribute 
    const atribute = target.getAttribute("class");
    const randomed = pc[pcChoice].alt;
    const id = target.getAttribute("id");
    //middle text
    const rolled = `You did ${atribute} VS ${randomed}`;
    if(atribute != "clear" && id == "RPC"){
    document.querySelector(".rolled").innerText = rolled;
    }

    // here goes hell kinda. 
    if(atribute == "Rock"){
        if(randomed == "Scissors"){
            count ++;
        }
        if(randomed == "Rock"){
            count = count;
        }
        if(randomed == "Paper"){
            countPc ++;
        }
    }
    if(atribute == "Paper"){
        if(randomed == "Scissors"){
            countPc ++;
        }
        if(randomed == "Rock"){
            count ++;
        }
        if(randomed == "Paper"){
            count =count;
        }
    }
    if(atribute == "Scissors"){
        if(randomed == "Scissors"){
            count= count;
        }
        if(randomed == "Rock"){
            countPc ++;
        }
        if(randomed == "Paper"){
            count ++;
        }
    }
    document.querySelector(".count").innerText = `Your Score : ${count}`;
    document.querySelector(".count-pc").innerText = `Computer Score : ${countPc}`;
});

document.querySelector(".clear").addEventListener("click",function(e){
    atribute = e.target.getAttribute("class");
    if(atribute == "clear"){
        document.querySelector(".count").innerText = `Your Score : ${count = 0}`;
        document.querySelector(".count-pc").innerText = `Computer Score : ${countPc = 0}`;
        document.querySelector(".rolled").innerText = null;
    }
})

