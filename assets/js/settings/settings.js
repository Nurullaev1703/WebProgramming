const data = [
    {
        id:'1',
        title: 'T-shirt Lux! Summer collection.',
        url:'../assets/img/t-shirt.png',
        price:'1500'
    },
    {
        id:'2',
        title: 'Jeans! Summer collection.',
        url:'../assets/img/coat.png',
        price:'2500'
    },
    {
        id:'3',
        title: 'Kimono! Japanese collection.',
        url:'../assets/img/kimono.png',
        price:'1000'
    }
]

const setCards = (cardsContainer, datasort) =>{
    let cards = '';
    console.log(datasort);
    if(datasort){
        datasort.forEach(item => {
            let htmlObject = `
            <a onclick="navigation('product')" class="card">
                <div class="cover">
                    <img src="${item.url}" alt="">
                    <div class="ellipse"></div>
                </div>
                <h2>${item.title}</h2>
                <p>${item.price}</p>
            </a>`;
            cards += htmlObject;
        })
    }
    else{
        data.forEach(item => {
            let htmlObject = `
            <a onclick="navigation('product')" class="card">
                <div class="cover">
                    <img src="${item.url}" alt="">
                    <div class="ellipse"></div>
                </div>
                <h2>${item.title}</h2>
                <p>${item.price}</p>
            </a>`;
            cards += htmlObject;
        })
    }
    cardsContainer.innerHTML = cards;
}

