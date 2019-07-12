(function () {
    function createHeader() {
        var header = document.createElement('div');
        var date = document.createElement('span');
        var h1 = document.createElement('h1');
        var temp = document.createElement('span');
        header.className = 'header';
        header.appendChild(date);
        date.className = 'date';
        date.textContent = 'Smarch 28, 2019';
        header.appendChild(h1);
        h1.textContent = 'Lambda Times';
        header.appendChild(temp);
        temp.className = 'temp';
        temp.textContent = '98°';
        return header;
    }
    document.querySelector('.header-container').appendChild(createHeader());
})();
