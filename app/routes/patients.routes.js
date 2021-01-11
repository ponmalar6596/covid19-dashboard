let cors = require ('cors')
module.exports = (app) => {
    const Patients = require('../controllers/patients.controller.js');

    // Create a new students
    app.post('/patients',cors(),Patients.create);
    app.get('/patients',cors(), Patients.findAll);
    app.get('/patients/findOne',cors(), Patients.findOneById);   
    app.put('/patients/:patientsId',cors(), Patients.update);
}