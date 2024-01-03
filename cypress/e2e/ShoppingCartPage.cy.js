describe('빈 장바구니 페이지 테스트', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/shopping-cart`)
  })

  context('장바구니 페이지에 들어온 경우.', () => {
    it('담긴 상품이 없을경우 상품이 없다고 표시되어야 한다.', () => {
      cy.get(`[aria-label="빈 장바구니"]`).should('be.visible')
    })
  })
})

describe('장바구니 페이지 테스트', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/main`)
    cy.get(`[aria-label="1번째 상품"]`).click()
    cy.get('.ant-btn-primary').click()
    cy.get(
      ':nth-child(4) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-primary'
    ).click()
  })

  context('장바구니 페이지에 들어온 경우.', () => {
    it('담긴 상품이 있을경우 상품과 수량이 표시되어야 한다.', () => {
      cy.get(`[aria-label="장바구니"]`).should('be.visible')
    })

    it('결제 금액은 총금액과 배송비를 합한 금액이어야 한다.', () => {
      cy.get(`[aria-label="주문의 총 결제 금액"]`).should(
        'have.text',
        '4,590원'
      )
    })
  })
})

describe('수량 변경 테스트', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/main`)
    cy.get(`[aria-label="1번째 상품"]`).click()
    cy.get('.ant-btn-primary').click()
    cy.get(
      ':nth-child(4) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-primary'
    ).click()
  })

  context('담긴 상품의 수량을 변경할 경우.', () => {
    it('변경된 금액이 표시되어야 한다.', () => {
      const price = 1590
      cy.get(`[aria-label="수량 -"]`).should('be.visible').click()
      cy.get('.ant-input').should('have.value', 0)
      cy.get(`[aria-label="수량 +"]`).should('be.visible').click()
      cy.get(`[aria-label="물건의 총 금액"]`).should(
        'have.text',
        `${price.toLocaleString('ko-KR')}원`
      )
    })

    it('총 금액이 3만원 미만이라면 배송비 3000원이 표시되어야 한다.', () => {
      cy.get(`[aria-label="배송비"]`).should('have.text', '3,000원')
    })

    it('총 금액이 3만원 이상이라면 배송비 0원이 표시되어야 한다.', () => {
      cy.get('.ant-input').clear().type('100')
      cy.get(`[aria-label="배송비"]`).should('have.text', '0원')
    })
  })
})
