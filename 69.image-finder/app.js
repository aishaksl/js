const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#search-input");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#search-button");
const clearButton = document.querySelector("#clear-button");
const imageWrapper = document.querySelector(".image-wrapper");

runEventListener();

function runEventListener() {
  form.addEventListener("submit", search);
  clearButton.addEventListener("click", clear);
}

function search(e) {
  const value = searchInput.value.trim();

  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID TvlB-UGstzTifOJ_Z0zUShzivx0OVLqSdLnAjI575MM",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      imageWrapper.innerHTML = "";

      Array.from(data.results).forEach((image) => {
        addImageToUI(image.urls.small);
      });
    })
    .catch((err) => console.log(err));

  e.preventDefault();
}

function addImageToUI(url) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.height = "400";
  img.width = "400";
  img.className = "rounded-md object-cover aspect-[3/4]";

  div.appendChild(img);
  imageWrapper.appendChild(div);
}

function clear() {
  searchInput.value = "";
  Array.from(imageWrapper.children).forEach((child) => child.remove());
}
