// Seções e botões para navegação
const btnExercicios = document.getElementById("btn-exercicios");
const btnDieta = document.getElementById("btn-dieta");
const btnMonetizacao = document.getElementById("btn-monetizacao");

const secExercicios = document.getElementById("exercicios-section");
const secDieta = document.getElementById("dieta-section");
const secMonetizacao = document.getElementById("monetizacao-section");

btnExercicios.addEventListener("click", () => {
  setActiveSection("exercicios");
});
btnDieta.addEventListener("click", () => {
  setActiveSection("dieta");
});
btnMonetizacao.addEventListener("click", () => {
  setActiveSection("monetizacao");
});

function setActiveSection(section) {
  secExercicios.classList.remove("active");
  secDieta.classList.remove("active");
  secMonetizacao.classList.remove("active");
  btnExercicios.classList.remove("active");
  btnDieta.classList.remove("active");
  btnMonetizacao.classList.remove("active");

  switch (section) {
    case "exercicios":
      secExercicios.classList.add("active");
      btnExercicios.classList.add("active");
      break;
    case "dieta":
      secDieta.classList.add("active");
      btnDieta.classList.add("active");
      break;
    case "monetizacao":
      secMonetizacao.classList.add("active");
      btnMonetizacao.classList.add("active");
      break;
  }
}

// Exercícios
const exercicioForm = document.getElementById("exercicio-form");
const exercicioInput = document.getElementById("input-exercicio");
const exerciciosList = document.getElementById("exercicios-list");

exercicioForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = exercicioInput.value.trim();
  if (!val) return;

  addExercicio(val);
  exercicioInput.value = "";
});

function addExercicio(desc) {
  const li = document.createElement("li");
  li.textContent = desc;

  const btnRemove = document.createElement("button");
  btnRemove.textContent = "X";
  btnRemove.addEventListener("click", () => {
    exerciciosList.removeChild(li);
  });

  li.appendChild(btnRemove);
  exerciciosList.appendChild(li);
}

// Dieta
const dietaForm = document.getElementById("dieta-form");
const dietaInputAlimento = document.getElementById("input-alimento");
const dietaInputCalorias = document.getElementById("input-calorias");
const dietaList = document.getElementById("dieta-list");
const totalCaloriasSpan = document.getElementById("total-calorias");

let totalCalorias = 0;

dietaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const alimento = dietaInputAlimento.value.trim();
  const calorias = Number(dietaInputCalorias.value);

  if (!alimento || calorias < 0) return;

  addDietaItem(alimento, calorias);
  dietaInputAlimento.value = "";
  dietaInputCalorias.value = "";
});

function addDietaItem(alimento, calorias) {
  totalCalorias += calorias;
  totalCaloriasSpan.textContent = totalCalorias;

  const li = document.createElement("li");
  li.textContent = `${alimento} - ${calorias} kcal`;

  const btnRemove = document.createElement("button");
  btnRemove.textContent = "X";
  btnRemove.addEventListener("click", () => {
    dietaList.removeChild(li);
    totalCalorias -= calorias;
    totalCaloriasSpan.textContent = totalCalorias;
  });

  li.appendChild(btnRemove);
  dietaList.appendChild(li);
}

// Botões de doação
document.getElementById("btn-doar-paypal").addEventListener("click", () => {
  window.open("https://www.paypal.com/donate/?hosted_button_id=SEU_ID", "_blank");
});
document.getElementById("btn-doar-patreon").addEventListener("click", () => {
  window.open("https://www.patreon.com/seu_usuario", "_blank");
});
