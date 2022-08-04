const User = require("../models/StudentModel");
const Subject = require("../models/SubjectModels");
const Standerd = require("../models/StanderModel");

module.exports = {
  //   ===============================To Create new student===============

  registreUser: async (req, res) => {
    let mail = req.body.email;

    try {
      let userExist = await User.findOne({ email: mail });

      console.log(userExist, "userController");
      if (userExist) {
        res.json(
          "user is already exist with this Email id or Mobile Number,please try again with another mail or phone"
        );
      } else {
        console.log(req.body);
        const newUser = await User.create(req.body);
        //   const user = await newUser.save();
        res.status(200).json(newUser);
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  //   ===============================To get all the student===============

  getUser: async (req, res) => {
    const userData = await User.find();
    res.status(201).json(userData);
  },
  //   ===============================To add A new Subject===============

  addSubject: async (req, res) => {
    try {
      const newSubject = await Subject.create(req.body);
      //   const Subjects = await newSubject.save();
      console.log(newSubject, "gsafkjhag");
      res.status(200).json(newSubject);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  //   ===============================To get all the Subject===============

  getSubjects: async (req, res) => {
    try {
      const subjects = await Subject.find();
      res.status(200).json(subjects);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  //   ===============================To Create new Std===============

  newStandered: async (req, res) => {
    try {
      const newClass = await Standerd.create(req.body);

      res.status(200).json(newClass);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  //   ===============================To get all the  Std ===============

  getStandered: async (req, res) => {
    try {
      const classes = await Standerd.find();

      res.status(200).json(classes);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  //   ===============================To get the count of Student having Maths===============

  countOfMaths: async (req, res) => {
    try {
      const ffff = await User.find({
        Subjects: { $elemMatch: { name: "Maths" } },
      }).count();
      res.json(ffff);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  //   ===============================To get the count of Std having Maths===============
  countMathsStd: async (req, res) => {
    try {
      const ffff = await Standerd.find({
        Subjects: { $elemMatch: { name: "Maths" } },
      }).count();
      res.json(ffff);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};



