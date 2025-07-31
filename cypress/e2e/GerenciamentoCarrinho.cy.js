describe('Carrinho', () => {
  it('Deve visitar a home, selecionar um produto, adicionar ao carrinho e remover', () => {
    cy.fixture('seletores.json').then((seletores) => {

      //{"Cenário": "Visitar a página inicial"}
      // Dado que o usuário acessa a página inicial
      cy.visit(`${seletores.url}`);

      //{"Cenário": "Selecionar produto"}
      // Quando o usuário seleciona o primeiro produto
      cy.get(`${seletores.produto}`).first().click({force: true});

      //{"Cenário": "Adicionar ao carrinho"}
      // Então o usuário adiciona o produto ao carrinho
      cy.get(`${seletores.adicionarCarrinho}`).click({force: true});

      //{"Cenário": "Visualizar o carrinho"}
      // E o usuário acessa o carrinho
      cy.get(`${seletores.carrinho}`).click({ multiple: true, force: true });

      //{"Cenário": "Remover produto do carrinho"}
      // Quando o usuário remove o produto do carrinho
      cy.get(`${seletores.removerCarrinho}`).click();

      //{"Cenário": "Confirmar remoção"}
      // Então o usuário confirma a remoção
      cy.contains('button', `${seletores.confirmarRemoverCarrinho}`).click();

      //{"Cenário": "Validar carrinho vazio"}
      // E o sistema mostra que o carrinho está vazio
      cy.get(`${seletores.validarCarrinhoVazioElemento}`)
        .contains(`${seletores.validarCarrinhoVazioTexto}`);
    });
  });
});


