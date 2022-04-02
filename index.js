const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./routes/sneaks.routes.js')(app);
require('dotenv').config();
const SneaksAPI = require('./controllers/sneaks.controllers.js');

var port = process.env.PORT || 4000;
mongoose.Promise = global.Promise;

<<<<<<< HEAD
app.listen(port, function () {
  console.log(`Sneaks app listening on port `, port);
 });
=======
/*app.listen(port, function () {
  console.log(`Sneaks app listening on port `, port);
 });*/
>>>>>>> ba3fa9a2a7cb46e12b060cad2497ca9665f39588


module.exports = app;
module.exports = SneaksAPI;
