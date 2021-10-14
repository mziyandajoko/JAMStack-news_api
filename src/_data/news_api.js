const axios = require("axios");
require('dotenv').config();

 
// const newsApi = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`;

module.exports = async function getData(){
    try{
        const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fbbb60ba53334b1b87e80a80714d8888");
        return response.data;
    }catch(e){
        console.error(e);
    }
}


