// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('.tabs');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        console.log('response: ', res.data);
        const topics = createTab(res.data);
        tabs.append(topics);
    })
    .catch(error => {
        console.log('error found: ', error);
    });

function createTab(tabTopic) {
    const topics = document.createElement('div');
    topics.classList.add('topics');

    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = tabTopic.title;

    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = tabTopic.tab;

    const activeTab = document.createElement('div');
    activeTab.classList.add('active-tab');
    activeTab.textContent = tabTopic.activeTab;

    topics.append(title);
    topics.append(tab);
    topics.append(activeTab);

    return topics;
}

topics.forEach(topic => {
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(res => {
            const topics = createTab(res.data);
            tabs.append(topics);
        });
});