/* Carousel constructor */
function newCarousel({ _carouselElement }) {
  const _images = _carouselElement.querySelectorAll('img');
  let _index = 0;
  _images[_index].style.display = 'block';

  _carouselElement.getElementsByClassName('left-button')[0].addEventListener('click', () => {
    _images[_index].style.display = 'none';
    _index = (_index + _images.length - 1) % _images.length;
    _images[_index].style.display = 'block';
  });

  _carouselElement.getElementsByClassName('right-button')[0].addEventListener('click', () => {
    _images[_index].style.display = 'none';
    _index = (_index + 1) % _images.length;
    _images[_index].style.display = 'block';
  });
}

newCarousel({ _carouselElement: document.querySelector('.carousel') });
