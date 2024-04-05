const url = "http://localhost:3000/recipies";
const ul = document.querySelector("ul");
const template = document.querySelector("template");

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((recipies) => {
    updateUI(recipies);
  })
  .catch((error) => {
    console.log(error);
  });

function updateUI(recipies) {
  recipies.forEach((recipies) => {
    const clone = template.content.cloneNode(true);

    const image = clone.querySelector("img");
    const h3 = clone.querySelector("h3");
    const p = clone.querySelector("p");
    const method = clone.querySelector(".method");
    image.src = recipies.imageUrl;
    image.width = 400;

    h3.textContent = recipies.title;
    p.textContent = recipies.cookingTime;
    method.textContent = recipies.method;

    ul.appendChild(clone);
    console.log(recipies);
  });
}
