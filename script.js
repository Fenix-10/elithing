const nombres = ["Andy", "Ana Lau", "Ana", "Cam", "Dylan", "Estiven", "Fenix", "Gisel", "hugo", "Jenny", "Karly", "Lucero", "Maca",
    "Maye", "Marco", "Maria", "Melisa", "Meli", "Melvin", "Miranda", "Tania", "Tracy", "Vale", "Xime", "Yaz"
];
const dulces = [56, 46, 16, 208, 314, 0, 319, 16, 206, 286, 16, 311, 8, 11, 6, 16, 16, 36, 11, 96, 118, 76, 94, 100, 6];

function consultarDulces() {
  const nombre = document.getElementById("nombreInput").value.trim();
  const index = nombres.findIndex(n => n.toLowerCase() === nombre.toLowerCase());

  const resultado = document.getElementById("resultado");
  if (index !== -1) {
    resultado.textContent = `${nombres[index]} tiene ${dulces[index]} Elithingvales.`;
  } else {
    resultado.textContent = `No se encontró a "${nombre}".`;
  }
}
