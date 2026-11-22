
// Sample users
const users = ["Arun", "Priya", "Rahul", "Divya"];

let posts = JSON.parse(localStorage.getItem("posts")) || [];

let following = JSON.parse(localStorage.getItem("following")) || [];

let currentUser = "";

// Save data
function saveData() {
    localStorage.setItem("posts", JSON.stringify(posts));
    localStorage.setItem("following", JSON.stringify(following));
}

// Create Post
function createPost() {
    const username = document.getElementById("username").value.trim();
    const content = document.getElementById("postContent").value.trim();

    if (!username || !content) {
        alert("Enter username and post content!");
        return;
    }

    currentUser = username;

    posts.unshift({
        id: Date.now(),
        username: username,
        content: content,
        likes: 0
    });

    // Automatically follow yourself
    if (!following.includes(username)) {
        following.push(username);
    }

    saveData();

    document.getElementById("postContent").value = "";

    displayPosts();
    displayUsers();
}

// Display Users
function displayUsers() {
    const usersList = document.getElementById("usersList");

    usersList.innerHTML = "";

    users.forEach(user => {
        const isFollowing = following.includes(user);

        usersList.innerHTML += `
            <div class="user">
                <strong>${user}</strong>
                <button class="${isFollowing ? 'unfollow-btn' : 'follow-btn'}"
                    onclick="toggleFollow('${user}')">
                    ${isFollowing ? "Unfollow" : "Follow"}
                </button>
            </div>
        `;
    });
}

// Follow / Unfollow
function toggleFollow(user) {
    if (following.includes(user)) {
        following = following.filter(name => name !== user);
    } else {
        following.push(user);
    }

    saveData();
    displayUsers();
    displayPosts();
}

// Display Feed
function displayPosts() {
    const postsList = document.getElementById("postsList");

    postsList.innerHTML = "";

    const feedPosts = posts.filter(post =>
        following.includes(post.username)
    );

    if (feedPosts.length === 0) {
        postsList.innerHTML =
            '<p class="empty">No posts available. Follow people to see their posts!</p>';
        return;
    }

    feedPosts.forEach(post => {
        postsList.innerHTML += `
            <div class="post">
                <h3>@${post.username}</h3>
                <p>${escapeHTML(post.content)}</p>

                <div class="post-actions">
                    <button class="like-btn"
                        onclick="likePost(${post.id})">
                        ❤️ ${post.likes}
                    </button>

                    ${post.username === currentUser ? `
                        <button class="delete-btn"
                            onclick="deletePost(${post.id})">
                            Delete
                        </button>
                    ` : ""}
                </div>
            </div>
        `;
    });
}

// Prevent HTML injection in post content
function escapeHTML(text) {
    return text.replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[char]);
}

// Like Post
function likePost(id) {
    const post = posts.find(post => post.id === id);

    if (post) {
        post.likes++;
        saveData();
        displayPosts();
    }
}

// Delete Post
function deletePost(id) {
    posts = posts.filter(post => post.id !== id);

    saveData();
    displayPosts();
}

// Initial Display
displayUsers();
displayPosts();
            
