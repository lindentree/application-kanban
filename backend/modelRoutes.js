const applicantBuilder = require('./controllers/applicantController');

module.exports = app => {
  app
    .route('/applicants')
    .get(applicantBuilder.list_all_applicants)
    .post(applicantBuilder.create_a_applicant);

  app
    .route('/applicants/:applicantId')
    .get(applicantBuilder.read_a_applicant)
    .put(applicantBuilder.update_a_applicant)
    .delete(applicantBuilder.delete_a_applicant);
};
