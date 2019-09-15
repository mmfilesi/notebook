/*
Feature: Login
  
  Background:
    Given As user I am in login page

  Scenario: UI input name
    When click reset name button
    Then input name some be empty

  Scenario: UI input password
    When click reset password button
    Then input password some be empty

  Scenario: user invalid cant do login
    When type user name invalid
    When type user password invalid
    Then error message must be visible

  Scenario: user valid can do login
    When type user name valid
    When type user password valid
    Then user do login
*/

describe('Login', function () {

  const inputName = '[data-qa=auth-name-input]';
  const resetName = '[data-qa=auth-name-reset]';
  const labelName = '[data-qa=auth-name-label]';
  const inputPwd = '[data-qa=auth-password-input]';
  const resetPwd = '[data-qa=auth-password-reset]';
  const labelPwd = '[data-qa=auth-password-label]';
  const submitButton = '[data-qa=auth-submit]';
  const errorMessage = '[data-qa=error-message]';
   
  before(function () {
    cy.visit('/login');
  });

  beforeEach(function () {
    cy.get(inputName).clear();
    cy.get(inputPwd).clear();   
  });

  /* ======================================
    UI actions
  ====================================== */

  it('can reset name', function() {
    cy.get(inputName).type('foo');
    cy.get(resetName).click();
    cy.get(inputName).invoke('val').then(val => {
      expect(val).to.equal('');      
    });
  });

  it('can focus name', function() {
    cy.get(labelName).click();
    cy.get(inputName).should( $elem => {
      expect( $elem.is(":focus") ).to.be.true;
    });
  });

  it('can reset password', function() {
    cy.get(inputPwd).type('foo');
    cy.get(resetPwd).click();
    cy.get(inputPwd).invoke('val').then(val => {
      expect(val).to.equal('');      
    });
  }); 
  
  it('can focus password', function() {
    cy.get(labelPwd).click();
    cy.get(inputPwd).should( $elem => {
      expect( $elem.is(":focus") ).to.be.true;
    });
  });

  it('should show required validations', function() {
    cy.get(submitButton).click();
    cy.get(errorMessage).should('have.class', 'msg--error')
  });

  it('should stop invalid users', function() {
    cy.get(inputName).type('foo');
    cy.get(inputPwd).type('bar');
    cy.get(submitButton).click();
    cy.url().should('include', '/login');
    cy.get(errorMessage).should('have.class', 'msg--error')
  });

  it('should login valid users', function() {
    cy.get(inputName).type('userValid');
    cy.get(inputPwd).type('pwdValid');
    cy.get(submitButton).click();
    cy.url().should('include', '/dashboard');
  });

});