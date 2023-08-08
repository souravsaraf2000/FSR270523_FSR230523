$(document).ready(function(){
    // $.get('https://dummyjson.com/products', function(response){
    //     let products = response.products
    //     let container = document.getElementById('container')

    //     for(let i=0;i<products.length;i++){
    //         container.innerHTML += `<h1>${products[i].title}</h1>`
    //     }
        
    // })

    console.log('Line 1')
    setTimeout(function(){
        console.log('Line 2')
    }, 2000)
    console.log('Line 3')
})