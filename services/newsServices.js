import axios from 'axios';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const NEWS_API_KEY = process.env.NEWS_API_KEY;
console.log(NEWS_API_KEY);

export const fetchNews = async (category = '', country = '', pageSize = 10) => {
    try{
        const response = await axios.get(`${process.env.BASE_URL}/top-headlines`,{
            params:{
                country,
                category,
                apiKey: NEWS_API_KEY,
                pageSize
            },
        });
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error('Error fetching news:', error);
        throw new Error('Unable to fetch new from API')
    }
};

export const checkToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token not found' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const uid = decoded.sub;
        req.user = { uid };

        next();

    } catch (error) {
        console.error('Error verifying token:', error.message);
        return res.json({
            success: false,
            message: error.message,
        });
    }
};

export const generateToken = (uid) => {
    const payload = {
        sub: uid,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (5 * 60 * 60),
    };

    return jwt.sign(payload, process.env.SECRET_KEY);
};
