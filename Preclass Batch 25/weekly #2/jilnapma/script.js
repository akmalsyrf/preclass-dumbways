let number = [];

const showTodo = document.getElementById("show-number");

function renderNum() {
  let numElements = "";

  if (number.length < 1) {
    numElements += `
        <div class="text-center">
            <img src="math.svg" alt="img math" class="img-not-found">
        </div>
        `;
  } else {
    for (let i = 0; i < number.length; i++) {
      if (number[i] > 10) {
        number.join("\n");
      }
      numElements += `
      <div class="number">
      <p class="number-result">${number}</p>
      </div>
      `;
    }
  }

  showTodo.innerHTML = numElements;
}

function primeNum() {
  const maxNum = document.getElementById("input-number").value;

  // if (!maxNum.value) {
  //   alert("Input number is not be empty");
  //   return;
  // }
  const prime = [];

  for (let n = 2; n <= maxNum; n++) {
    if (checkPrime(n)) {
      prime.push(n);
      prime.join(",");
    }
  }
  function checkPrime(n) {
    let max = Math.sqrt(n);
    for (let i = 2; i <= max; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }

  number.push(prime);
  maxNum.value = "";
  renderNum();
}
function oddNum() {
  const maxNum = document.getElementById("input-number").value;

  // if (!maxNum.value) {
  //   alert("Input number is not be empty");
  //   return;
  // }
  const odd = [];

  for (let n = 1; n <= maxNum; n++) {
    if (n % 2 == 0) {
      odd.push(n);
      odd.join(",");
    }
  }

  number.push(odd);
  maxNum.value = "";
  renderNum();
}
function evenNum() {
  const maxNum = document.getElementById("input-number").value;

  // if (!maxNum.value) {
  //   alert("Input number is not be empty");
  //   return;
  // }
  const even = [];

  for (let n = 1; n <= maxNum; n++) {
    if (n % 2 != 0) {
      even.push(n);
      even.join(",");
    }
  }

  number.push(even);
  maxNum.value = "";
  renderNum();
}
renderNum();
console.log(number.length);
