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

  // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/create', {
      pageTitle: 'Create a new course',
    });
  }

  // [GET] /courses/edit/:id
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render('courses/edit', {
          pageTitle: `Edit Course: ${course.name}`,
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // [POST] /courses/store
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = new CourseController();
