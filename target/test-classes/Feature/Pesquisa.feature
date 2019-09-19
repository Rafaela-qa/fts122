Feature: Pesquisa no Google

  Scenario: Com sucesso
    Given que acesso o Google
    When digito "Chocolate" e aperto Enter
    Then exibe uma pagina com links e o titulo "Chocolate - Pesquisa Google"

