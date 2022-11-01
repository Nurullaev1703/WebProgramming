const selector = document.querySelector('.cards');
const cards = selector.querySelectorAll('.card');

cards.forEach(item => {
    let img = item.querySelector('img');
    console.log(img.getAttribute('src'))
});

