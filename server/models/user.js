import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    Profile:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "profile"
    },
    Education:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "education"
    }] ,
    Experiences: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "experience"
        }
    ],
    skills: [
        {
            type: String,
            requried: true
        }
    ],
    bioLink: {
        type: String
    },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'project'
        }
    ],
    socialMedia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'socialMedia'
    },
    contactUs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contactUs'
    }




})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;