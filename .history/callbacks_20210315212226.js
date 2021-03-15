const posts = [
    {title: 'Post one', body: 'this is post one'},
    {title: 'Post two', body: 'this is post two'}
];

function getPosts() {
    setTimeout(() =>{
        let output ='';
        posts.forEach((post, index)=>{
            output += ` <li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    setTimeout(()=>{
posts.push(post);
    }, 2000)
}


getPosts()

create