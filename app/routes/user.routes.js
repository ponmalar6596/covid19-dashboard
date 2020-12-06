module.exports = (app) => {
    const User = require('../controllers/user.controller.js');

    // Create a new students
    app.post('/user', User.create);
    app.get('/user', User.findAll);
}