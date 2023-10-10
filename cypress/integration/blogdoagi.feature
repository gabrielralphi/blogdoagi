Feature: Pesquisar no blog do Agi


    Scenario: Clicar na lupa e deixar o campo de pesquisa em branco e clicar no botão PESQUISAR
        Given que um usuário entre no blog do Agi
        When ele clica no botão da Lupa
            And não preenche nada no campo de pesquisa
            And clica no botão PESQUISAR
        Then exibe em uma nova página o resultado da busca

    
    Scenario: Acessa um artigo de um item pesquisado
        Given que um usuário entre no blog do Agi
        When ele clica no botão da Lupa
            And preenche "teste" no campo de pesquisa
            And clica no botão PESQUISAR
        Then exibe em uma nova página o resultado da busca
            And acessa um artigo com a "teste"

