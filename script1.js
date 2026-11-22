
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f0f2f5;
    color: #333;
}

header {
    background: #1d9bf0;
    color: white;
    text-align: center;
    padding: 25px;
}

header h1 {
    margin-bottom: 8px;
}

.container {
    width: 90%;
    max-width: 700px;
    margin: 25px auto;
}

section {
    background: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px #0001;
}

h2 {
    margin-bottom: 15px;
    color: #1d9bf0;
}

input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 15px;
}

textarea {
    height: 90px;
    resize: none;
}

button {
    background: #1d9bf0;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background: #087ac1;
}

.user, .post {
    padding: 15px;
    border-bottom: 1px solid #eee;
}

.user {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post h3 {
    margin-bottom: 8px;
}

.post p {
    margin-bottom: 12px;
    overflow-wrap: anywhere;
}

.post-actions {
    display: flex;
    gap: 10px;
}

.follow-btn {
    background: #16a34a;
}

.unfollow-btn {
    background: #777;
}

.like-btn {
    background: #e83e65;
}

.delete-btn {
    background: #dc2626;
}

.empty {
    color: #888;
    padding: 12px 0;
}

@media(max-width: 500px) {
    .container {
        width: 95%;
    }

    section {
        padding: 15px;
    }
        }
