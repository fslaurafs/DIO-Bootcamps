/* // INTRODUÇÃO AO JAVASCRIPT
var nome = "Laura Sorato";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem " + n1 + " anos");
//alert(n1 + n2);

console.log(nome);
console.log(n1 * n2);

console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));

console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
*/



/* // ARRAY E DICIONÁRIO
var lista = ["maca", "pera", "laranja"];

lista.push("uva");  // adiciona um elemento na lista
lista.pop();  // retira o último elemento da lista

//console.log(lista);  // imprime toda a lista
//console.log(lista[1]);  // imprime o elemento (começa em 0)
//console.log(lista.length);  // imprime o tamanho da lista
//console.log(lista.reverse());  // reverte a ordem da lista
//console.log(lista.toString());  // transforma o array em string
//console.log(lista.toString()[0]);  // imprime a primeira letra da string
//console.log(lista.join(" - "));  // altera a vírgula para traço
*/



/* // ARRAY E DICIONÁRIO
//var fruta = {nome:"maca", cor:"vermelha"}
var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]

//console.log(fruta);
//console.log(fruta.nome);
//alert(fruta.cor);
//console.log(frutas);
alert(frutas[1].nome);
*/



/* // CONDIDIONAIS, LAÇOS DE REPETIÇÃO E DATE
//var idade = prompt("Qual sua idade? ");
//var idade = 18;
//var count = 0;
//var count;
//var d = new Date();

//if(idade > 18) {
//    alert("maior de idade");
//} else {
//    alert("menor de idade");
//}

//while(count <= 5) {
    //console.log(count);
//    alert(count);
//    count++;
//}

//for (count = 0; count <= 5; count++) {
//    alert(count);
//}

//alert(d);
//alert(d.getMonth() + 1);  // começa sempre do 0, por isso o +1
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());
*/



/* // DESENCOLVA PÁGINAS WEB COM JAVASCRIPT
//function soma(n1, n2) {
//    return n1 + n2;
//}

//function setReplace(frase, nome, novo_nome) {
//    return frase.replace(nome, novo_nome);
//}

//var validar = 0;  // global
function validaIdade(idade) {
    //validar;  // global
    var validar;  // local
    if(idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));  // local
//validaIdade(idade);  // global
//console.log(validar);  // global
*/



// PARTE 2: MANIPULANDO ELEMENTOS DA PÁGINA
function clicou() {
    //alert("Obrigada por clicar!");

    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://github.com/fslaurafs");  // nova guia
    //window.location.href = "https://github.com/fslaurafs";  // mesma guia
}

function trocar(elemento) {
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
