(() => {
  interface CreateArticleCardArg {
    cardData;
  }
  function createArticleCard({ cardData }: CreateArticleCardArg): HTMLDivElement {
    const cardElement = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

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
    span.textContent = `By ${cardData.authorName}`;

    return cardElement;
  }

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
      const cardsContainer = document.querySelector('.cards-container');
      const articleTopicsObj = response.data.articles;
      const articleTopicsArr = Object.keys(articleTopicsObj);

      articleTopicsArr.forEach((topic) => {
        articleTopicsObj[topic].forEach((topicItem) => {
          cardsContainer.appendChild(createArticleCard({ cardData: topicItem }));
        });
      });
    })
    .catch();
})();
