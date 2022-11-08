const pages = [
    {
        url: '../base/components/header.html',
        include: 'header'
    },
    {
        url: './main/main.html',
        include: '.include-main'
    },
    {
        url: './main/category.html',
        include: '.include-category'
    },
    {
        url: '../base/components/cards.html',
        include: '.include-cards'
    },
    {
        url: '../base/components/footer.html',
        include: 'footer'
    },
    {
        url: './product/product.html',
        include: '.include-product'
    },
    {
        url: './basket/basket.html',
        include: '.basket'
    },
    {
        url: './pay/pay.html',
        include: '.pay'
    }
]
pages.forEach(item => {
    fetch(item.url)
    .then(response =>{
        return response.text()
    })
    .then(data => {
        const include = document.querySelector(item.include);
        switch(item.include){
            case '.include-cards':
                include.innerHTML = data;
                setCards(include.querySelector('.cards .container'));
                break;
            case '.include-pay':
                include.innerHTML = data;
                setCheckbox(include.querySelectorAll('input[type="checkbox"]'));
                break;
            default:
                include.innerHTML = data;
                break;

        }
    });

})

