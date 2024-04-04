//LÓGICA DO JOGO DA VELHA

//variáveis que para interagir com o HTML
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let casasMarcada = document.querySelectorAll(".box");
let botoes = document.querySelectorAll("#buttons-container button");
let mensagemJogo = document.querySelector("#message");
let textoMsg = document.querySelector("#message p");
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o vento de click aos boxes
for(let i = 0; i < casasMarcada.length; i++){
    
    //quanl alguem clica na caixa
    casasMarcada[i].addEventListener("click", function(){


        let el = checkEl(player1, player2);
        
        //verifica se ja tem X ou O
        if(this.childNodes.length == 0){
        
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            //computar jogada
            if(player1 == player2){
                
                player1++;
                
                if(secondPlayer == 'ia-player'){

                    //função executar a jogada
                    iaPlay();

                    player2++;
                }
            }else{
                player2++;
            }

            //checar quem ganhou
            checkWinCondition();
        }

    });
};

//evento para saber se é 2 players ou IA
for(let i = 0; i < botoes.length; i++){

    botoes[i].addEventListener("click", function(){

        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < botoes.length; j++){
            botoes[j].style.display = 'none';
        }

        setTimeout(function(){
            let container = document. querySelector("#container");
            container.classList.remove("hide");    
        }, 300);
    });
}

//ver quem vai jogar
function checkEl(player1, player2){
        
    if(player1 == player2){
        //x
        el = x;
    }else{
        //o
        el = o;
    }

    return el;
};

//ver quem ganhou
function checkWinCondition(){
    
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");
    
    //verificar se houve vitória horizontal primeira linha
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            // informar que X ganhou
            declareWinner('x');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            // informar que O ganhou
            declareWinner('o');
        }

    }
    //verificar se houve vitória horizontal segunda linha
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            // informar que X ganhou
            declareWinner('x');
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            // informar que O ganhou
            declareWinner('o');
        }

    }
    //verificar se houve vitória horizontal terceira linha
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            // informar que X ganhou
            declareWinner('x');
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            // informar que O ganhou
            declareWinner('o');
        }

    }

    //verificar se houve vitória vertical primeira linha
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            // informar que X ganhou
            declareWinner('x');
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            // informar que O ganhou
            declareWinner('o');
        }

    }
    //verificar se houve vitória vertical segunda linha
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            // informar que X ganhou
            declareWinner('x');
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            // informar que O ganhou
            declareWinner('o');
        }

    }
    //verificar se houve vitória horizontal terceira linha
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            // informar que X ganhou
            declareWinner('x');
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            // informar que O ganhou
            declareWinner('o');
        }

    }

    //verificar se houve vitória diagonal primeira linha
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            // informar que X ganhou
            declareWinner('x');
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            // informar que O ganhou
            declareWinner('o');
        }

    }
    //verificar se houve vitória diagonal terceira linha
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            // informar que X ganhou
            declareWinner('x');
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            // informar que O ganhou
            declareWinner('o');
        }

    }

    //deu empate
    let counter = 0;
    for(let i = 0; i < casasMarcada.length; i++){
        if(casasMarcada[i].childNodes[0] != undefined){
            counter++;
        }
    }

    if(counter == 9){
        declareWinner('empate');
    }
    
};

//função para limpar o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner){
    
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == 'x'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if(winner == 'o'){
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Deu velha!";
    }

    //exibe msg
    textoMsg.innerHTML = msg;
    mensagemJogo.classList.remove("hide");

    //esconder msg
    setTimeout(function(){
        mensagemJogo.classList.add("hide");
    }, 2000);

    //zerar as jogadas
    player1 = 0;
    player2 = 0;

    //remover x e o
    let limparTabuleiro = document.querySelectorAll(".box div");

    for(let i = 0; i < limparTabuleiro.length; i++){
        limparTabuleiro[i].parentNode.removeChild(limparTabuleiro[i]);
    };
};

//função para a IA jogar
function iaPlay(){

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < casasMarcada.length; i++){
        let randomNumber = Math.floor(Math.random() * 5);

        //vai preencher se a casa estiver vazio o filho
        if(casasMarcada[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                casasMarcada[i].appendChild(cloneO);
                counter++;
                break;
            }
        //checagem de quantas estão preenchidas  
        } else {
            filled++;
        }
    }

    if(counter == 0 && filled < 9){
        iaPlay();
    }
};