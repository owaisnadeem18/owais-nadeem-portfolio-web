// Here in this video we have to create mini project in which you can generate a random hex color and after it I will apply it on the color of my name i.e Owais Nadeem which is my main heading

let heading = document.getElementById("main-heading");

let btn = document.querySelector(".btn");

let random_color_generator = () => {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
};

console.log(random_color_generator());

btn.addEventListener("click", () => {
  heading.style.color = random_color_generator();
});
