const API_KEY = '24434dd522bb4d23bf73c8068f723146';
const api = 'https://newsapi.org/v2/top-headlines';

const apiURL = axios.create({
    baseURL: api,
    params: {
        'pageSize': 20,
        'page': 1,
        'apiKey': API_KEY,                            
        
    }
})

async function getNews(optionalConfig={}) {    
    const { data } = await apiURL(optionalConfig);    
    const { articles } = data    
    getRenderData(articles);
}