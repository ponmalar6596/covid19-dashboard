module.exports = (app) => {
    const patients = require('../controllers/patients.controller.js');

    // Create a new students
    app.post('/patients', patients.create);
}