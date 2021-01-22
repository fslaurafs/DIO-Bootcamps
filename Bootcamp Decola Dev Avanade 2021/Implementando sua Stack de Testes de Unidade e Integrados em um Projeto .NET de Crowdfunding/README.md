<h1> Implementando sua stack de testes de unidade e integrados em um projeto .NET de Crowdfunding </h1>

<hr>

<h3> Você acha realmente importante testar seu código??? </h3>

<p>
Testar faz parte do desenvolvimento de software! <br>
(ou pelo menos deveria).
</p>

<h5> Quando não testamos, nos deparamos com: </h5>

<ul>
    <li><strong>+</strong> bugs; </li>
    <li><strong>-</strong> qualidade; </li>
    <li><strong>+</strong> atrasos; </li>
    <li><strong>-</strong> confiança; </li>
    <li><strong>+</strong> desmotivação; </li>
    <li><strong>+</strong> turnover; </li>
    <li><strong>+</strong> prejuízos; </li>
    <li><strong>+</strong> implicações legais. </li>
</ul>

<h5> Regra 10 de Myers </h5>

<p>
"A cada etapa que você passa do seu desenvolvimento, para corrigir um erro vai multiplicando por 10". <br>
Quanto mais cedo se resolvem os problemas, menor o impacto causado.
</p>

<hr>

<h3> Tipos mais comuns de testes </h3>

<p> <code>Tests.Common (Fixtures)</code> </p>

<h5> Testes de Unidade / UnitTest: </h5>

<ul>
    <li> <strike>Testes Unitários;</strike> </li>
    <li> Unidade: menor parte testável de um software; </li>
    <li> Orientação a Objetos: classe; </li>
    <li> <code>Automates.UI.Tests</code> </li>
</ul>

<h5> Teste de Integração </h5>

<ul>
    <li> Encontrar falhas de integração emtre as unidades, e não mais em testar as funcionalidades da mesma; </li>
    <li> Integração entre unidades ou entre sistemas;</li>
    <li> <code>Integration.Tests</code> </li>
</ul>

<h5> Testes Automatizados </h5>

<ul>
    <li> "Simula" ações do usuário; </li>
    <li> Aceitação: caixa preta; </li>
    <li> Regressão: garante integridade de versões passadas; </li>
    <li> Processo de automatização é caro: selecionar funcionalidades; </li>
    <li> <code>Unit.Tests</code> </li>
</ul>

<hr>

<h3> Projeto Vaquinha </h3>

<ul>
    <li> Projeto demonstração de testes; </li>
    <li> .Net Core 3.1; </li>
    <li> ASP.NET Core MVC </li>
</ul>

<h5> Estrutura do Projeto </h5>

<ul>
    <li> <strong>Vaquinha.MVC</strong> (ASP.NET Core MVC) </li>
    <li> <strong>Vaquinha.Domain</strong> </li>
    <li> <strong>Vaquinha.Service</strong> </li>
    <li> <strong>Vaquinha.Response</strong> </li>
</ul>

<h5> Implementação </h5>

<ul>
    <li> <a href="https://github.com/elizarp/dotnet-vaquinha-tests"> Vaquinha Tests Project .NET </a> </li>
</ul>

<hr>

<h3> MVC: Model View Controller </h3>

<ul>
    <li> <strong>Model:</strong> armazena, manipula e gera os dados. </li>
    <li> <strong>View:</strong> apresenta o conteúdo por meio da interface do usuário. </li>
    <li> <strong>Controller:</strong> cuida da interação do usuário, trabalham com o model e, em última análise, selecionam uma view a ser renderizada. </li>
</ul>

<hr>

<h3> Test Driven Development </h3>

<p>
Ciclo TDD
</p>

<ul>
    <li> <span style="color:red">RED:</span> escrever testes que irão falhar; </li>
    <li> <span style="color:green">GREEN:</span> desenvolver código para passar o teste; </li>
    <li> <span style="color:blue">REFACTOR:</span> refatorar código. </li>
</ul>
