const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //input
  const dpn = document.getElementById("nama-depan").value;
  const bkg = document.getElementById("nama-bkg").value;
  const birth = document.getElementById("birth").value;
  const gender = document.querySelector("input[name=gender]:checked").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const jobs = document.getElementById("jobs").value;
  const passion = document.querySelectorAll("input[name=hobby]:checked");
  const selectedHobby = [];
  for (const hobby of passion) {
    selectedHobby.push(hobby.value);
  }

  //output
  document.querySelector(".first-name").innerHTML = dpn;
  document.querySelector(".last-name").innerHTML = bkg;
  document.querySelector(".gender").innerHTML = gender;
  document.querySelector(".birthday").innerHTML = birth;
  document.querySelector(".job").innerHTML = jobs;
  document.querySelector(".email").innerHTML = email;
  document.querySelector(".address").innerHTML = address;
  document.querySelector(".fav").innerHTML = selectedHobby.join(", ");
});

function welcome() {
  alert("Welcome!\nHave a nice day!");
}
welcome();
