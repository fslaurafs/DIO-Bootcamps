// VARIÁVEIS
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;  // tamanho 32 pixels

let snake = [];  // array pois tira o último e coloca no primeiro = sensação de andar
snake[0] = { x: 8 * box, y: 8 * box }  // tamanho da cobrinha
let direction = "right";

let food = { 
    x: Math.floor(Math.random() * 15 + 1) * box, 
    y: Math.floor(Math.random() * 15 + 1) * box 
}


// CRIA BOX DO JOGO
function criarBG() {
    context.fillStyle = "lightgreen";  // cor da box
    context.fillRect(0, 0, 16 * box, 16 * box);  // x, y, altura e largura
}


// CRIA COBRINHA
function criarCobrinha() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "green";  // cor da cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}


// CRIA COMIDA
function drawFood() {
    context.fillStyle = "red";  // cor da comidinha
    context.fillRect(food.x, food.y, box, box);
}


// EVENTO DE CLIQUE
document.addEventListener('keydown', update);

// controles da cobrinha
// direita = 37, baixo = 38, esqueda = 39, cima = 40
function update(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}


// INICIA JOGO
function iniciarJogo() {
    // cobrinha aparece do outro lado da box quando chega no limite
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    // choque da cobra com seu corpo
    for(i=1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    // posição inicial
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // movimentação da cobrinha
    if(direction == "right") snakeX += box;  // para direita (aumenta)
    if(direction == "left") snakeX -= box;  // para esquerda (diminui)
    if(direction == "up") snakeY -= box;  // para cima (diminui)
    if(direction == "down") snakeY += box;  // para baixo (aumenta)

    // movimento aleatório da comida e aumento do tamanho da cobrinha
    if(snakeX != food.x || snakeY != food.y) {
        snake.pop();  // retira o último elemento do array -> movimentação
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box; 
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }
    
    // adiciona elemento no começo do array -> movimentação
    let newHead = { x: snakeX, y: snakeY }
    snake.unshift(newHead);
}


let jogo = setInterval(iniciarJogo, 100);  // 100ms para iniciar jogo
