const Followups = require('../models/followups-model.js');



// Create and Save a new Students
exports.create = (req, res) => {
    // Validate request
    
    if (!req.body.followupName) {
        return res.status(400).send({
            message: "user department can not be empty"
        });
    }
    if (!req.body.name) {
        return res.status(400).send({
            message: "user batch can not be empty"
        });
    }
    if (!req.body.followupsDate) {
        return res.status(400).send({
            message: "user followupsDate can not be empty"
        });
    }
    if (!req.body.maintainDistance) {
        return res.status(400).send({
            message: "user maintainDistance can not be empty"
        });
    }
    if (!req.body.takeMedicine) {
        return res.status(400).send({
            message: "user takeMedicine can not be empty"
        });
    }
    if (!req.body.haveFever) {
        return res.status(400).send({
            message: "user haveFever can not be empty"
        });
    }
    if (!req.body.haveCold) {
        return res.status(400).send({
            message: "user haveCold can not be empty"
        });
    }
   
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    res.setHeader("Access-Control-Allow-Credentials", true);
    // Create a Students
    const followups = new Followups({
       
        followupName: req.body.followupName,
        name:req.body.name,
        followupsDate: req.body.followupsDate,
        maintainDistance: req.body.maintainDistance,
        takeMedicine: req.body.takeMedicine,
        haveFever: req.body.haveFever,
        haveCold: req.body.haveCold,
      
    });

    followups.followupsId= followups._id
    console.log(req.body);
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

exports.findAll = (req, res) => {
    console.log('hai');
    
    Followups.find()
        .then(value => {
            res.send(value);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving students."
            });
        });
};
