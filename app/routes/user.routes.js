module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new students
    app.post('/user', user.create);
}