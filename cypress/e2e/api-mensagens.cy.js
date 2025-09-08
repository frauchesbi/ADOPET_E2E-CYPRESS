describe('Api Adopet', () => {

 it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/ed7afc59-a8e5-45ef-a32d-e7d49925f60f',
         headers: cypress.env()
}).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('msg')
    })
 }) 
})

