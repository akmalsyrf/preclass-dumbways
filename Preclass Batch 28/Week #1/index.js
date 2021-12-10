function render() {
  //INPUT
  const name = document.getElementById("name").value;
  const summary = document.getElementById("summary").value;
  const phone = document.getElementById("phone").value;
  const gender = document.querySelector("input[name=gender]:checked").value;
  const birth = document.getElementById("birth").value;
  const jobs = document.getElementById("jobs").value;
  const education = document.querySelectorAll("input[name=edu]:checked");
  selectedEdu = [];
  for (const edu of education) {
    selectedEdu.push(edu.value);
  }
  const address = document.getElementById("address").value;

  //OUTPUT
  document.querySelector(".name").innerHTML = `<i class="icons far fa-id-badge"></i> ${name}`;
  document.querySelector(".summary").innerHTML = `<i class="icons fas fa-id-badge"></i> ${summary}`;
  document.querySelector(".phone").innerHTML = `<i class="icons fas fa-phone-alt"></i> ${phone}`;
  //gender
  if (gender == "a Female") {
    document.querySelector(".gender").innerHTML = `<i class="icons fas fa-venus"></i> ${gender}`;
  } else {
    document.querySelector(".gender").innerHTML = `<i class="icons fas fa-mars"></i> ${gender}`;
  }
  document.querySelector(".birth").innerHTML = `<i class="icons fas fa-id-badge"></i> ${birth}`;
  document.querySelector(".jobs").innerHTML = `<i class="icons fas fa-id-badge"></i> ${jobs}`;
  document.querySelector(".edu").innerHTML = `<i class="icons fas fa-id-badge"></i> ${selectedEdu.join("<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")}`;
  document.querySelector(".address").innerHTML = `<i class="icons fas fa-map-marker-alt"></i> ${address}`;
}

//SELECT DOM FORM
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  render();
});
