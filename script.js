let li = document.querySelectorAll("li");
let cardName = document.querySelectorAll(".inner-card h4");
let workHours = document.querySelectorAll(".inner-card h1");
let lastHours = document.querySelectorAll(".inner-card p");

window.addEventListener(
  "load",
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((value, index) => {
        cardName[
          index
        ].innerHTML = `${value.title} <img src="images/icon-ellipsis.svg" alt="" />`;
        workHours[index].textContent = `${value.timeframes.daily.current}hrs`;
        lastHours[
          index
        ].textContent = `Last Day - ${value.timeframes.daily.previous}hrs`;
      });
    })
);

li.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    li.forEach((li) => li.classList.remove("active"));
    element.classList.add("active");
    if (e.target.textContent === "Weekly") {
      fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((value, index) => {
            cardName[
              index
            ].innerHTML = `${value.title} <img src="images/icon-ellipsis.svg" alt="" />`;
            workHours[
              index
            ].textContent = `${value.timeframes.weekly.current}hrs`;
            lastHours[
              index
            ].textContent = `Last Week - ${value.timeframes.weekly.previous}hrs`;
          });
        });
    }
    if (e.target.textContent === "Monthly") {
      fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((value, index) => {
            cardName[
              index
            ].innerHTML = `${value.title} <img src="images/icon-ellipsis.svg" alt="" />`;
            workHours[
              index
            ].textContent = `${value.timeframes.monthly.current}hrs`;
            lastHours[
              index
            ].textContent = `Last Month - ${value.timeframes.monthly.previous}hrs`;
          });
        });
    }
  });
});
