let cards = [];

const showOutput = document.querySelector(".show-card");

function renderCard() {
  //buat variabel elemen kosong
  let cardElements = "";

  for (elem of cards) {
    const id = elem.id;
    const name = elem.name;
    const address = elem.address;
    const gender = elem.gender;
    const birth = elem.birth;
    const selectedHobby = elem.hobby;

    cardElements += `
    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>HI,</span>
                <span class="inputStyle">${name}</span>
              </div>
              <div class="app-info">
              <img src="${gender}.svg" alt="${gender}">
            </div>
            <div class="screen-body-item">
              <div class="app-info hyperlink">
                <p>You're <span id="gender" class="inputStyle">${gender}</span> who's bithday on <span id="birth" class="inputStyle">${birth}</span></p>
                <p>Right now, you're stayed on <span id="stay" class="inputStyle">${address}</span></p>
                <p>Your hobbies are: <span id="hobby" class="inputStyle">${selectedHobby}</span></p>
                <p>Have a nice day :)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    `;
  }
  showOutput.innerHTML = cardElements;
}

function addCard() {
  //tangkap inputan
  const nameInput = document.querySelector(".name").value;
  const addressInput = document.querySelector(".stay").value;
  const genderInput = document.querySelector("input[name=gender]:checked").value;
  const birthInput = document.querySelector(".birth").value;
  const passion = document.querySelectorAll("input[name=hobby]:checked");
  const selectedHobby = [];
  for (let hobby of passion) {
    selectedHobby.push(hobby.value);
  }

  //masukkan data inputan ke variabel
  const card = {
    id: Date.now(),
    name: nameInput.value,
    address: addressInput.value,
    gender: genderInput.value,
    birth: birthInput.value,
    Hobby: selectedHobby.value,
    isDone: false,
  };

  //masukkan variabel ke array
  cards.push(card);

  //kosongkan kembali inputan
  nameInput.value = "";
  addressInput.value = "";
  genderInput.value = "";
  birthInput.value = "";
  selectedHobby.value = "";

  //kirim data ke render
  renderCard();
}
// function deleteCard(id) {
//   for (let index = 0; index < cards.length; index++) {
//     console.log("id", id);
//     console.log("index", index);
//     if (id === cards[index].id) {
//       cards.splice(index, 1);
//     }
//   }
//   renderCard();
// }
// renderCard();
console.log(cards);
