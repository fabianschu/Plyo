const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const plyoSchema = new Schema({
    company: String,
    city: String,
    position: String,
    contact: String,
    channel: String,
    email: String,
    status: String,
    applicationDate: String,
    scheduledDate: String,
    url: String,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Plyo = mongoose.model('Plyo', plyoSchema);
module.exports = Plyo;
