// routes/newsRoutes.js
import express from 'express';
import { fetchNews } from '../services/newsServices.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await fetchNews(req.query.cat);
        console.log(data);
        res.json({ message: data });
    } catch (err) {
        res.status(500).json({error: err})
    }
});

export default router;
