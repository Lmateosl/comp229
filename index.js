const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const newsRoutes = require('./routes/newsRoutes'); 

dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Testing route');
});

// Mount the newsRoutes at /api/news
app.use('/api/news', newsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
