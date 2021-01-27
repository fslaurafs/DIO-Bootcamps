/*
> DESAFIO
    Para ajudar a calcular as notas referentes às duas avaliações dos alunos, uma professora pediu para que
você desenvolva um programa que calcule e imprima a média semestral. Faça com que o algoritmo só aceite notas
válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.

> ENTRADA
    A entrada contém vários valores reais, positivos ou negativos. O programa deve ser encerrado quando forem
lidas duas notas válidas.

> SAÍDA
    Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
    Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do
cálculo. O valor deve ser apresentado com duas casas após o ponto decimal.

> Exemplo de Entrada	Exemplo de Saída
-3.5                    nota invalida
3.5                     nota invalida
11.0                    media = 6.75
10.0
*/


using System;

class ValidacaoDeNota {
  public static void Main(string[] args) {
    double somaNotas = 0;
    int contador = 0;
    
    do {
      double notaEntrada = double.Parse(Console.ReadLine());
      
      if(notaEntrada < 0 || notaEntrada > 10) {
        Console.WriteLine("nota invalida");
      } else {
        contador++;
        somaNotas += notaEntrada;
      }
    }
    while(contador < 2);
    
    Console.WriteLine("media = " + (somaNotas / 2).ToString("N2"));
    
  }
}
