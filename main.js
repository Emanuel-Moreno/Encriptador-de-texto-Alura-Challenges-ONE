const btnOne = document.querySelector(".bntOne");
const btnTwo = document.querySelector(".bntTwo");
const btnTh = document.querySelector(".btnTh");
const contentMain = document.querySelector(".sectionMain");
let content = document.querySelector(".content");

btnTwo.addEventListener("click", () => {
  cadena = document.querySelector(".input").value;
  let expresion = /^[a-z\s]+$/u;
  if (cadena !== "" && expresion.test(cadena)) {
    contentMain.style.display = "none";
    btnTh.style.display = "block";
    content.style.display = "block";
    desconvertirCadena();
    content.textContent = desconvertirCadena();
  } else {
    redColor();
  }
});
btnOne.addEventListener("click", () => {
  cadena = document.querySelector(".input").value;
  let expresion = /^[a-z\s]+$/u;
  if (cadena !== "" && expresion.test(cadena)) {
    contentMain.style.display = "none";
    btnTh.style.display = "block";
    content.style.display = "block";
    convertirCadena();
    content.textContent = convertirCadena();
  } else {
    redColor();
  }
});
// /^[a-z\s[^0-9]]+$/u

btnTh.addEventListener("click", copiarContenido);
document.querySelector(".input").addEventListener("click", grayColor);

function convertirCadena() {
  cadena = document.querySelector(".input").value;
  let resultado = "";
  const conversiones = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i];
    if (conversiones[caracter]) {
      resultado += conversiones[caracter];
    } else {
      resultado += caracter;
    }
  }
  return resultado;
}
function desconvertirCadena() {
  cadena = document.querySelector(".input").value;
  const conversiones = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < conversiones.length; i++) {
    if (cadena.includes(conversiones[i][1])) {
      cadena = cadena.replaceAll(conversiones[i][1], conversiones[i][0]);
    }
  }

  return cadena;
}

function copiarContenido() {
  const elemento = document.querySelector(".content");
  const seleccion = window.getSelection();
  elemento.contenteditable = true;
  seleccion.selectAllChildren(elemento);
  document.execCommand("copy");
  elemento.contenteditable = false;
}

function grayColor() {
  let error = document.querySelector(".aviso");
  let exclamation = document.querySelector(".exclamation");
  error.style.color = "gray";
  exclamation.style.background = "gray";
}
function redColor() {
  let error = document.querySelector(".aviso");
  let exclamation = document.querySelector(".exclamation");
  error.style.color = "red";
  exclamation.style.background = "red";
}
