const User = require('../models/user-model.js');

// Create and Save a new Students
exports.create = (req, res) => {
    // Validate request
     
    if (!req.body.name) {
        return res.status(400).send({
            message: "user department can not be empty"
        });
    }
    if (!req.body.emailId) {
        return res.status(400).send({
            message: "user batch can not be empty"
        });
    }
    if (!req.body.password) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.userType) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    if (!req.body.mobileNo) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    // Create a Students
    const user = new User({
       
        name: req.body.name,
        emailId: req.body.emailId,
        password: req.body.password,
        userType: req.body.userType,
        mobileNo: req.body.mobileNo
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
