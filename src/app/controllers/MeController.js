const { mutipleMongooseToObject } = require('../../utils/mongoose');
const Course = require('../models/Course');

class MeController {
  // [GET] /storedCourse
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('me/stored-courses', {
          pageTitle: 'My Courses',
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch();
  }
}

module.exports = new MeController();
