
async function guardarPartidaPremiumDemo(jogo, valor, mensagem) {
  if (!Number.isInteger(valor) || valor < 0 || valor > 1000) {
    mensagem.textContent += " ⚠️ Resultado fora do limite demo.";
    return;
  }

  try {
    const cliente = window.supabase.createClient(
      SUPABASE_URL, SUPABASE_KEY
    );

    const { error } = await cliente.rpc(
      "registrar_partida_premium_demo",
      { p_jogo: jogo, p_pontos: valor }
    );

    if (error) throw error;

    mensagem.textContent += " ✅ Partida demonstrativa guardada!";
  } catch (erro) {
    console.error("Erro ao guardar partida:", erro);
    mensagem.textContent +=
      String(erro.message || "").includes("Aguarde")
      ? " ⏳ Aguarda 30 segundos."
      : " ⚠️ Não foi possível guardar a partida.";
  }
}
