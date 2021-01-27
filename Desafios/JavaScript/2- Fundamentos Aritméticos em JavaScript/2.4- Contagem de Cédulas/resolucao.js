/* 
> DESAFIO
    Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas)
onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1.
Na sequência mostre o valor lido e a relação de notas necessárias.

> ENTRADA
    Você receberá um valor inteiro N (0 < N < 1000000).

> SAÍDA
    Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída
abaixo. Após cada linha deve ser imprimido o fim de linha.

> Exemplo de Entrada	Exemplo de Saída
576                     576
                        5 nota(s) de R$ 100,00
                        1 nota(s) de R$ 50,00
                        1 nota(s) de R$ 20,00
                        0 nota(s) de R$ 10,00
                        1 nota(s) de R$ 5,00
                        0 nota(s) de R$ 2,00
                        1 nota(s) de R$ 1,00
--------------------------------------------------
11257                   11257
                        112 nota(s) de R$ 100,00
                        1 nota(s) de R$ 50,00
                        0 nota(s) de R$ 20,00
                        0 nota(s) de R$ 10,00
                        1 nota(s) de R$ 5,00
                        1 nota(s) de R$ 2,00
                        0 nota(s) de R$ 1,00 
--------------------------------------------------
503                     503
                        5 nota(s) de R$ 100,00
                        0 nota(s) de R$ 50,00
                        0 nota(s) de R$ 20,00
                        0 nota(s) de R$ 10,00
                        0 nota(s) de R$ 5,00
                        1 nota(s) de R$ 2,00
                        1 nota(s) de R$ 1,00
*/


let notasDisponiveis = [100, 50, 20, 10, 5, 2, 1];
let notas = [0, 0, 0, 0, 0, 0, 0];

let valor = parseInt(gets());
let resto = valor;

// faz a divisão do valor inteiro pelas notas disponíveis (lembrar do "Banco Dev" em python)
while(resto >= 1) {
  nota = notasDisponiveis.findIndex(value => value <= resto);
  notas[nota] = Math.trunc(resto / notasDisponiveis[nota]);
  resto = resto % notasDisponiveis[nota];
}

console.log(valor);
console.log(notas[0] + " nota(s) de R$ 100,00");
console.log(notas[1] + " nota(s) de R$ 50,00");
console.log(notas[2] + " nota(s) de R$ 20,00");
console.log(notas[3] + " nota(s) de R$ 10,00");
console.log(notas[4] + " nota(s) de R$ 5,00");
console.log(notas[5] + " nota(s) de R$ 2,00");
console.log(notas[6] + " nota(s) de R$ 1,00");
