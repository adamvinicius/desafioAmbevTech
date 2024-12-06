/// <reference types="cypress" />

describe('desafio ambev-tech', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
    cy.get('#email').type('testeadam@teste.com')
    cy.get('#password').type('senhateste')
    cy.get('button[data-testid="entrar"]').click()
  })
  
  context('Adicionar item na lista de compra', () => {
    beforeEach(() => {
      cy.get('input[data-testid="pesquisar"]').type('Tasty Cotton Tuna')
      cy.get('button[data-testid="botaoPesquisar"]').click()
      cy.get('button[data-testid="adicionarNaLista"]').click()
    })

    it('Validar item na lista de compras', () => {
      cy.get('div[data-testid="shopping-cart-product-name"]').should('have.text', 'Produto:Tasty Cotton Tuna')
    })

    it('Aumentar item na lista de compras', () => {
      cy.get('button[data-testid="product-increase-quantity"]').click()
      cy.get('div[data-testid="shopping-cart-product-quantity"] > p').should('have.text', 'Total: 2')
    })

    it('limpar lista de compras', () => {
      cy.get('button[data-testid="limparLista"]').click()
      cy.get('p[data-testid="shopping-cart-empty-message"]').should('have.text', 'Seu carrinho está vazio')
    })

  })
})
