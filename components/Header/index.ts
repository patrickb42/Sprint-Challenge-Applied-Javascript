(() => {
  function createHeader(): HTMLDivElement {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');

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
