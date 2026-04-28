// Função para auto redimensionar a textarea
function autoResize(el) {
    const maxHeight = 120; 

    el.style.height = "auto";

    if (el.scrollHeight > maxHeight) {
        el.style.height = maxHeight + "px";
        el.style.overflowY = "auto"; // ativa scroll
    } else {
        el.style.height = el.scrollHeight + "px";
        el.style.overflowY = "hidden"; // sem scroll
    }
}
// Local para armazenar o replace das letras
const mapaWD = {
  A: "✌︎", 
  B: "👌︎", 
  C: "👍︎", 
  D: "👎︎", 
  E: "☜",
  F: "☞",
  G: "☝︎",
  H: "☟",
  I: "✋︎",
  J: "☺",
  K: "😐︎", 
  L: "☹",
  M: "💣︎", 
  N: "☠",
  O: "⚐",
  P: "⚑",
  Q: "✈",
  R: "☼",
  S: "💧",
  T: "❄",
  U: "✞",
  V: "✠",
  W: "✡",
  X: "☪",
  Y: "☯",
  Z: "☸"
};

function traduzir() {
  const input = document.getElementById("texto").value;

  const resultado = input.split("").map(letra => {
    if (letra === " ") return " ";
    return mapaWD[letra.toUpperCase()] || letra;
  }).join("");

  document.getElementById("resultado").value = resultado;
}