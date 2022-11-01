fetch("./base/components/header.html")
.then(response =>{
    return response.text()
})
.then(data => {
    document.querySelector("header").innerHTML = data;
});

fetch("./pages/main/main.html")
.then(response =>{
    return response.text()
})
.then(data => {
    document.querySelector(".include-main").innerHTML = data;
});

fetch("./pages/main/category.html")
.then(response =>{
    return response.text()
})
.then(data => {
    document.querySelector(".include-category").innerHTML = data;
});

fetch("./base/components/cards.html")
.then(response =>{
    return response.text()
})
.then(data => {
    const includeCards = document.querySelector(".include-cards");
    includeCards.innerHTML = data;
    setCards(includeCards.querySelector('.cards .container'));
});

fetch("./base/components/footer.html")
.then(response =>{
    return response.text()
})
.then(data => {
    document.querySelector("footer").innerHTML = data;
});

