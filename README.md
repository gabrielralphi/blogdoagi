# blogdoagi

Nesse projeto foi feito 2 casos de testes para o Blog do Agi 
https://blogdoagi.com.br/

    Cenário: Clicar na lupa e deixar o campo de pesquisa em branco e clicar no botão PESQUISAR
        Dado que um usuário entre no blog do Agi
        Quando ele clica no botão da Lupa
            E não preenche nada no campo de pesquisa
            E clica no botão PESQUISAR
        Então exibe em uma nova página o resultado da busca

    
    Cenário: Acessa um artigo de um item pesquisado
        Dado que um usuário entre no blog do Agi
        Quando ele clica no botão da Lupa
            E preenche "teste" no campo de pesquisa
            E clica no botão PESQUISAR
        Então exibe em uma nova página o resultado da busca
            E acessa um artigo com a "teste"
