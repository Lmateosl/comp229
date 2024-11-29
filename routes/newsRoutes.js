// routes/newsRoutes.js
const express = require('express');
const router = express.Router();

router.get('/news', (req, res) => {
    res.json({ message: 'This is the news route' });
});

module.exports = router;
