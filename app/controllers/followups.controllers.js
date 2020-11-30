const Followups = require('../models/followups-model.js');

// Create and Save a new Students
exports.create = (req, res) => {
    // Validate request
     
    if (!req.body.name) {
        return res.status(400).send({
            message: "user department can not be empty"
        });
    }
    if (!req.body.patientList) {
        return res.status(400).send({
            message: "user batch can not be empty"
        });
    }
    if (!req.body.executiveId) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.followupsDate) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.maintainDistance) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.takeMedicine) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.haveFever) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.haveCold) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.haveThoughtpain) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }

    // Create a Students
    const followups = new Followups({
       
        name: req.body.name,
        patientList:req.body.patientList,
        executiveId: req.body.executiveId,
        followupsDate: req.body.followupsDate,
        maintainDistance: req.body.maintainDistance,
        takeMedicine: req.body.takeMedicine,
        haveFever: req.body.haveFever,
        haveCold: req.body.haveCold,
        haveThoughtpain: req.body.haveThoughtpain
    });

    followups.followupsId= followups._id
    // Save Students in the database
    followups.save()
        .then(data => {           
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};
