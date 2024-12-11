import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import newsRoutes from './routes/newsRoutes.js';
import auth from './routes/auth.js';
import favorites from './routes/favorites.js';
import { checkToken } from './services/newsServices.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Testing route');
});

// Mount the newsRoutes at /api/news
app.use('/api/news', checkToken);
app.use('/api/favorites', checkToken);
app.use('/api/news', newsRoutes);
app.use('/api/favorites', favorites);
app.use('/api/auth', auth);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
