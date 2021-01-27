/*
> DESAFIO
    Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

> ENTRADA
    Você receberá 1 valor inteiro N, onde N > 0.

> SAÍDA
    Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

> Exemplo de Entrada	Exemplo de Saída
6                       2
                        4
                        6
*/


let numero = gets();
let par = 2;

while(par <= numero) {
  console.log(par);
  par += 2;
}
