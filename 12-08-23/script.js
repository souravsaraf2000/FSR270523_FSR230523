let products = document.getElementById('products')
let search = document.getElementById('search')
let list = []
let filteredData = []
let value = ''

function fetchData(){
    $.get('https://fakestoreapi.com/products', function(response){
        list = response
        for(let i=0;i<list.length;i++){
            products.innerHTML += createCard(list[i])
        }
    })
}

function createCard(data){
    return `
    <div id="card">
        <div id="image">
            <img src="${data.image}" />
        </div>
        <div id="info">
            <p id="title">${data.title}</p>
            <p id="desc"><i>${data.description}</i></p>
            <p id="price">Price: <span id='amount'>${data.price}  $</span></p>
        </div>
    </div>
    `
}

$(document).ready(function(){
    fetchData()
    search.addEventListener('input', function(e){
        value = e.target.value.toLowerCase()
        filteredData = []
        if(value == '' && filteredData.length == 0){
            products.innerHTML = ''
            for(let i=0;i<list.length;i++){
                products.innerHTML += createCard(list[i])
            }
        }
        else if(value != ''){
            for(let i=0; i<list.length; i++){  
                if(list[i].title.toLowerCase().includes(value)){
                    filteredData.push(list[i])
                }
            }
            if(filteredData.length > 0){
                products.innerHTML = ''
                for(let i=0;i<filteredData.length;i++){
                    products.innerHTML += createCard(filteredData[i])
                }
            }
            else{
                products.innerHTML =  '<h1>No products found</h1>'
            }
        }
    })
})