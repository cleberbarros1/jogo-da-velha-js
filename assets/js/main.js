var celulas = document.querySelectorAll(".cel");
var simboloX = true;

celulas.forEach((celula) => {
    celula.addEventListener("click", marcar);
})

document.getElementById("botaoRes").addEventListener("click", () => {
    window.location.reload();
})


function marcar() {
    if (this.block == true) {return}

    console.log("marcou!");

    if (simboloX == true) {
        this.innerHTML  = "x";
        simboloX = false;
        this.block = true;
        console.log(this);
        document.getElementById("qualJoga").innerHTML = "Player O";
    } else {
        this.innerHTML  = "o";
        simboloX = true;
        this.block = true;
        console.log(this);
        document.getElementById("qualJoga").innerHTML = "Player X";
    }

    checarVitoria();

}

function checarVitoria() {

    if(document.getElementById("c1").innerHTML == document.getElementById("c2").innerHTML && document.getElementById("c1").innerHTML == document.getElementById("c3").innerHTML) {

        if (document.getElementById("c1").innerHTML == "x") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 1. Você venceu!";
        document.getElementById("c1").style = "background-color: green; color: white";
        document.getElementById("c2").style = "background-color: green; color: white";
        document.getElementById("c3").style = "background-color: green; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return;
         }
        if (document.getElementById("c1").innerHTML == "o") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 2. Você venceu!";
        document.getElementById("c1").style = "background-color: blue; color: white";
        document.getElementById("c2").style = "background-color: blue; color: white";
        document.getElementById("c3").style = "background-color: blue; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return
        };

    } 

    
    if(document.getElementById("c4").innerHTML == document.getElementById("c5").innerHTML && document.getElementById("c4").innerHTML == document.getElementById("c6").innerHTML) {

        if (document.getElementById("c4").innerHTML == "x") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 1. Você venceu!";
        document.getElementById("c4").style = "background-color: green; color: white";
        document.getElementById("c5").style = "background-color: green; color: white";
        document.getElementById("c6").style = "background-color: green; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return ;
        };
        if (document.getElementById("c4").innerHTML == "o") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 2. Você venceu!";
        document.getElementById("c4").style = "background-color: blue; color: white";
        document.getElementById("c5").style = "background-color: blue; color: white";
        document.getElementById("c6").style = "background-color: blue; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return;
        };
    }

    if(document.getElementById("c7").innerHTML == document.getElementById("c8").innerHTML && document.getElementById("c7").innerHTML == document.getElementById("c9").innerHTML) {

        if (document.getElementById("c7").innerHTML == "x") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 1. Você venceu!";
        document.getElementById("c7").style = "background-color: green; color: white";
        document.getElementById("c8").style = "background-color: green; color: white";
        document.getElementById("c9").style = "background-color: green; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return ;
        };
        if (document.getElementById("c7").innerHTML == "o") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 2. Você venceu!";
        document.getElementById("c7").style = "background-color: blue; color: white";
        document.getElementById("c8").style = "background-color: blue; color: white";
        document.getElementById("c9").style = "background-color: blue; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return;
        };
    }

    //direcao das colunas

    if(document.getElementById("c1").innerHTML == document.getElementById("c4").innerHTML && document.getElementById("c1").innerHTML == document.getElementById("c7").innerHTML) {

        if (document.getElementById("c1").innerHTML == "x") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 1. Você venceu!";
        document.getElementById("c1").style = "background-color: green; color: white";
        document.getElementById("c4").style = "background-color: green; color: white";
        document.getElementById("c7").style = "background-color: green; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return;
         }
        if (document.getElementById("c1").innerHTML == "o") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 2. Você venceu!";
        document.getElementById("c1").style = "background-color: blue; color: white";
        document.getElementById("c4").style = "background-color: blue; color: white";
        document.getElementById("c7").style = "background-color: blue; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return
        };
    } 

    if(document.getElementById("c2").innerHTML == document.getElementById("c5").innerHTML && document.getElementById("c2").innerHTML == document.getElementById("c8").innerHTML) {

        if (document.getElementById("c2").innerHTML == "x") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 1. Você venceu!";
        document.getElementById("c2").style = "background-color: green; color: white";
        document.getElementById("c5").style = "background-color: green; color: white";
        document.getElementById("c8").style = "background-color: green; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return;
         }
        if (document.getElementById("c2").innerHTML == "o") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 2. Você venceu!";
        document.getElementById("c2").style = "background-color: blue; color: white";
        document.getElementById("c5").style = "background-color: blue; color: white";
        document.getElementById("c8").style = "background-color: blue; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return
        };
    } 

    if(document.getElementById("c3").innerHTML == document.getElementById("c6").innerHTML && document.getElementById("c3").innerHTML == document.getElementById("c9").innerHTML) {

        if (document.getElementById("c3").innerHTML == "x") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 1. Você venceu!";
        document.getElementById("c3").style = "background-color: green; color: white";
        document.getElementById("c6").style = "background-color: green; color: white";
        document.getElementById("c9").style = "background-color: green; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return;
         }
        if (document.getElementById("c3").innerHTML == "o") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 2. Você venceu!";
        document.getElementById("c3").style = "background-color: blue; color: white";
        document.getElementById("c6").style = "background-color: blue; color: white";
        document.getElementById("c9").style = "background-color: blue; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return
        };
    } 


    if(document.getElementById("c1").innerHTML == document.getElementById("c5").innerHTML && document.getElementById("c1").innerHTML == document.getElementById("c9").innerHTML) {

        if (document.getElementById("c1").innerHTML == "x") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 1. Você venceu!";
        document.getElementById("c1").style = "background-color: green; color: white";
        document.getElementById("c5").style = "background-color: green; color: white";
        document.getElementById("c9").style = "background-color: green; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return;
         }
        if (document.getElementById("c1").innerHTML == "o") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 2. Você venceu!";
        document.getElementById("c1").style = "background-color: blue; color: white";
        document.getElementById("c5").style = "background-color: blue; color: white";
        document.getElementById("c9").style = "background-color: blue; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return
        };
    } 

    if(document.getElementById("c7").innerHTML == document.getElementById("c5").innerHTML && document.getElementById("c7").innerHTML == document.getElementById("c3").innerHTML) {

        if (document.getElementById("c7").innerHTML == "x") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 1. Você venceu!";
        document.getElementById("c7").style = "background-color: green; color: white";
        document.getElementById("c5").style = "background-color: green; color: white";
        document.getElementById("c3").style = "background-color: green; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return;
         }
        if (document.getElementById("c7").innerHTML == "o") {document.getElementById("vencer-selecionado").innerHTML = "Parabéns Jogador 2. Você venceu!";
        document.getElementById("c7").style = "background-color: blue; color: white";
        document.getElementById("c5").style = "background-color: blue; color: white";
        document.getElementById("c3").style = "background-color: blue; color: white";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        return
        };
    } 

}
