let post = document.getElementById('post')
let height = 6000
let cnt = 1

function loadPosts(){
    $.get(`https://edyoda-instagram-data-sourav-4erf.vercel.app/posts/${cnt}`, function(response){
        console.log(response)
        for(let i=0;i<response.length; i++){
            let tagsString = ""
            for(let k=0;k<response[i].tags.length; k++){
                tagsString += '#'+response[i].tags[k] + '  '
            }
            post.innerHTML += `
                <div class="postBody">
                    <div class="postHeader">
                        <div class="profilePic">
                            <img src=${response[i].user.photo}/>
                        </div>
                        <div class="userName">
                            <span>${response[i].user.name}</span>
                        </div>
                    </div>
                    <div class="postImage">
                        <img src=${response[i].postPic}/>
                    </div>
                    <div class="reactions">
                        <div>
                            <i class='far fa-heart'></i>
                            <i class="fa fa-comments-o"></i>
                            <i class="fa fa-send-o"></i>
                        </div>
                        <div class="likes">
                            <p>${response[i].reactions} likes</p>
                        </div>
                    </div>
                    <div class="content">
                        <span class="name">${response[i].user.name}</span>
                        <span class="body">${response[i].body}</span>
                    </div>
                    <div class="tags">
                        <span>${tagsString}</span>
                    </div>
                    <div class="comment">
                        <input type="text" placeholder="Add a comment...."/>
                    </div>

                </div>
            `
        }
    })
    cnt = cnt == 10 ? 1 : cnt + 1;
}

loadPosts()

window.addEventListener('scroll', function(){
    console.log(window.scrollY)
    console.log(window.innerHeight)
    if(window.scrollY + window.innerHeight >= height){
        height+=6000
        loadPosts()
    }
})