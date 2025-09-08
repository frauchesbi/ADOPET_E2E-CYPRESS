describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZDdhZmM1OS1hOGU1LTQ1ZWYtYTMyZC1lN2Q0OTkyNWY2MGYiLCJhZG9wdGVyTmFtZSI6IkdhYnJpZWx5IiwiaWF0IjoxNzU3MzU5NTM4LCJleHAiOjE3NTc2MTg3Mzh9.qxhDY03DWm62h79fDVEz1TGVJVUAnDOWYVYgUKLd2A4`

 it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/ed7afc59-a8e5-45ef-a32d-e7d49925f60f',
         headers: { authorization }
}).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('msg')
    })
 }) 
})

