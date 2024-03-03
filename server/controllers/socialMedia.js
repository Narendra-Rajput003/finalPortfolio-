import User from "../models/user";
import SocialMedia from "../models/socialMedia";


export const addSocialMedia = async (req, res) => {
    try {
        const { linkedIn, twitter, github, instagram } = req.body;
        if (!linkedIn ||!twitter ||!github ||!instagram) {
            return res.status(400).json({
                message: "Please provide all the required fields",
                status: 400
            });
        }
        const newSocialMedia = await SocialMedia.create({
            linkedIn,
            twitter,
            github,
            instagram
        });
        const updateUser = await User.findOneAndUpdate({ email: req.user.email },
            {
                $set: { socialMedia: { linkedIn, twitter, github, instagram } }
            },
            { new: true }
        );
        res.status(200).json({
            message: "Social Media added successfully",
            status: 200
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong while creating social media in DB",
            status: 500
        });
        

    }
}