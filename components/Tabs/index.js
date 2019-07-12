(function () {
    function createTab(_a) {
        var topic = _a.topic;
        var tab = document.createElement('div');
        tab.className = 'tab';
        tab.textContent = topic;
        return tab;
    }
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(function (response) {
        var topics = document.querySelector('.topics');
        response.data.topics.forEach(function (topic) {
            topics.appendChild(createTab({ topic: topic }));
        });
    })["catch"](function (err) { return console.log(err); });
})();
