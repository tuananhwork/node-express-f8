const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utils/mongoose');

class SiteController {
  async index(req, res, next) {
    await Course.find({})
      .then((courses) => {
        res.render('pages/home', {
          pageTitle: 'Home Page',
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);

    // res.render('pages/home', {
    //   pageTitle: 'Home Page',
    // });
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
