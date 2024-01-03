describe('메인 페이지 테스트', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/main`)
  })

  context('메인 페이지에 들어온 경우.', () => {
    it('화면이 정상적으로 표시되어야 한다.', () => {
      cy.get(`[aria-label="장바구니로 이동"]`)
        .should('have.text', '장바구니로 이동하기')
        .should('be.visible')
      cy.get(`[aria-label="1번째 상품"]`).should('be.visible')
      cy.get(`[aria-label="2번째 상품"]`).should('be.visible')
      cy.get(`[aria-label="3번째 상품"]`).should('be.visible')
      cy.get(`[aria-label="4번째 상품"]`).should('be.visible')
      cy.get(`[aria-label="5번째 상품"]`).should('be.visible')
      cy.get(`[aria-label="6번째 상품"]`).should('be.visible')
      cy.get(`[aria-label="7번째 상품"]`).should('be.visible')
      cy.get(`[aria-label="8번째 상품"]`).should('be.visible')
    })

    it('장바구니로 이동하기 버튼을 누르면 장바구니 페이지로 이동해야한다.', () => {
      cy.get(`[aria-label="장바구니로 이동"]`).click()
      cy.url().should('include', '/shopping-cart')
    })
  })
})

describe('상품 추가 모달 테스트', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/main`)
    cy.get(`[aria-label="1번째 상품"]`).click()
  })

  context('상품을 클릭한 경우.', () => {
    it('장바구니에 추가할것인지 묻는 모달이 표시되어야 한다.', () => {
      cy.get('.ant-modal-content').should('be.visible')
      cy.get('.ant-modal-footer > .ant-btn-default').should('be.visible')
      cy.get('.ant-btn-primary').should('be.visible')
    })

    it('취소 버튼을 누를경우 모달이 사라져야 한다.', () => {
      cy.get('.ant-modal-footer > .ant-btn-default').click()
      cy.get('.ant-modal-content').should('not.be.visible')
    })

    it('OK 버튼을 누를경우 장바구니 이동 모달이 생성 되어야 한다.', () => {
      cy.get('.ant-btn-primary').click()
      cy.get(
        ':nth-child(4) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content'
      ).should('be.visible')
    })
  })
})

describe('장바구니 이동 모달 테스트', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/main`)
    cy.get(`[aria-label="1번째 상품"]`).click()
    cy.get('.ant-btn-primary').click()
  })

  context('상품을 클릭한 경우.', () => {
    it('장바구니 이동 모달에서 취소버튼을 누를경우 모달이 사라져야 한다.', () => {
      cy.get(
        ':nth-child(4) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-default'
      ).click()
      cy.get(
        ':nth-child(4) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content'
      ).should('not.be.visible')
    })

    it('OK 버튼을 누를경우 장바구니 페이지로 이동 되어야 한다.', () => {
      cy.get(
        ':nth-child(4) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-primary'
      ).click()
      cy.url().should('include', '/shopping-cart')
    })
  })
})
