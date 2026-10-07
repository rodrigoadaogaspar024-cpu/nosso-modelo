// ========================================
// NOSSO MODELO - SCRIPT PRINCIPAL
// ========================================

// Nome do utilizador
function obterNomeUsuario() {
  return localStorage.getItem("nomeUsuario") || "Utilizador";
}


// Pontos do utilizador
function obterPontosUsuario() {
  return Number(localStorage.getItem("pontosUsuario")) || 0;
}


// Histórico do utilizador
function obterHistoricoUsuario() {
  return JSON.parse(
    localStorage.getItem("historicoUsuario")
  ) || [];
}


// Ir para os jogos
function abrirJogos() {
  window.location.href = "jogos.html";
}


// Ir para recompensas
function abrirRecompensas() {
  window.location.href = "recompensas.html";
}


// Ir para o perfil
function abrirPerfil() {
  window.location.href = "perfil.html";
}


// Ir para anúncios
function abrirAnuncios() {
  window.location.href = "anuncios.html";
}


// Ir para parceiros
function abrirParceiros() {
  window.location.href = "lista-parceiros.html";
}


// Ir para administração
function abrirAdministracao() {
  window.location.href = "admin.html";
}


// Ir para o início
function abrirInicio() {
  window.location.href = "index.html";
}
