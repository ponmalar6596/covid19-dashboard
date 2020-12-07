const Patients = require('../models/patients-model.js');
let cors = require('cors')
// Create and Save a new Students
exports.create = (req, res) => {
    cors();
    // Validate request
    // console.log(req.body);
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
    }
    if (!req.body.status) {
        return res.status(400).send({
            message: "user contactNo can not be empty"
        });
    }
    // } if (!req.body.resultsArrivedOn) {
    //     return res.status(400).send({
    //         message: "user contactNo can not be empty"
    //     });
    // } if (!req.body.quarantineStartedOn) {
    //     return res.status(400).send({
    //         message: "user contactNo can not be empty"
    //     });
    // } if (!req.body.curedOn) {
    //     return res.status(400).send({
    //         message: "user contactNo can not be empty"
    //     });
    // } if (!req.body.underWentHospitalization) {
    //     return res.status(400).send({
    //         message: "user contactNo can not be empty"
    //     });
     
    
     res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    res.setHeader("Access-Control-Allow-Credentials", true);
    // Create a Students
    const patients = new Patients({
       
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        pincode: req.body.pincode,
        streetName: req.body.streetName,
        areaName: req.body.areaName,
        tesedOn: req.body.tesedOn, 
        status:req.body.status,
        resultsArrivedOn: req.body.resultsArrivedOn,
        quarantineStartedOn: req.body.quarantineStartedOn,
        curedOn: req.body.curedOn,
        underWentHospitalization: req.body.underWentHospitalization,
    });

    patients.patientsId= patients._id
    console.log(req.body);
    // Save Students in the database
    patients.save()
        .then(data => {           
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });

        });
        console.log(req.body);
};

exports.findAll = (req, res) => {
    console.log('hai');
    Patients.find()
        .then(value => {
            res.send(value);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving students."
            });
        });
};
exports.update = (req, res) => {
    var id = req.params.patientsId;
    console.log(id);
    var patientDetails = {};
    var req = req.body;
  
    if (req.hasOwnProperty("name")) {
        patientDetails["name"] = req["name"];
    }
  
    if (req.hasOwnProperty("phoneNo")) {
        patientDetails["phoneNo"] = req["phoneNo"];
    }
    if (req.hasOwnProperty("pincode")) {
        patientDetails["pincode"] = req["pincode"];
    }
    if (req.hasOwnProperty("streetName")) {
        patientDetails["streetName"] = req["streetName"];
    }
    if (req.hasOwnProperty("areaName")) {
        patientDetails["areaName"] = req["areaName"];
    }
    if (req.hasOwnProperty("tesedOn")) {
        patientDetails["tesedOn"] = req["tesedOn"];
    }
    if (req.hasOwnProperty("status")) {
        patientDetails["status"] = req["status"];
    }
    if (req.hasOwnProperty("resultsArrivedOn")) {
        patientDetails["resultsArrivedOn"] = req["resultsArrivedOn"];
    }
    if (req.hasOwnProperty("quarantineStartedOn")) {
        patientDetails["quarantineStartedOn"] = req["quarantineStartedOn"];
    }
    if (req.hasOwnProperty("curedOn")) {
        patientDetails["curedOn"] = req["curedOn"];
    }
    if (req.hasOwnProperty("underWentHospitalization")) {
        patientDetails["underWentHospitalization"] = req["underWentHospitalization"];
    }
   
  
    // Find note and update it with the request body
    Patients.findByIdAndUpdate(id, patientDetails, { new: true })
      .then((note) => {
        if (!note) {
          return res.status(404).send({
            message: "Patientlist not found with id ",
          });
        }
        res.send(note);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Patientlist not founded with id ",
          });
        }
        return res.status(500).send({
          message: "Patientlist updating patients with id ",
        });
      });
  };