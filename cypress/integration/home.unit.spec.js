describe('Visit the page with success', () => {
  before(() => {
    cy.visit(Cypress.env('REACT_APP_URL'));
  });

  it('should access home page and find title, list and SaveButton', () => {
    cy.get('#stockPage')
      .find('.MuiTypography-root')
      .contains('my stock')

    cy.get('#stockPage')
      .find('#list > ul').should(($ul) => {
      expect($ul).to.have.length(0)
    })

    cy.get('#stockPage')
    .find('button > span');
  });

  it('should open drawer', () => {
   cy.openDrawerCommand()

    cy.get('#drawer-component')
      .find('form')
      .should(($form) => {
        expect($form.children()).to.have.length(4)
      })
  });

  it('should close drawer', () => {
    cy.closeDrawerCommand()

    cy.get('#drawer-component').should('not.exist')
  })

  it.only('should save a new product', () => {
    cy.openDrawerCommand()

    cy.get('#drawer-component')
      .find('form')
      .get('input[name="name"]')
      .type('Moto X')
      .get('input[name="price"]')
      .clear()
      .type(1999)
      .type('{enter}');

    cy.get('.MuiSnackbar-root > .MuiPaper-root')
      .should('contain', 'Stock save with success!')

    cy.closeDrawerCommand()


    cy.get('#list > li').should(($list) => {
      expect($list).to.have.length(1)
      expect($list).to.contain('Moto X')
    })
  });

  it.only('should update Moto X', () => {
    cy.get('.MuiListItemSecondaryAction-root > .MuiButtonBase-root')
      .click()

    cy.get('#drawer-component')
      .find('form')
      .get('input')
      .should(($form) => {
        expect($form, 'Should have 3 inputs').to.have.length(3)
        expect($form.eq(1), 'Should have Moto X value').to.have.value('Moto X')
        expect($form.eq(2), 'Should have 1999 value').to.have.value('1999')
      })

    cy.get('#drawer-component')
      .find('form')
      .get('input[name="name"]')
      .clear()
      .type('Moto Z')
      .type('{enter}');

    cy.get('.MuiSnackbar-root > .MuiPaper-root')
      .should('contain', 'Stock updated with success!')

    cy.closeDrawerCommand()

    cy.get('#list > li').should(($list) => {
      expect($list).to.have.length(1)
      expect($list).to.contain('Moto Z')
    })
  });
});
