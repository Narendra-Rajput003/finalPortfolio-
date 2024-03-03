import Education from '../models/education.js';
import User from '../models/user.js';

export const createEducation = async (req, res) => {
    try {

        const userId = req.user.id;
        const { instituteName, fieldOfStudy, startYear, endYear } = req.body;
        const newEducation = new Education({
            instituteName,
            fieldOfStudy,
            startYear,
            endYear
        });

        await newEducation.save(); // Save the new education details

        // Using $push operator to push the newly created education details to the Education field of the user
        await User.findByIdAndUpdate(userId, { $push: { Education: newEducation } });

        return res.status(200).json({
            success: true,
            data: newEducation
        });


    } catch (err) {
        res.status(500).json({
            message: "Something went wrong while creating education in DB",
            status: 500
        });
    }
}

export const getEducation = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).populate("Education").exec();
        const education = user.Education;
        return res.status(200).json({
            success: true,
            data: education
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong while fetching education from DB",
            status: 500
        });
    }
}

export const updateEducation = async (req, res) => {
    try {
        const { instituteName, fieldOfStudy, startYear, endYear } = req.body;
        const educationId = req.params.educationId;
        const userId = req.user.id;
        const education = await Education.findByIdAndUpdate(educationId, {
            instituteName,
            fieldOfStudy,
            startYear,
            endYear
        });

        return res.status(200).json({
            success: true,
            data: education
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong while updating education in DB",
            status: 500
        });
    }
}