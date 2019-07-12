// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address:
//   https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
(function () {
    function createArticleCard() {
        var cardElement = document.createElement('div');
        var headline = document.createElement('div');
        var author = document.createElement('div');
        var imgContainer = document.createElement('div');
        var img = document.createElement('img');
        var span = document.createElement('span');
        cardElement.className = 'card';
        cardElement.appendChild(headline);
        headline.className = 'headline';
        // headline.textContent = ;
        cardElement.appendChild(author);
        author.className = 'author';
        author.appendChild(imgContainer);
        imgContainer.className = 'img-container';
        imgContainer.appendChild(img);
        // img.src = ;
        author.appendChild(span);
        // span.textContent = ;
        return cardElement;
    }
})();
