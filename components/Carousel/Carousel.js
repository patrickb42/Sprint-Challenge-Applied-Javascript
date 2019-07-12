/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component,
       you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade.
       It's up to you!
    6. Have fun!
*/
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
(function () {
    function createCarousel(_a) {
        var imgSrcs = _a.imgSrcs;
        var carousel = document.createElement('div');
        var leftButton = document.createElement('div');
        var imgs = [];
        var rightButton = document.createElement('div');
        var currentIndex = 0;
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
        imgSrcs.forEach(function (imgSrc, index) {
            var img = document.createElement('img');
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
    var imgSrcs = [
        './assets/carousel/mountains.jpeg',
        './assets/carousel/computer.jpeg',
        './assets/carousel/trees.jpeg',
        './assets/carousel/turntable.jpeg',
    ];
    document.querySelector('.carousel-container').appendChild(createCarousel({ imgSrcs: imgSrcs }));
})();
