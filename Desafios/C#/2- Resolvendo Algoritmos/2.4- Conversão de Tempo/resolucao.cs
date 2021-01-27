/*
> DESAFIO
  Você terá o desafio de ler um valor inteiro, que é o tempo de duração em segundos de um determinado evento
em uma loja, e informe-o expresso no formato horas:minutos:segundos.

> ENTRADA
  O arquivo de entrada contém um valor inteiro N.

> SAÍDA
  Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme
exemplo fornecido.

> Exemplo de Entrada  	Exemplo de Saída
556                     0:9:16
------------------------------------------
1                       0:0:1
*/


using System;

namespace Desafio {
  class ConversaoDeTempo {
    public static void Main(string[] args) {
      var tempo = int.Parse(Console.ReadLine());
      
      // 1hr = 60 minutos * 60 segundos
      var horas = (tempo / 3600);
      var minutos = (tempo % 3600) / 60;
      var segundos = (tempo % 3600) % 60;
      
      Console.WriteLine($"{horas}:{minutos}:{segundos}");
      
    }
  }
}
