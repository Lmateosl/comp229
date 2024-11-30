import express from 'express';
const router = express.Router();
import { createUser, logInUser } from '../firabase.js';

router.post('/create-user', async (req, res) => {
    const {email, password} = req.body;
    try {
        const data = await createUser(email, password);
        res.status(200).json({user: data, token: data.uid});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({error: message});
    }
});

router.post('/login-user', async (req, res) => {
    const {email, password} = req.body;
    try {
        const data = await logInUser(email, password);
        res.status(200).json({user: data, token: data.uid});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({error: message});
    }
});

export default router;