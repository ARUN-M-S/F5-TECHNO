const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your Name"],
    maxLength: [13, "Name cannot be Exceed 13 characters"],
    minLengtgh: [3, "Name should b e atleast 4 character required "],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  rollno: {
    type: Number,
    required: [true, "Roll number required"],
    maxLength: [4, "Rollnumber cannot be Exceed 4 characters"],
    minLengtgh: [1, "Rollnumber should b e atleast 4 character required "],
  },
  Address: {
    type: String,
    required: [true, "Address is required"],
  },
  Mobile: {
    type: Number,
    maxLength: [10, "Mobile number cannot be Exceed 10 characters"],
    minLengtgh: [10, "Mobile number should b e atleast 10 character required "],
    required: [true, "Mobile Number is required"],
  },
  Standerd: {
    type: Number,
    required: [true, "Standerd is required"],
  },
  Subjects: [{
    "name":
    {type:String,required: [true, "SubjectName is required"]}
    
  }
   
  ],
});

module.exports = mongoose.model("User", StudentSchema);
