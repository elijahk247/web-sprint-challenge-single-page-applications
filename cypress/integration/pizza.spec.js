describe('Pizza form tester', () => {
    describe('Testing typing in the box', () => {
        it('can naviagate to pizza website "http://localhost:3000/pizza"', () => {
            cy.visit('http://localhost:3000/pizza');
        })

        it('can add text to the box', () => {
            cy.get('input[name="specialInstructions"]')
            .type('Special Instructions test')
            .should('have.value', 'Special Instructions test')
        })

        it('can select multiple toppings', () => {
            cy.get('input[name="pepperoni"]').click()
            cy.get('input[name="mushroom"]').click()
        })

        it('can submit the form', () => {
            cy.get('input[name="name"]')
            .type('Eli')

            cy.get('input[value="original red"]').click()
            
            cy.get('[name="size"]').select('large')
            //cy.select('select[value="large"]')
            cy.get('#submitBtn').click()
        })
    })

})