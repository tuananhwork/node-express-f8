const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utils/mongoose');

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('pages/home', {
          pageTitle: 'Home Page',
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
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
