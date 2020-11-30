module.exports = (app) => {
    const followups = require('../controllers/followups.controllers.js');

    // Create a new students
    app.post('/followups', followups.create);
}