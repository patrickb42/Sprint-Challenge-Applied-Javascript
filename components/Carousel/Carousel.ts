(() => {
  interface CreateCarouselArg {
    imgSrcs: string[];
  }
  function createCarousel({ imgSrcs }: CreateCarouselArg): HTMLDivElement {
    const carousel = document.createElement('div');
    const leftButton = document.createElement('div');
    const imgs: HTMLImageElement[] = [];
    const rightButton = document.createElement('div');

    let currentIndex = 0;

    carousel.className = 'carousel';

    carousel.appendChild(leftButton);
    leftButton.className = 'left-button';
    leftButton.textContent = '<';
    function clickLeft() {
      imgs[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + imgs.length - 1) % imgs.length;
      imgs[currentIndex].style.display = 'block';
    }
    leftButton.addEventListener('click', clickLeft);

    imgSrcs.forEach((imgSrc, index) => {
      const img = document.createElement('img');

      carousel.appendChild(img);
      img.src = imgSrc;
      imgs.push(img);
    });
    imgs[0].style.display = 'block';

    carousel.appendChild(rightButton);
    rightButton.className = 'right-button';
    rightButton.textContent = '>';
    function clickRight() {
      imgs[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % imgs.length;
      imgs[currentIndex].style.display = 'block';
    }
    rightButton.addEventListener('click', clickRight);

    return carousel;
  }

  const imgSrcs = [
    './assets/carousel/mountains.jpeg',
    './assets/carousel/computer.jpeg',
    './assets/carousel/trees.jpeg',
    './assets/carousel/turntable.jpeg',
  ];
  document.querySelector('.carousel-container').appendChild(createCarousel({ imgSrcs }));
})();
