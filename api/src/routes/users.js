const user_controller = require('../controllers/UserController');

const usersRoute = app => {

  app.route('/users')
    .get(user_controller.index)
    .post(user_controller.store)
    .put(user_controller.edit)
    .patch(user_controller.update)
};

module.exports = usersRoute;
