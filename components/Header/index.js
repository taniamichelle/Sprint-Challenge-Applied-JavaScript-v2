// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >

// step 3: add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector('.headerContainer');
res.forEach(headerObj => {
    const headerComponent = Header(headerObj);
    headerContainer.appendChild(headerComponent);
});

function Header(headerObj) {
    const headerComponent = document.createElement('div');
    headerComponent.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = headerObj.date;

    const title = document.createElement('h1');
    title.textContent = headerObj.title;

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = headerObj.temp;

    headerComponent.appendChild(date);
    headerComponent.appendChild(title);
    headerComponent.appendChild(temp);

    //step 2: return entire component
    return Header;
}


