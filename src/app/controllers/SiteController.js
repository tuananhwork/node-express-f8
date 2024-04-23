class SiteController {
  index(req, res) {
    res.render('pages/home', {
      pageTitle: 'Home Page',
    });
  }

  search(req, res) {
    res.render('pages/search', {
      pageTitle: 'Search Page',
    });
  }

  login(req, res) {
    res.render('pages/login', {
      layout: 'account',
      pageTitle: 'Login Page',
    });
  }

  register(req, res) {
    res.render('pages/register', {
      layout: 'account',
      pageTitle: 'Register Page',
    });
  }
}

module.exports = new SiteController();
