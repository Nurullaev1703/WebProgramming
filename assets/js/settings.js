const data = [
    {
        id:'1',
        title: 'T-shirt Lux! Summer collection.',
        url:'./assets/img/t-shirt.png',
        price:'1500'
    },
    {
        id:'2',
        title: 'Jeans! Summer collection.',
        url:'./assets/img/coat.png',
        price:'2500'
    },
    {
        id:'3',
        title: 'Kimono! Japanese collection.',
        url:'./assets/img/kimono.png',
        price:'1000'
    }
]

const setCards = (cardsContainer) =>{
    let cards = '';
    data.forEach(item => {
        let htmlObject = `
        <a onclick="test()" class="card">
            <div class="cover">
                <img src="${item.url}" alt="">
                <div class="ellipse"></div>
            </div>
            <h2>${item.title}</h2>
            <p>${item.price}</p>
        </a>`;
        cards += htmlObject;
    })
    cardsContainer.innerHTML = cards;
}

const SortCard = () => {
    let sortPrice = data.sort((a,b)=>{
        return a.price - b.price;
    });
}

SortCard();
const test = () =>{
    document.location.replace('/pages/product/product.html');
}
