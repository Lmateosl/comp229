import express from 'express';
const router = express.Router();
import { createUser, logInUser } from '../firabase.js';
import { generateToken } from '../services/newsServices.js';

router.post('/create-user', async (req, res) => {
    const {email, password} = req.body;
    try {
        const data = await createUser(email, password);
        res.status(200).json({user: data.email, token: generateToken(data.uid)});
    } catch (err) {
        console.log(err);
        res.status(401).json({error: err.message});
    }
});

router.post('/login-user', async (req, res) => {
    const {email, password} = req.body;
    try {
        const data = await logInUser(email, password);
        res.status(200).json({user: data.email, token: generateToken(data.uid)});
    } catch (err) {
        console.log(err.message);
        res.status(401).json({error: err.message});
    }
});

export default router;