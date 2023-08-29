$(document).ready(function(){

    let id  = parseInt(window.location.search.split('=')[1])
    let container = document.getElementById('container')
    let btn  = document.getElementById('btn')
    $.get(`https://dummyjson.com/products/${id}`, function(res){
        container.innerHTML += `
            <h1>${res.title}</h1>
            <h1>${res.description}</h1>
            <h1>${res.price}</h1>
            <h1>${res.rating}</h1>
        `

        btn.addEventListener('click', function(){
            res.inCart = 1
            let allData = JSON.parse(localStorage.getItem('cartData'))
            console.log(allData[id])
            if(allData[id]!==undefined){
                allData[id].inCart+=1
            }
            else{
                allData[id] = res
            }
            localStorage.setItem('cartData', JSON.stringify(allData))
        })
    })
    
})