import mongoose from'mongoose';


const workExperienceSchema = new mongoose.Schema({
    jobRole: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
   from:{
    type:String
   },
   to:{
    type:String
   },
   
    
})

const Experience = mongoose.models.education || mongoose.model("experience", workExperienceSchema);
export default Experience;

