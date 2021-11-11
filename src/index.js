const imgURL = "https://dog.ceo/api/breeds/image/random/4";
const breedURL = "https://dog.ceo/api/breeds/list/all";

const dropDown = document.querySelector("#breed-dropdown");
dropDown.addEventListener("change", (e) => breedFilter(e));

let breedsArray = [];

fetch(imgURL)
.then(res => res.json())
.then(data => displayImages(data));

fetch(breedURL)
  .then((res) => res.json())
  .then((data) => displayBreeds(data));

function displayImages(data) {
  for (i = 0; i < data.message.length; i++) {
    newDogImage = document.createElement("div");
    newDogImage.innerHTML = `<img src="${data.message[i]}" />`;
    document.querySelector("#dog-image-container").appendChild(newDogImage);
  }
}

function displayBreeds(data) {
  breedsArray = Object.keys(data.message);
  for (i = 0; i < Object.keys(data.message).length; i++) {
    newDogBreed = document.createElement("li");
    newDogBreed.textContent = `${Object.keys(data.message)[i]} is a dog breed.`;
    document
      .querySelector("#dog-breeds")
      .appendChild(newDogBreed)
      .addEventListener("click", (e) => (e.target.style.color = "red"));
  }
}

function breedFilter(e) {
  const letter = e.target.value;
  const filteredBreeds = breedsArray.filter((breed) =>
    breed.startsWith(letter)
  );
  document.querySelector("ul").innerHTML = "";

  for (i = 0; i < filteredBreeds.length; i++) {
    newDogBreed = document.createElement("li");
    newDogBreed.textContent = `${filteredBreeds[i]} is a dog breed.`;
    document
      .querySelector("#dog-breeds")
      .appendChild(newDogBreed)
      .addEventListener("click", (e) => (e.target.style.color = "red"));
  }
}
