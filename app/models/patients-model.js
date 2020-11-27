const mongoose = require('mongoose');

const PatientsSchema = mongoose.Schema({
    name: String,
    phoneNo: String,
    pincode: String,
    streetName: String,
    areaName: String,
    tesedOn: Date,
    resultsArrivedOn: Date,
    quarantineStartedOn: Date,
    curedOn: Date,
    underWentHospitalization: Boolean,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Patients', PatientsSchema);