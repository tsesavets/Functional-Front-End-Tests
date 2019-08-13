import SignInPage from './pages/SignInPage';

const url = 'https://api-staging.agentero.com/experts/sign_in';

describe('The First Test', () => {
	it('Login to the web app', () => {
		const SignIn = new SignInPage();
		SignIn.visit(url);
		SignIn.FillInEmail('dzianis.tsesavets+42@agentero.com');
		SignIn.FillInPassword('password');
		SignIn.ClickLogin();
	});
});
