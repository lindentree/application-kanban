const mongoose = require('mongoose');
const applicant = mongoose.model('Applicant');

exports.list_all_applicants = (req, res) => {
  applicant.find({}, (err, applicants) => {
    if (err) res.send(err);
    res.json(applicants);
  });
};

exports.create_a_applicant = (req, res) => {
  const newapplicant = new applicant(req.body);
  newapplicant.save((err, applicant) => {
    if (err) res.send(err);
    res.json(applicant);
  });
};

exports.read_a_applicant = (req, res) => {
  applicant.findById(req.params.applicantId, (err, applicant) => {
    if (err) res.send(err);
    res.json(applicant);
  });
};

exports.update_a_applicant = (req, res) => {
 
  applicant.findOneAndUpdate(
    { _id: req.params.applicantId },
    { $set: { "status": req.body.status} },
    { new: true },
    (err, applicant) => {
      if (err) res.send(err);
      res.json(applicant);
    }
  );
};

exports.delete_a_applicant = (req, res) => {
  applicant.deleteOne({ _id: req.params.applicantId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'applicant successfully deleted',
     _id: req.params.applicantId
    });
  });
};