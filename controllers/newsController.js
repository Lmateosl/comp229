const {fetchNews} = require(`../services/newsServices`);

exports.getNews=async (req,res)=>{
const {query, category, pageSize} = req.query;
try{
    const articles = await fetchNews(query,category,pageSize || 10);
    res.status(200).json(articles)
}catch(error){
    res.status(500).json({message:error.message});
}
};