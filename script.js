function main() {
  //Declaración de variables utilizando el DOM
  const textoAEncriptarEl = document.querySelector(".encriptador__area");
  const textoEncriptadoEl = document.querySelector(".texto-encriptado");
  const botonEn = document.querySelector(".boton-encriptar");
  const botonDe = document.querySelector(".boton-desencriptar");
  const botonCopiarEl = document.querySelector(".boton-copiar");
  const imagenEl = document.querySelector(".encriptador__imagen");
  const estadoEl = document.querySelector(".encriptador__estado");

  function encriptar(string) {
    string = string.toLowerCase();
    // Se realiza un mapeo para ver las letras a encriptar con sus equivalentes
    const map = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
    };
    for (const prop in map) {
      if (string.includes(prop)) {
        string = string.replaceAll(prop, map[prop]);
      }
    }
    return string;
  }
  function desencriptar(string) {
    string = string.toLowerCase();
    // Se realiza un mapeo para ver las letras a desencriptar con sus equivalentes
    const map = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u",
    };
    for (const prop in map) {
      if (string.includes(prop)) {
        string = string.replaceAll(prop, map[prop]);
      }
    }
    return string;
  }

  function botonEncriptar() {
    const texto = encriptar(textoAEncriptarEl.value);
    textoEncriptadoEl.value = texto;
  }
  function botonDesencriptar() {
    const texto = desencriptar(textoAEncriptarEl.value);
    textoEncriptadoEl.value = texto;
  }

  botonEn.addEventListener("click", function (e) {
    e.preventDefault();
    botonEncriptar();
    textoAEncriptarEl.value = "";
    imagenEl.style.display = "none";
    estadoEl.style.display = "none";
    textoEncriptadoEl.style.display = "initial";
    botonCopiarEl.style.display = "initial";

    console.log(textoEncriptadoEl.value);
  });
  botonDe.addEventListener("click", function (e) {
    e.preventDefault();
    botonDesencriptar();
  });
  function copyText() {
    textoEncriptadoEl.select();

    navigator.clipboard.writeText(textoEncriptadoEl.value);
  }
  botonCopiarEl.addEventListener("click", function (e) {
    e.preventDefault();
    copyText();
  });
  document.querySelector("#copy").addEventListener("click", copy);
}
main();
