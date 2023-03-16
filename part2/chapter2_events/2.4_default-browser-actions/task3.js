const largeImg = document.querySelector('#largeImg');
const imgList = document.querySelector('#thumbs');

imgList.addEventListener('click', (e) => {
    if (e.target.tagName != 'IMG') return;

    e.preventDefault();

    largeImg.src = e.target.closest('a').getAttribute('href');
});