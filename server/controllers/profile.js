import User from "../models/user.js";
import {uploadImageToCloudinary} from "../utils/imageUploader.js";
import Profile from "../models/profile.js";

export const createProfile = async (req, res) => {
  try {

    const { fullName, bio, skills } = req.body;
    const userId = req.user.id;
    const userImage = req.files.userImage;
    const certificates = req.files.certificates;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
    const userImgUpload = await uploadImageToCloudinary(userImage, process.env.FOLDER_NAME);
    const certificatesUpload = await uploadImageToCloudinary(certificates, process.env.FOLDER_NAME);

    const profile = new Profile({
      fullName,
      bio,
      userImage: userImgUpload.secure_url,
      certificates: certificatesUpload.secure_url,
      user: user._id,
      skills
    });
    await profile.save();
    console.log(profile);

    const updatedUser = await User.findByIdAndUpdate(userId, {
      $push: {
        Profile: profile._id
      }
    },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      data: profile

    });


  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }

}

export const getAlldetails= async (req, res) => {
  try {
   const userId = req.user.id;
   console.log(userId);
   const userdatails=await User.find({userId}).populate("Education").populate("Experiences").populate("projects").exec();
    return res.status(200).json({
      success: true,
      data: userdatails
    });

  }catch(error){
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message
    });

  }
}

