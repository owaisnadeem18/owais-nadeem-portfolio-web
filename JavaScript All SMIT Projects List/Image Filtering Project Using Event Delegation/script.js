const tabs = document.querySelector(".tabs");

const gallery = document.querySelectorAll(".image");

tabs.addEventListener("click", (events) => {
  console.log(events.target.dataset.category);
  console.log(events);
  console.log(events.target);
  console.log(events.target.dataset);
  if (events.target.dataset.category !== undefined) {
    filter_Function(events.target.dataset.category);
  }
});

const filter_Function = (value) => {
  gallery.forEach((currElem) => {
    console.log(currElem.dataset.category);
    if (currElem.dataset.category === value) {
      currElem.style.display = "block";
    } else if (value == "all") {
      currElem.style.display = "block";
    } else {
      currElem.style.display = "none";
    }
  });
};
