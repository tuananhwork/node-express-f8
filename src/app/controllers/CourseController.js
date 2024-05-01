const { mongooseToObject } = require('../../utils/mongoose');
const Course = require('../models/Course');

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', {
          pageTitle: `Detail Course`,
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render('courses/create', {
      pageTitle: 'Create a new course',
    });
  }

  store(req, res, next) {
    const course = new Course(req.body);
    course.save().then(res.redirect('/').catch((err) => {}));
  }
}

module.exports = new CourseController();
