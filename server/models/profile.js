import mongoose from "mongoose";


const profileSchema = new mongoose.Schema({
    userImage: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    skills:[
        {
            type: String,
            required: true
        }
    ],
    certificates: [{
        type: String,
        required: true
    }]
    
    
});

const Profile = mongoose.models.profile || mongoose.model("profile", profileSchema);
export default Profile;