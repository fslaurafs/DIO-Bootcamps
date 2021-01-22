<h1> Aplicando Design Patterns na Prática com C# </h1>

<h4> Definição </h4>

<p>
  Design Patterns são soluções reutilizáveis para problemas comumente ocorridos (no contexto do design de software). Estes padrões foram iniciados como melhores práticas que foram aplicadas repetidamente a problemas semelhantes encontrados em diferentes contextos. Eles se tornaram populares depois que foram apresentados, de forma estruturada, no livro "Design Patterns - Elements of Reusable Object-Oriented Software" (Gang of Four) em 1994.
</p>

<p>
  O "Gang of Four" representa apenas uma de muitas coleções.
</p>

<hr>

<h4> Porque eu devo usar? </h4>

<ul>
  <li><strong> Produtividade: </strong> Estes padrões são modelos de resolução de problemas que já foram utilizados e testados inúmeras vezes; </li>
  <li><strong> Manutenção: </strong> Os padrões são baseados em soluções de baixo acoplamento e padronização de soluções; </li>
  <li><strong> Temos Universais: </strong> Os projetos são amplamente conhecidos desta forma as discussões técnicas são facilitadas, é mais simples falar o nome de um "design pattern" do que toda vez ter que explicar o seu comportamente.</li>
</ul>

<hr />

<h4> ATENÇÃO! </h4>

<p>
  Antes de começar a aplicar padrões de projetos precisamos entender algumas coisas...
</p>

<h4>Desuso</h4>

<p>
  Alguns padrões surgiram para solucionar limitações de linguagens de programação com menos recursos no que diz respeito à abstração, nestes casos os padrões era como "gambiarras" que proporcionavam à linguagem a possibilidade de fazer implementações que não eram possíveis nativamente. <br>
  Linguagens mais recentes trazem alguns destes recursos nativamente, em alguns outros casos os padrões foram substituídos por padrões mais recentes. <br>
  O padrão Strategy, por exemplo, pode ser substituído pelo o uso de uma função anônima.
</p>

<h4> Soluções "Prontas" </h4>

<p>
  Os padrões não são soluções prontas, códigos que podemos pegar prontos e "jogar" dentro do projeto, em alguns casos é necessário ajustar o padrão ao contexto em que o projeto necessita, e isso costuma demandar um conhecimento mais profundo por parte da equipe de desenvolvimento.
</p>

<h4>A "bala de prata"</h4>

<p>
  É comum ver desenvolvedores que ao conhecer um novo padrão/técnica, tentam encaixar ele em todos os cenários, inclusive em situações onde uma abordagem mais simples seria suficiente para resolver o problema. <br>
  Um martelo é ótimo para colocar um prego na parede, mas não funciona tão bem se você tiver um parafuso.
</p>

<p>
  Lembre-se: Não é uma competição para ver quem usa mais padrões.
</p>

<hr />

<h4> Problemas comuns em aplicações que NÃO usam o S.O.L.I.D. </h4>

<ul>
  <li> Duplicidade de Código; </li>
  <li> Código sem estrutura coesa; </li>
  <li> Dificuldade de manter/evoluir; </li>
  <li> Pequenos ajustes podem quebrar o código, inclusive em outras partes do sistema; </li>
  <li> Dificuldade para executar e criar testes unitários; </li>
  <li> Dificuldade de reaproveitar código para outras aplicações.</li>
</ul>

<h4> Principais benefícios </h4>

<ul>
  <li> Fácil manutenção; </li>
  <li> Fácil entendimento; </li>
  <li> Organização; </li>
  <li> Aberta a receber novas funcionalidades sem danos colaterais; </li>
  <li> Reaproveitamento de código; </li>
  <li> Fácil adaptação a mudanças no escopo do projeto. </li>
</ul>

<hr>

<h4> Exemplos Práticos (WebAPI REST .NET Core) </h4>

<p align="left">
  <a href="https://github.com/fructuoso/DesignPatternSamples"> DesignPatternSamples
  </a>
</p>

<h4> Estudos Complementares </h4>

<p>
  <a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/"> Cloud Design Patterns: </a> Apresenta os principais desafios do desenvolvimento na nuvem e padrões difundidos no mercado para supera-los.
</p>

<hr>

<h4> Referências: </h4>

<ul>
  <li><a href="https://www.oodesign.com/"> OODesign </a></li>
  <li><a href="https://www.dofactory.com/net/design-patterns/"> dofactory </a></li>
  <li><a href="https://refactoring.guru/design-patterns"> Refactoring Guru </a></li>
</ul>
