const loginForm = document.getElementById("loginForm");
const searchForm = document.getElementById("searchForm");
const loginButton = document.getElementById("loginButton");
const searchButton = document.getElementById("searchButton");
const resultDiv = document.getElementById("result");


loginButton.addEventListener("click", function (event) {
  event.preventDefault(); // Evita que se envíe el formulario

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "prueba" && password === "1234") {
    loginForm.style.display = "none";
    searchForm.style.display = "block";
  } else {
    resultDiv.innerHTML = "Credenciales incorrectas. Por favor, intenta de nuevo.";
  }
});

searchButton.addEventListener("click", function (event) {
  event.preventDefault(); // Evita que se envíe el formulario

  const characterName = document.getElementById("characterName").value;

  fetch(`https://api.api-onepiece.com/characters/search/name/${characterName}`)
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        resultDiv.innerHTML = ""; // Limpiar resultados anteriores
        data.forEach(character => {
          const characterBox = document.createElement("div");
          characterBox.className = "character-box";
          characterBox.innerHTML = `
            <h2>${character.french_name}</h2>
            <p><strong>Role:</strong> ${character.job}</p>
            <p><strong>Age:</strong> ${character.age}</p>
            <p><strong>Reward:</strong> ${character.bounty}</p>
            <p><strong>State:</strong> ${character.status}</p>
          `;
          resultDiv.appendChild(characterBox);
        });
      } else {
        resultDiv.innerHTML = "No se encontraron personajes con ese nombre.";
      }
    })
    .catch(error => console.error(error));
});

const toggleButton = document.getElementById("toggleTheme");
const body = document.body;
const container = document.querySelector(".container");

toggleButton.addEventListener("click", function () {
  body.classList.toggle("night-mode");
  container.classList.toggle("night-mode");
  // Agrega o elimina otros estilos de noche aquí
});

