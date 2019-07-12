(function () {
    function createArticleCard(_a) {
        var cardData = _a.cardData;
        var cardElement = document.createElement('div');
        var headline = document.createElement('div');
        var author = document.createElement('div');
        var imgContainer = document.createElement('div');
        var img = document.createElement('img');
        var span = document.createElement('span');
        cardElement.className = 'card';
        cardElement.appendChild(headline);
        headline.className = 'headline';
        headline.textContent = cardData.headline;
        cardElement.appendChild(author);
        author.className = 'author';
        author.appendChild(imgContainer);
        imgContainer.className = 'img-container';
        imgContainer.appendChild(img);
        img.src = cardData.authorPhoto;
        author.appendChild(span);
        span.textContent = "By " + cardData.authorName;
        return cardElement;
    }
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(function (response) {
        var cardsContainer = document.querySelector('.cards-container');
        var articleTopicsObj = response.data.articles;
        var articleTopicsArr = Object.keys(articleTopicsObj);
        articleTopicsArr.forEach(function (topic) {
            articleTopicsObj[topic].forEach(function (topicItem) {
                cardsContainer.appendChild(createArticleCard({ cardData: topicItem }));
            });
        });
    })["catch"]();
})();
