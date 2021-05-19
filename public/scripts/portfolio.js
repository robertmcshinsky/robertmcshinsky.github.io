function main() {
  createImageContainers();
}

function createImageContainers() {
  for (let i = 0; i < 10; ++i) {
    let imageContainer = createImageEl();
    console.log(imageContainer);
    document.querySelector("#images").appendChild(imageContainer);
  }
}

function createImageEl() {
  let imageEl = document.createElement("img");
  imageEl.setAttribute("src", "../images/placeholder.png");
  imageEl.classList.add("img-galery");

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("gallery");

  imageContainer.appendChild(imageEl);

  return imageContainer;
}
/////////////////////////////////////////////////////////////////
main();
