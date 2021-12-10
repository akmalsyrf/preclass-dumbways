const reset = document.getElementById("btn-reset");
const showNum = document.getElementById("show-number");
const imgEmpty = document.getElementById("img-empty");
const btnReset = document.getElementById("btn-reset");

function odd() {
  const maxNum = parseInt(document.getElementById("input-number").value);
  if (!maxNum) {
    alert("Input number is not be empty!");
    return;
  }
  for (let i = 1; i <= maxNum; i++) {
    if (i % 2 == 0) {
      let span = document.createElement("span");
      span.innerHTML = i;
      document.getElementById("show-number").appendChild(span);

      //display btn-reset and hide img
      btnReset.classList.remove("hide");
      imgEmpty.classList.add("hide");
    }
  }
}
function even() {
  const maxNum = parseInt(document.getElementById("input-number").value);
  if (!maxNum) {
    alert("Input number is not be empty!");
    return;
  }
  for (let i = 1; i <= maxNum; i++) {
    if (i % 2 != 0) {
      let span = document.createElement("span");
      span.innerHTML = i;
      document.getElementById("show-number").appendChild(span);

      //display btn-reset and hide img
      btnReset.classList.remove("hide");
      imgEmpty.classList.add("hide");
    }
  }
}
function prime() {
  const maxNum = parseInt(document.getElementById("input-number").value);
  if (!maxNum) {
    alert("Input number is not be empty!");
    return;
  }
  for (let n = 2; n <= maxNum; n++) {
    if (checkPrime(n)) {
      let span = document.createElement("span");
      span.innerHTML = n;
      document.getElementById("show-number").appendChild(span);

      //display btn-reset and hide img
      btnReset.classList.remove("hide");
      imgEmpty.classList.add("hide");
    }
  }
  function checkPrime(n) {
    let max = Math.sqrt(n);
    for (let i = 2; i <= max; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
}

reset.addEventListener("click", (e) => {
  e.preventDefault();
  //delete show-number
  const rightSide = document.querySelector(".right-side");
  const showNum = document.getElementById("show-number");
  rightSide.removeChild(showNum);

  //add show-number
  let div = document.createElement("div");
  div.setAttribute("id", "show-number");
  rightSide.insertBefore(div, rightSide.childNodes[4]);

  //hide btn-reset and display img
  btnReset.classList.add("hide");
  imgEmpty.classList.remove("hide");
});
