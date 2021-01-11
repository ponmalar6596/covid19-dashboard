let cors = require ('cors')
module.exports = (app) => {
    const Followups = require('../controllers/followups.controllers.js');

    // Create a new students
    app.post('/followups',cors(), Followups.create);
    app.get('/followups',cors(), Followups.findAll);
}