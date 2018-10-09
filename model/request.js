const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestDataSchema = new Schema({
    ip: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
module.exports = RequestData = mongoose.model('request-data', RequestDataSchema);