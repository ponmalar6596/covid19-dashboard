const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    emailId: String,
    password: String,
    userType: String,
    mobileNo: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);