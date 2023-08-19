
// var handler = new XMLHttpRequest()

// console.log(handler.readyState)

// handler.open('GET', 'https://dummyjson.com/products', true)

// console.log(handler.readyState)

// handler.send()

// handler.onreadystatechange = function(){
//     console.log(handler.readyState)
//     if(this.readyState == 4){
//         console.log(this.responseText)
//     }
// }

$(document).ready(function(){
    var data = {
        "title" : 'Keyboard',
        "price" : '600'
    }

    $.post('https://dummyjson.com/products/add', data, function(response){
        console.log(response)
    })

    // localStorage.setItem()
    // localStorage.getItem()
    // localStorage.removeItem()
    // localStorage.clear()


    // local storage accepts only strings

    // var arr = [1,2,3,4,5]
    // var temp = JSON.stringify(arr)
    // console.log(temp)
    // console.log(JSON.parse(temp))

    $.get('https://dummyjson.com/products', function(res){
        var stringData = JSON.stringify(res)
        localStorage.setItem('data', stringData)
        var data = JSON.parse(localStorage.getItem('data'))
        var products = data.products
        for(let i=0;i<products.length;i++){
            $('#container').append(`<h1>${products[i].title}</h1>`)
        }
        localStorage.clear()
    })
})