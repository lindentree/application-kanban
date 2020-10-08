const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  
  comments: {
    type: String,
    required: false,
  },
  resume: {
    data: Buffer, 
    contentType: String
  }
 },
  {
    collection: 'applicants'
  });

module.exports = mongoose.model('Applicant', applicantSchema);