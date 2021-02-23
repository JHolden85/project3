const withAuth = (req, res, next) => {
	if (!req.session.logged_in) {
		console.log('Unauthorized');
		res.redirect('/login');
	} else {
		console.log('Authorized');
		next();
	}
};

module.exports = withAuth;
