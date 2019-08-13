class SignInPage {
	visit(url) {
		cy.visit(url);
	}

	FillInEmail(email) {
		cy.location('href').then((href) => {
			if (href === 'https://api-staging.agentero.com/experts/sign_in') {
				cy.get('input[type=email]').click().type(email);
			}
		});
	}

	FillInPassword(password) {
		cy.get('input[type=password]').click().type(password);
	}
	ClickLogin() {
		cy.get('input[type=submit]').click();
	}
}
export default SignInPage;
