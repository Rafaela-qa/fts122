$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Pesquisa.feature");
formatter.feature({
  "line": 1,
  "name": "Pesquisa no Google",
  "description": "",
  "id": "pesquisa-no-google",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12542330600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Com sucesso",
  "description": "",
  "id": "pesquisa-no-google;com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "que acesso o Google",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "digito \"Chocolate\" e aperto Enter",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "exibe uma pagina com links e o titulo \"Chocolate - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Pesquisa.que_acesso_o_Google()"
});
formatter.result({
  "duration": 1488656900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chocolate",
      "offset": 8
    }
  ],
  "location": "Pesquisa.digito_e_aperto_Enter(String)"
});
formatter.result({
  "duration": 2691327800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chocolate - Pesquisa Google",
      "offset": 39
    }
  ],
  "location": "Pesquisa.exibe_uma_pagina_com_links_e_o_titulo(String)"
});
formatter.result({
  "duration": 86995200,
  "status": "passed"
});
formatter.after({
  "duration": 885350600,
  "status": "passed"
});
});