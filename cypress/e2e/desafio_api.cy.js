

describe('desafio ambev-tech', () => {
    beforeEach(() => {

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login', 
            header: {
                ContentType: 'application/json'
            },
            
            body: {
                email: 'testeadam@teste.com',
                password: 'senhateste',
            },
        }).then((response) => {
            Cypress.env('token', response.body.authorization)
            
        })
    })
    
    it('Adicionar produto no carrinho', () => {
        
        const carrinho = {
        produtos: [
            { idProduto: "06kfE4uoGE3VbFDj", quantidade: 1 }
        ]
        };

        cy.request({
        method: 'POST',
        url: 'https://serverest.dev/carrinhos',
        headers: {
            Authorization:  Cypress.env('token'),
            ContentType: 'application/json'
        },
        body: carrinho
        })
        .then(response => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('_id');
        });
    })

    it('Cancelar Compra', () => {
        
 
            cy.request({
              method: 'DELETE',
              url: 'https://serverest.dev/carrinhos/cancelar-compra',
              headers: {
                Authorization:  Cypress.env('token'),
              }
            })
            .then(response => {
              expect(response.status).to.eq(200); 
            });
    })

    it('Adicionar produtos no carrinho', () => {

        const carrinho = {
        produtos: [
            { idProduto: "06kfE4uoGE3VbFDj", quantidade: 2 },
            { idProduto: "0ucSktJ0mTBIxFOJ", quantidade: 2 }
            
        ]
        };

        cy.request({
        method: 'POST',
        url: 'https://serverest.dev/carrinhos',
        headers: {
            Authorization:  Cypress.env('token'),
            ContentType: 'application/json'
        },
        body: carrinho
        })
        .then(response => {
        // Verificando a resposta
        expect(response.status).to.eq(201); 
        expect(response.body).to.have.property('_id');
        });
    })

    it('Concluior Compra', () => {
        
            
        // Realizando a requisição POST
        cy.request({
          method: 'DELETE',
          url: 'https://serverest.dev/carrinhos/concluir-compra',
          headers: {
            Authorization:  Cypress.env('token'),
          }
        })
        .then(response => {
          // Verificando a resposta
          expect(response.status).to.eq(200);
        });
})

    

})