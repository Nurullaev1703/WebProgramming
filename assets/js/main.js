const SortCards = (typeSort) => {
    const cards = [];
    cards.push(...data);
    switch(typeSort){
        case 'UP':
            cards.sort((a,b)=>{
                return a.price - b.price;
            });
            break;
        case 'DOWN':
            cards.sort((a,b)=>{
                return b.price - a.price;
            });
            break;
        default:
            break;
    }
    setCards(document.querySelector(".cards .container"),cards);
    
}


const navigation = (pageOpen) =>{
    
    const pages = document.querySelectorAll('.fullpage')
    
    pages.forEach(item=> {
        item.classList.forEach(className =>{
            item.classList.remove('open');
            if (className === pageOpen){
                item.classList.add('open');
            }
        })
    })
}

const setCountProduct = (type) =>{
    const count = document.getElementById('quality');
    let value = parseInt(count.innerHTML);
    if (type === 'minus' ){
        if(value > 1){
            value -= 1;
        }
    }
    else{
            value += 1;
    }
    count.innerHTML = value;
}

const changeCountProduct = (type)=>{
    const productCount = document.getElementById('productCount');
    let productValue = parseInt(productCount.innerHTML);
    if (type === 'minus' ){
        if(productValue > 1){
            productValue -= 1;
        }
    }
    else{
        productValue += 1;
    }
    productCount.innerHTML = productValue;

}
const setCheckbox = (e) =>{
    e.forEach(item =>{
        if(item.checked){
            item.parentNode.querySelector('.checkbox').classList.add('active');
        }
    })
}
const changeCheckbox = (e) =>{
    e.parentNode.querySelector('.checkbox').classList.toggle('active'); 
}

const pickColor = (e) => {
    const container = document.querySelectorAll('.ellipse-container')
    container.forEach(item =>{
        item.querySelector('.ellipse').classList.remove('pick')
    })
    e.classList.toggle('pick');
}
const pickSize = (e) => {
    const sizeList = document.querySelectorAll('.size-container')
    sizeList.forEach(item  =>{
        item.querySelector('.size').classList.remove('active')
    })
    e.classList.toggle('active');
}
