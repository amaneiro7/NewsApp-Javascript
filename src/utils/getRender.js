function getRenderData(articles) {
    container.innerHTML = '';
    
    const renderArticle = []
    articles.length > 0 && articles.map(article => {
    const articleContainer = document.createElement('article');
        const articleImg = document.createElement('img');
        const articleTitle = document.createElement('h2');
        const articleInfo = document.createElement('p');
        const source = document.createElement('p');
        const publishDate = document.createElement('p');
        const readMore = document.createElement('a');
        articleContainer.classList.add('container__article');
        articleImg.src = article.urlToImage;
        articleImg.alt = `Image for the article${article.title}`;
        articleTitle.innerText = article.title;
        articleInfo.innerText = article.description;
        source.innerText = article.source.name
        publishDate.innerText = article.publishedAt
        readMore.innerHTML = 'Read More'
        readMore.href=article.url;
        readMore.target= '_blank';
        articleContainer.append(
            articleImg, 
            articleTitle, 
            articleInfo, 
            readMore, 
            source,
            publishDate, 
        );
        renderArticle.push(articleContainer)
    });    
    container.append(...renderArticle);

}