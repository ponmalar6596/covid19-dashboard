
const mongoose = require('mongoose');

const followupsSchema = mongoose.Schema([
    {    
    name: String,
    patientList:[{
        patientId:String,
        patientName:String
    },
],
    executiveId: String,
    followupsDate: Date,
    maintainDistance: String,
    takeMedicine: Boolean,
    haveFever: Boolean,
    haveCold: Boolean,
    haveThoughtpain: Boolean
},
//  {
//     timestamps: true
// }
]);

module.exports = mongoose.model('Followups', followupsSchema);