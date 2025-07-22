
let posts = [
   
];

function displayPosts() {
    let postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.forEach(post => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.textContent = post.content;
        postsDiv.appendChild(postDiv);
    });
}

function addPost() {
    let content = document.getElementById('post-input').value;
    if (content.trim() !== '') {
        let newPost = { id: posts.length + 1, content };
        posts.push(newPost);
        displayPosts();
        document.getElementById('post-input').value = '';
    }
}

document.getElementById('login-btn').addEventListener('click', function() {
    alert('Login functionality not implemented yet.');
});

document.getElementById('post-btn').addEventListener('click', addPost);


displayPosts();
