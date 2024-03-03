import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { DbConnected } from './config/db.js';
import { cloudinaryConnect } from './config/cloudinary.js';
import userRoute from './routes/User.js';
import fileUpload from 'express-fileupload';


const app = express();

dotenv.config();
const PORT=process.env.PORT || 5000;

DbConnected();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : "/tmp/",
}));


cloudinaryConnect();

app.use('/api/v1/user', userRoute);


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

