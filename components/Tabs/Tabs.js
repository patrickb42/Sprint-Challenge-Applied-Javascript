/* TabCard constructor */
function newTabCard({ _cardElement }) {
  const selectCard = () => {
    _cardElement.style.display = 'flex';
  };

  return Object.freeze({ selectCard });
}


/* TabLink Constructor */
function newTablink({ _tabElement }) {
  const _tabData = _tabElement.dataset;
  const _cardsWeakMap = new WeakMap();
  let _cards;

  if (_tabData.tab === 'all') {
    _cards = document.querySelectorAll('.cards-container .card');
  } else {
    _cards = document.querySelectorAll(`.cards-container .card[data-tab='${_tabData.tab}']`);
  }
  _cards.forEach((card) => {
    _cardsWeakMap.set(card, newTabCard({ _cardElement: card }));
  });

  const selectTab = () => {
    document.querySelectorAll('.tab').forEach((tab) => {
      tab.classList.remove('active-tab');
    });
    document.querySelectorAll('.card').forEach((card) => {
      card.style.display = 'none';
    });
    _tabElement.classList.add('active-tab');
    _cards.forEach((card) => {
      _cardsWeakMap.get(card).selectCard();
    });
  };
  _tabElement.addEventListener('click', selectTab);
}


document.querySelectorAll('.tab').forEach((tab) => {
  newTablink({ _tabElement: tab });
});
