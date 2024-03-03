import User from "../models/user.js";
import Project from "../models/project.js";
import {uploadImageToCloudinary} from "../utils/imageUploader.js";


export const addProject = async (req, res) => {
    try {
      const userId=req.user.id;
      const{projectTitle,projectDescription,projectLink}=req.body;
      const projectImage=req.files.projectImage;

      const projectImageURL = await uploadImageToCloudinary(projectImage, process.env.FOLDER_NAME);
      const newProject = new Project({
        projectTitle,
        projectDescription,
        projectLink,
        projectImage: projectImageURL.secure_url
      });

      await newProject.save();

      await User.findByIdAndUpdate(userId, { $push: { projects: newProject } }).populate("projects").exec();

      return res.status(200).json({
        success: true,
        data: newProject
      });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong while creating project in DB",
            status: 500
        });
        
    }
}