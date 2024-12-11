import express from 'express';
import { addFavorite, getFavorites } from '../services/favorites.js';
const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        if (!req.body.favorite) res.status(401).json({message: 'favorite missing'});
        const favorite = await addFavorite(req.body.favorite);
        res.json({ message: 'favorite added', favorite: favorite });
    } catch (err) {
        res.status(500).json({error: err})
    }
});

router.get('/', async (req, res) => {
    try{
        const favorities = await getFavorites();
        res.status(200).json({data: favorities});
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err})
    }
});


export default router;