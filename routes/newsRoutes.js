// routes/newsRoutes.js
import express from 'express';
const router = express.Router();

router.get('/news', (req, res) => {
    res.json({ message: 'This is the news route' });
});

export default router;
