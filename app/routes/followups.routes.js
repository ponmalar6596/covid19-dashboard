module.exports = (app) => {
    const Followups = require('../controllers/followups.controllers.js');

    // Create a new students
    app.post('/followups', Followups.create);
}