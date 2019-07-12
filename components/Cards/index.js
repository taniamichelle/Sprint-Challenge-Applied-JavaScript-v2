// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.

const cardsContainer = document.querySelector('.cards-container');

axios.get = ('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log('response: ', res.data);
        const card = createCard(res.data);
        cardsContainer.append(card);
    })
    .catch(error => {
        console.log('error found: ', error);
    });

// Create a card for each of the articles and add the card to the DOM.
axios.get(`https://lambda-times-backend.herokuapp.com/articles${author}`)
    .then(res => {
        const card = createCard(res.data);
        cardsContainer.append(card);
    });

// Create a function that will programmatically create the following DOM component:
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
function createCard(cardInfo) {
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = cardInfo.headline;

    const author = document.createElement('div');
    author.classList.add('author');
    author.textContent = `Author: ${cardInfo.author || "unknown"}`

    const img = document.createElement('img');
    img.src = author.img_url;

    const name = document.createElement('div');
    name.textContent = author.name;

    const span = document.createElement('span');
    span.textContent = `By: ${name}`;

    card.append(headline);
    card.append(author);
    author.append(
        img,
        name,
        span,
    );

    return card;
}
