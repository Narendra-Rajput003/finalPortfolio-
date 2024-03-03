import ContactUs from "../models/contactUs";
import User from "../models/user";

export const contactUs = async (req, res) => {
    try{
        const {firstName, lastName, email, message, userEmail} = req.body;
        if(!firstName ||!lastName ||!email ||!message){
            return res.status(400).json({
                message: "Please provide all the required fields",
                status: 400
            });
        }
        const newContact = await ContactUs.create({
            firstName,        
            lastName,
            email,
            message
        })

        const updateUser = await User.findOneAndUpdate({email: userEmail},
            {
                $push: {contactUs: newContact._id},

            },
            {new: true}
            );
            
        res.status(200).json({
            message: "Your message has been sent successfully",
            status: 200
        });
        
    }catch(err){
        console.error(err);
        return res.status(500).json({
            message: "Something went wrong",
            status: 500
        });
    }
    
}