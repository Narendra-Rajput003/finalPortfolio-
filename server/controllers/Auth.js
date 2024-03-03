import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
    try {
        
      const { firstName, lastName, email,password,confirmPassword } = req.body;

        if (!firstName || !lastName || !email || !password ||!confirmPassword) {
           return res.status(400).json({
            message: "Please provide all the required fields",
               status: 400
           });
        }

        if (password!== confirmPassword) {
          return res.status(400).json({
            message: "Passwords do not match",
               status: 400
           });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists",
                status: 400
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userDetails = await User.create({
           firstName,
            lastName,
            email,
            password:hashedPassword
        });
        return res.status(200).json({
            message: "User created successfully",
            user: userDetails
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
            status: 500
        });
    }
}


export const login =async (req, res) => {
    try {
        // Get email and password from request body
        const { email, password } = req.body
    
        // Check if email or password is missing
        if (!email || !password) {
          // Return 400 Bad Request status code with error message
          return res.status(400).json({
            success: false,
            message: `Please Fill up All the Required Fields`,
          })
        }
    
        // Find user with provided email
        const user = await User.findOne({ email })
    
        // If user not found with provided email
        if (!user) {
          // Return 401 Unauthorized status code with error message
          return res.status(401).json({
            success: false,
            message: `User is not Registered with Us Please SignUp to Continue`,
          })
        }
    
        // Generate JWT token and Compare Password
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign(
            { email: user.email, id: user._id, fullName: user.fullName },
            process.env.JWT_SECRET,
            {
              expiresIn: "24h",
            }
          )
    
          // Save token to user document in database
          user.token = token
          user.password = undefined
          // Set cookie for token and return success response
          const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
          }
          res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: `User Login Success`,
          })
        } else {
          return res.status(401).json({
            success: false,
            message: `Password is incorrect`,
          })
        }
      } catch (error) {
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: `Login Failure Please Try Again`,
        })
      }
    }


    export const logout = (req, res) => {
      try {
        // Get token from cookie
        const token = req.cookies.token

        // If token is not available
        if (!token) {
          // Return 401 Unauthorized status code with error message
          return res.status(401).json({
            success: false,
            message: `User is not logged in`,
          })
        }

        // Delete token from user document in database
        User.findOneAndUpdate(
          { token },
          { token: "" },
          { new: true },
          (err, doc) => {
            if (err) {
              // Return 500 Internal Server Error status code with error message
              return res.status(500).json({
                success: false,
                message: `Logout Failure Please Try Again`,
              })
            } else {
              // Return 200 OK status code with success message
              return res.status(200).json({
                success: true,
                message: `Logout Success`,
              })
            }
          }
        )
      } catch (error) {
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false, 
          message: `Logout Failure Please Try Again`,
          })
        }
      }