import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const form = document.getElementById("form-cadastro");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = form["input-usuario"].value; //propriedades do objeto form
  const senha = form["input-senha"].value;

  emitirCadastrarUsuario({ nome, senha });
});
