describe('메인페이지 테스트', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/main`)
  })

  context('메인 페이지에 들어온 경우 .', () => {
    it('장바구니 페이지로 이동하는 버튼이 있어야 한다.', () => {
      cy.get('.ant-btn')
        .should('have.text', '장바구니로 이동하기')
        .should('be.visible')
    })
  })
})
