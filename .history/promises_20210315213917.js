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

return new pro

    setTimeout(()=>{
posts.push(post);

//ny callback function, som kallar på getPost efter posts.push post har kört. Den kallas i sin tur på i createPost() 
    }, 2000)
}
