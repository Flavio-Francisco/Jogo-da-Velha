let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-conteiner button");
let messagemConteiner = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionando o evento de clicks aos boxes

for(i = 0; i < boxes.length; i++){
    // quando alquem clica na caixa
    boxes[i].addEventListener("click",function () {

        let el = checkEl(player1,player2);
        //verifica se já tem x ou o.
        if (this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
    
            //computar jogada
            if (player1 == player2) {
                player1++;

                if (secondPlayer == 'ia-player') {
                  //função de incrementar jogada
                  IA();
                  player2++;
                }

            } else {
                player2++;
            }

            
        }
        // checar quem venceu
        checkwWinCondition();
       
    });
}
// evento para saber se são 2 jogadores ou IA;
for(let i = 0; i < buttons.length; i++){
   buttons[i].addEventListener("click",function () {
      secondPlayer = this.getAttribute("id");
      for(let j = 0;j < buttons.length; j++  ){
         buttons[j].style.display = 'none';
      }
      setTimeout(() => {
         let conteiner = document.querySelector('#conteiner');
         conteiner.classList.remove('hide');
      }, 500);
   });
}

// ver quem vai jogar

function checkEl(player1,player2){
    if (player1 == player2) {
        //x
        el = x;
    }else{
        //o
        el = o;
    }
    return el;

}

//chegar quem venceu


function checkwWinCondition(){
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");
    // horizontal

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){
     let b1Child = b1.childNodes[0].className;
     let b2Child = b2.childNodes[0].className;
     let b3Child = b3.childNodes[0].className;

     if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
        //x
        declaraVencedor('x');
     }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
        //o
        declaraVencedor('o');
     }

    }
   
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
   
        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
           //x
           declaraVencedor('x');
        }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
           //o
           declaraVencedor('o');
        }
   
       }

       if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
   
        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
           //x
           declaraVencedor('x');
        }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
           //o
           declaraVencedor('o');
        }
   
       }

       //vertical

       
    if(b6.childNodes.length > 0 && b9.childNodes.length > 0 && b3.childNodes.length > 0 ){
        let b9Child = b9.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
   
        if (b6Child == 'x' && b9Child == 'x' && b3Child == 'x') {
           //x
           declaraVencedor('x');
        }else if(b6Child == 'o' && b9Child == 'o' && b3Child == 'o'){
           //o
           declaraVencedor('o');
        }
   
       }
      
       if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){
           let b2Child = b2.childNodes[0].className;
           let b5Child = b5.childNodes[0].className;
           let b8Child = b8.childNodes[0].className;
      
           if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
              //x
              declaraVencedor('x');
           }else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
              //o
              declaraVencedor('o');
           }
      
          }
   
          if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ){
           let b1Child = b1.childNodes[0].className;
           let b4Child = b4.childNodes[0].className;
           let b7Child = b7.childNodes[0].className;
      
           if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
              //x
              declaraVencedor('x');
           }else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
              //o
              declaraVencedor('o');
           }
      
          }

          //cruzado

          if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ){
            let b1Child = b1.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b9Child = b9.childNodes[0].className;
       
            if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
               //x
               declaraVencedor('x');
            }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
               //o
               declaraVencedor('o');
            }
       
           }

      if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ){
      let b3Child = b3.childNodes[0].className;
      let b5Child = b5.childNodes[0].className;
      let b7Child = b7.childNodes[0].className;
   
      if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
         //x
         declaraVencedor('x');
      }else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
         //o
         declaraVencedor('o');
      }
   
      }

   // deu velha
   let contador = 0;
   for(let i =0; i < boxes.length; i++){
      if (boxes[i].childNodes[0]!= undefined) {
         contador++;
      }
      if (contador == 9) {
         declaraVencedor("Deu Velha!")
      }
   }

}   
// limpa o jogo , declara o vencedor e atualiza o placar

function declaraVencedor(vencedor){
let scoreboardx = document.querySelector("#scoreboard-1");
let scoreboardy = document.querySelector("#scoreboard-2");
let msg = '';


if (vencedor == "x") {
   scoreboardx.textContent = parseInt(scoreboardx.textContent) +1;
   msg = "Jogador 1 Venceu!"
} else if (vencedor =='o') {
   scoreboardy.textContent = parseInt(scoreboardy.textContent) +1;
   msg = "Jogador 2 Venceu!"
}else{
   msg = "Deu Velha!"
}
// exibir messagem na tela

messageText.innerHTML = msg;
   messagemConteiner.classList.remove("hide");

//esconde messagem
//setTimeout(function () {
  // messagemConteiner.classList.add('hide')
//},3000);

//zerar jogadas
player1 = 0;
player2 = 0;

// remover "X" e "Y"

let boxRemover = document.querySelectorAll('.box div');

for(let i = 0; i < boxRemover.length; i++){
   boxRemover[i].parentNode.removeChild(boxRemover[i]);
}
}

// logica da IA

function IA() {
   
   // só vai preencher se estiver vazio o filho
   
   let cloneO = o.cloneNode(true);
   contador = 0;
   preechido = 0;
      for(let i = 0; i < boxes.length; i++){
         let randomNumero = Math.floor(Math.random() * 5);
         if (boxes[i].childNodes[0] == undefined) {
            if (randomNumero <= 1) {
               boxes[i].appendChild(cloneO);
               contador++;
               break;
            }
   
            // checar quantas estão preenchidos
         }else{
            preechido++;
            
         }
      }
      if (contador == 0 && preechido < 9) {
         IA();
         
      }
}