const mongoose=require("mongoose");


const SubjectSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Name of Subject"],
        maxLength: [13, "Name cannot be Exceed 13 characters"],
        minLengtgh: [3, "Name should b e atleast 4 character required "],
      },
    
})
module.exports= mongoose.model("Subject",SubjectSchema)