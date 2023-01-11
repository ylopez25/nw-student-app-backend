const express = require("express");
const { response } = require("../app");

const controller = express.Router();

const studentData = require("../studentData.json");

controller.get("/", (req, res) => {
  res.json(studentData);
  //res.send("heyyy lets try again")
});

//get a id from the data
controller.get("/:id", (req, res) => {
  //you need to setup the id to be used
  try {
    //what does req.params do? essentially it checks if the input matches
    const studentId = req.params.id;
    //create a variable that will find the id in the data
    const singleStudent = studentData.students.find((student) => {
      return student.id === studentId;
    });

    if (singleStudent) {
      return res.json(singleStudent);

      //check for letters
    } else if (!/[0-9]/.test(studentId)) {
      return res.send("nums only");
    } else {
      res.json("no data found");
    }
  } catch (err) {
    //res.status() and then .send()
    res.status(500).send("error occured");
  }
});
module.exports = controller;
