const posts = [
    {title: 'Post one', body: 'this is post one'},
    {title: 'Post tow', body: 'this is post two'}
];

function getPosts() {
    setTimeout(() =>{
        let output ='';
        posts.forEach((post, index)=>{
            output += ` <li>${post.title}</li> `

        })
    })
}