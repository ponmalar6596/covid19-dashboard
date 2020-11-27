const User = require('../models/patients-model.js');

// Create and Save a new Students
exports.create = (req, res) => {
    // Validate request
     
    if (!req.body.name) {
        return res.status(400).send({
            message: "user department can not be empty"
        });
    }
    if (!req.body.phoneNo) {
        return res.status(400).send({
            message: "user batch can not be empty"
        });
    }
    if (!req.body.pincode) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.streetName) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.areaName) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.tesedOn) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    } if (!req.body.resultsArrivedOn) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    } if (!req.body.quarantineStartedOn) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    } if (!req.body.curedOn) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    } if (!req.body.underWentHospitalization) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    // Create a Students
    const user = new User({
       
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        pincode: req.body.pincode,
        streetName: req.body.streetName,
        areaName: req.body.areaName,
        tesedOn: req.body.tesedOn, 
        resultsArrivedOn: req.body.resultsArrivedOn,
        quarantineStartedOn: req.body.quarantineStartedOn,
        curedOn: req.body.curedOn,
        underWentHospitalization: req.body.underWentHospitalization,
    });

    user.userId= user._id
    // Save Students in the database
    user.save()
        .then(data => {           
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};
