const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    profile: { type: Boolean },
    id_type: { type: String },
    id_group: { type: String },
    fieldname: { type: String},
    originalname: { type: String},
    mimetype: { type: String},
    filename: { type: String},
    path: { type: String},
    size: { type: Number},
    created_at: { type: Date, default: Date.now()}
});

module.exports = model('Image', imageSchema); 
