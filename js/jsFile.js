const catButton = document.getElementById("cat-button");
const dogButton = document.getElementById("dog-button");
const cowButton = document.getElementById("cow-button");

const catBox = document.querySelector(".cat-box");
const dogBox = document.querySelector(".dog-box");
const cowBox = document.querySelector(".cow-box");

const hideCat = document.getElementById("hide-cat");
const hideDog = document.getElementById("hide-dog");
const hideCow = document.getElementById("hide-cow");

catButton.addEventListener("click", () => showPicture(catBox));
dogButton.addEventListener("click", () => showPicture(dogBox));
cowButton.addEventListener("click", () => showPicture(cowBox));

hideCat.addEventListener("click", () => hidePicture(catBox));
hideDog.addEventListener("click", () => hidePicture(dogBox));
hideCow.addEventListener("click", () => hidePicture(cowBox));

function showPicture(box) {
  box.classList.add("visible");
}

// Function to hide the box (by removing the 'visible' class)
function hidePicture(box) {
  box.classList.remove("visible");
}
