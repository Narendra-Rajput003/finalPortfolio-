import User from "../models/user.js";
import Experience from "../models/experience.js";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

export const addExperience = async (req, res) => {
    try{
        const { jobRole, jobDescription,companyName, from, to} = req.body;
       const userId=req.user.id;

        if(!jobRole ||!jobDescription ||!companyName ||!from ||!to){
            return res.status(400).json({
                message: "Please provide all the required fields",
                status: 400
            });
        }
        const newExperience = new Experience({
            jobRole,
            jobDescription,
            companyName,
            from,
            to
        });

        await newExperience.save();
        await User.findByIdAndUpdate(userId, { $push: { Experiences: newExperience } }).populate("Experiences").exec();


        return res.status(200).json({
            success: true,
            data: newExperience
        });  
            
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: "Something went wrong while creating experience in DB",
            status: 500
        });

    }
}


export const getExperience = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).populate("Experiences").exec();
        const experience = user.Experiences;
        return res.status(200).json({
            success: true,
            data: experience
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong while fetching experience from DB",
            status: 500
        });
    }
}

export const updateExperience = async (req, res) => {
    try {
        const { jobRole, jobDescription,companyName, from, to} = req.body;
        const experienceId = req.params.experienceId;
        const userId = req.user.id;
        const experience = await Experience.findByIdAndUpdate(experienceId, {
            jobRole,
            jobDescription,
            companyName,
            from,
            to
        });
        const user = await User.findByIdAndUpdate(userId, { $push: { Experiences: experience } }).populate("Experiences").exec
        return res.status(200).json({
            success: true,
            data: experience
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong while updating experience in DB",
            status: 500
        });
        
    }
}