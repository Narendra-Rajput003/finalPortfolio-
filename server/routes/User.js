import express from 'express';
const route=express.Router();

import { signup, login } from '../controllers/Auth.js';
import { createProfile,getAlldetails } from '../controllers/profile.js';
import {authenticateToken } from '../middleware/authMiddleware.js';
import {addExperience} from '../controllers/experience.js';
import {createEducation} from '../controllers/education.js';

route.post('/signup',signup);
route.post('/login',login);
route.post('/createProfile',authenticateToken,createProfile);
route.post('/addExperience',authenticateToken,addExperience);
route.post('/createEducation',authenticateToken,createEducation);
route.get('/getAlldetails',authenticateToken,getAlldetails);




export default route;