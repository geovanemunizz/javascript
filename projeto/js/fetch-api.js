const url = "https://jsonplaceholder.typicode.com/posts";

const loading = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const comentContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#commit-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

//get id from url

const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

//get all post
async function getAllPost() {
  const response = await fetch(url);
  const data = await response.json();

  loading.classList.add("hide");

  data.map((post) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "Ler";
    link.setAttribute("href", `/projeto/html/post.html?id=${post.id}`);

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);
    postsContainer.appendChild(div);
  });
}

//get individual post

async function getPost(id) {
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);
  const dataPost = await responsePost.json();
  const dataComment = await responseComments.json();

  loading.classList.add("hide");
  postPage.classList.remove("hide");

  const title = document.createElement("h1");
  const body = document.createElement("p");

  title.innerText = dataPost.title;
  body.innerText - dataComment.body;

  postContainer.appendChild(title);
  postContainer.appendChild(body);

  dataComment.map((comment) => {
    createCommit(comment);
  });
}

async function postComment(comentario) {
  const response = await fetch(`${url}/${postId}/comments`, {
    method: "POST",
    body: comentario,
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();
  createCommit(data);
}

function createCommit(comment) {
  const div = document.createElement("div");
  const email = document.createElement("h3");
  const commentBody = document.createElement("p");

  email.innerText = comment.email;
  commentBody.innerText = comment.body;

  div.appendChild(email);
  div.appendChild(commentBody);

  comentContainer.appendChild(div);
}

if (!postId) {
  getAllPost();
} else {
  getPost(postId);

  //event to commit form
  commentForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let comentario = {
      email: emailInput.value,
      body: bodyInput.value,
    };
    comentario = JSON.stringify(comentario);
    postComment(comentario);
  });
}

