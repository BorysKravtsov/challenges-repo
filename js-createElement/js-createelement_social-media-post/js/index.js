console.clear();

const newPost = document.createElement("section");
newPost.classList.add("post");
document.body.append(newPost);

const content = document.createElement("p");
content.classList.add("post__content");
content.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPost.append(content);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
newPost.append(footer);

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@username";
footer.append(username);

const button = document.createElement("button");
button.classList.add("post__button");
button.textContent = "♥ Like";
button.dataset.js = "like-button";
button.setAttribute("type", "button");
footer.append(button);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);
button.addEventListener("click", handleLikeButtonClick);
/* const script = document.querySelector("script");
document.body.append(script); */
// Exercise:
// Use document.createElement() and append another social media post to the body.
