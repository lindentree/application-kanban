const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const cors = require ('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./db.js');

global.Applicant = require('./models/ApplicantSchema');
const routes = require('./modelRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Cannot connect to the database:'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
routes(app);
 
app.listen(port);

console.log(`Server started on port ${port}`);
