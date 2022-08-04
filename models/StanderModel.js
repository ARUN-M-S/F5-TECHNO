const mongoose= require("mongoose");


const StanderdSchema=new mongoose.Schema({
    name: {
        type: Number,
        required: [true, "Please Enter Name of Standered"],
        maxLength: [3, "Name cannot be Exceed 3 characters"],
        minLengtgh: [1, "Name should b e atleast 1  character required "],
      },
    Subjects:[{
        name:{type:String}
    }],
    Students:[{
        name:{type:String}
    }]

})

module.exports=mongoose.model("classStd",StanderdSchema )