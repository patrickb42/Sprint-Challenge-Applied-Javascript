(() => {
  interface CreateTabsArg {
    topic: string;
  }
  function createTab({ topic }: CreateTabsArg): HTMLDivElement {
    const tab = document.createElement('div');

    tab.className = 'tab';
    tab.textContent = topic;

    return tab;
  }

  axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
      const topics = document.querySelector('.topics');
      response.data.topics.forEach((topic) => {
        topics.appendChild(createTab({ topic }));
      });
    })
    .catch(err => console.log(err));
})();
