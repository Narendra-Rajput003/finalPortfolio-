import mongoose from'mongoose';


const educationSchema = new mongoose.Schema({
    instituteName: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    startYear: {
        type:String,
        trim: true,

    },
    endYear: {
        type:String,
        trim: true
    },
   
})

const Education = mongoose.models.education || mongoose.model("education", educationSchema);
export default Education;