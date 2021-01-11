
const mongoose = require('mongoose');

const followupsSchema = mongoose.Schema([
    {    
    followupName: String,
    name: String,
    followupsDate: Date,
    maintainDistance: Boolean,
    takeMedicine: Boolean,
    haveFever: Boolean,
    haveCold: Boolean
},
//  {
//     timestamps: true
// }
]);

module.exports = mongoose.model('Followups', followupsSchema);