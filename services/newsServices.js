const axios = require('axios');
const { query } = require('express');

const NEWS_API_KEY= process.env.NEWS_API_KEY;
const BASE_URL= 'https://newsapi.org/v2'

const fetch = async (query='', category='', pageSize=10)=>{
    try{
        const response = await axios.get(`${BASE_URL}/everything`,{
            params:{
                q:query,
                category,
                pageSize,
                apiKey: NEWS_API_KEY,
            },
        });
        return response.data.articles;
    }catch(error){
        console.error('Error fetching news:', error.message);
        throw new Error('Unable to fetch new from API')
    }
};
module.exports = { fetchNews };
