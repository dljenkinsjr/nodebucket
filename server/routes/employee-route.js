/*============================================;
Title: nodebucket;
Author: Professor Krasso ;
Date: 18 March 2021;
Modified By: Douglas Jenkins;
Description: creating a sign in page
;===========================================*/

const express = require('express');
const Employee = require('../db-models/employee');
const BaseResponse = require('../service/base-response');
const { $ } = require('protractor');

// defines router variable
const router = express.Router();

/*
http://localhost:3000/api/employees
http://localhost:3000/api/employees/:empId
http://localhost:3000/api/employees
http://localhost:3000/api/employees/:empId
http://localhost:3000/api/employees/:empId
*/

/**
 * API: findEmployeeId
 * @param empId
 * @returns Employee document or null
 */

router.get('/:empId', async(req, res) => {

  // to specify variable you go by the name in the route
  try
  {
    Employee.findOne({'empId': req.params.empId}, function(err, employee){
    // if there is a error this will be displayed
      if (err)
      {
      console.log(err);
      const MongoDBErrorResponse = new BaseResponse('500', `MongoDB native Error: ${err}`, null);
      res.json(MongoDBErrorResponse.toObject());
      }
      else // will be displayed if you put in the correct employee value
      {
        console.log(employee);
        const employeeResponse = new BaseResponse('200', 'Successful Query', employee);
        res.json(employeeResponse.toObject());
      }
    })
  }
      catch (e)
      {
        console.log(e);
        const findEmployeeCatchError = new BaseResponse('500', `Internal Server Error: ${e.message}`, null);
        res.json(findEmployeeCatchError.toObject());
    }
  })









module.exports = router;
