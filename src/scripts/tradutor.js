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
  Z: "☸",
  a: "🙦",
  b: "🙤",
  c: "🙧",
  d: "🙧",
  e: "🙚",
  f: "🙘",
  g: "🙙",
  h: "🙛",
  i: "⓪",
  j: "①",
  k: "②",
  l: "③",
  m: "④",
  n: "⑤",
  o: "⑥",
  p: "⑦",
  q: "⑧",
  r: "⑨",
  s: "⑩",
  t: "⓿",
  u: "❶",
  v: "❷",
  w: "❸",
  x: "❹",
  y: "❺",
  z: "❻"
};

function traduzir() {
  const input = document.getElementById("texto").value;

  const resultado = input
    .split("")
    .map(letra => mapaWD[letra] || letra)
    .join("");

  document.getElementById("resultado").value = resultado;
}
document.getElementById("texto").addEventListener("input", function () {
    traduzir();
    autoResize(this);
});