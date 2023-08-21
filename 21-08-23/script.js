$(document).ready(function(){
    if(localStorage.getItem('cartData')==null){
        localStorage.setItem('cartData', JSON.stringify({}))
    }
    $.get('https://dummyjson.com/products', function(res){
        let products = res.products;
        let container = document.getElementById('container')
        for(let i=0;i<products.length;i++){
            container.innerHTML += `
                <a href='./details.html?id=${products[i].id}'><div class='card'>
                    <h1>${products[i].title}</h1>
                </div></a>
            `
        }

    })
})