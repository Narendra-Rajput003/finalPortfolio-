import jwt from 'jsonwebtoken';
const { verify } = jwt;
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }

    try {
        const tokenData = verify(token, process.env.JWT_SECRET);
        req.user = tokenData; // Attach user data to the request object if needed
        next(); // Proceed to the next middleware
    } catch (error) {
        console.error(error.message);
        return res.redirect('/login');
    }
};

export  {authenticateToken};