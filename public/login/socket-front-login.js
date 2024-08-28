import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados) {
  socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJwt) => {
  definirCookie("tokenJwt", tokenJwt);

  alert("Autenticação de usuário com sucesso!");
  window.location.href = "/";
});
socket.on("autenticacao_erro", () => alert("Erro na autenticação do usuário!"));
socket.on("usuario_inexistente", () => alert("Usuário inexistente!"));

export { emitirAutenticarUsuario };
