function add(name, number) {
  console.log(name);
  count = document.getElementsByName(name)[0];
  console.log(count.value);
  if (isNaN(count.value) || count.value == "") count.value = 0;
  console.log(count.value + number);
  if (parseInt(count.value) + number > 99) {
    count.value = 99;
  } else if (parseInt(count.value) + number < 0) {
    count.value = 0;
  } else count.value = parseInt(count.value) + number;
}

function change(e) {
  const button = document.querySelector(".booking .inner button");
  const buttonImg = button.querySelector("img");
  const buttonSpan = button.querySelector("span");

  const ul = document.querySelector(".booking .inner form");
  if (ul.classList.contains("is-open")) {
    ul.classList.remove("is-open");
    buttonImg.src = "/img/upArrow.png";
    buttonSpan.textContent = "Göm";
  } else {
    ul.classList.add("is-open");
    buttonImg.src = "/img/downArrow.png";
    buttonSpan.textContent = "Visa bokning";
  }
}
