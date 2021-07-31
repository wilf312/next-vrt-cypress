/// <reference types="cypress" />
context('トップページ', () => {
  it('初期読み込み', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000);
    cy.get('body').screenshot('login');
  });
});
