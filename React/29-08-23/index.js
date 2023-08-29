let arr = [1,2,3,4,5]

arr.map((item, index)=>{
    console.log(item, index)
})

let arr1 = [3,2,1,4,6,5,7,9,10,12,15,18,21]
let res = arr1.filter(item => item % 3 == 0)
console.log(res)

let cartValues = [1999, 1799, 2199, 999, 99, 199]
let total = cartValues.reduce((accumulator, item)=> {return accumulator + item}, 0)
console.log(total)

let arr2 = [1,4,2,6,8,9,11,15,30]

let val = arr2.find(item => item % 5 == 0)
let val1 = arr2.findIndex(item => item % 7 == 0)

console.log(val1)

$.get('https://dummyjson.com/posts', (res)=>{
    let posts = res.posts
    let container = document.getElementById('container')
    container.innerHTML += posts.map(item => `<h1>${item.title}</h1>`)
    $.get('https://dummyjson.com/products', (res) => {
        let products = res.products
        let premiumProducts = products.filter(item => item.price > 500)
        console.log(premiumProducts)
        $.get('https://dummyjson.com/carts', (res)=>{
            let carts = res.carts
            let totalPrices = carts.map(cart => 
                    cart.products.reduce((acc, item)=> acc + (item.price * item.quantity), 0)
                )
            console.log(totalPrices)
        })
    })
})

let getPosts = new Promise((resolve, reject)=>{
    $.get('https://dummyjson.com/posts', (res)=>{
        resolve(res.posts)
    })
    .fail(()=>{
        reject('Cannot fetch data!')
    })
})

getPosts
.then(res => {console.log(res);
    return $.get('https://dummyjson.com/products')
})
.then(res => console.log(res))
.catch(err => console.log(err))