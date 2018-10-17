const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestDataSchema = new Schema({
    instanceId: {
      type: String,
      required: true
    },
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