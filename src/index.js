const container = document.querySelector('.container');
const search = document.querySelector('.search');

const config = {
    params: {}
}

window.addEventListener('hashchange', navigator, false);
window.addEventListener('load', navigator);
search.addEventListener('keydown',(event) => {
    event.key === 'Enter' && (
        config.params.q = search.value,
        config.params.category = ''
        )
    
    getNews(config);
    
    
})

function navigator() {
    window.scrollTo(0,0);

    const [_,categoryData] = location.hash.split('#');    
    console.log(categoryData);
    config.params.category = categoryData;
    
    getNews(pathUrl, config);  

    
}


