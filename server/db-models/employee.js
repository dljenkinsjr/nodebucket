/*============================================;
Title: nodebucket;
Author: Professor Krasso ;
Date: 18 March 2021;
Modified By: Douglas Jenkins;
Description: creating a sign in page
;===========================================*/

const mongoose = require('mongoose');

// this will let the model know where to connect
let employeeSchema = mongoose.Schema({
  empId: {type: String, unique: true }
// maps it to mongodb
}, { collection: "employees"})


module.exports = mongoose.model("Employee", employeeSchema);
