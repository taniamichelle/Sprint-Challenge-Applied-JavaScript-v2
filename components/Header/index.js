// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
const data = [
    {
        date: 'Smarch 28, 2019',
    },
    {
        titleMain: 'Lambda Times',
    },
    {
        temp: '98°',
    },
];

function Header(headerObj) {
    const headerComponent = document.createElement('div');
    headerComponent.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = headerObj.date;

    const titleMain = document.createElement('h1');
    titleMain.textContent = headerObj.titleMain;

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = headerObj.temp;

    headerComponent.appendChild(date);
    headerComponent.appendChild(titleMain);
    headerComponent.appendChild(temp);

    //step 2: return entire component
    return Header;
}

// step 3: add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector('.header-container');
data.forEach(element => {
    const headerComponent = Header(headerObj);
    headerContainer.appendChild(headerComponent);
});

// const articles = document.querySelector('.articles');
// data.forEach(articleObj => {
//     const article = articleComponent(articleObj);
//     articles.appendChild(article);
// });