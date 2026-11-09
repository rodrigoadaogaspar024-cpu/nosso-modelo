(function () {
  if (document.getElementById("ju-botao")) return;

  const estilo = document.createElement("style");
  estilo.textContent = `
    #ju-botao {
      position:fixed;right:18px;bottom:90px;
      z-index:9999;border:0;border-radius:50%;
      width:64px;height:64px;cursor:pointer;
      background:linear-gradient(135deg,#00d4ff,#734bff);
      color:white;font-size:30px;
      box-shadow:0 4px 20px #0008;
    }
    #ju-janela {
      display:none;position:fixed;
      right:12px;bottom:165px;
      width:min(350px,calc(100vw - 24px));
      max-height:70vh;overflow:auto;
      background:#10152e;color:white;
      border:2px solid #00d4ff;
      border-radius:18px;padding:18px;
      z-index:9999;
      box-shadow:0 8px 30px #0009;
      font-family:Arial,sans-serif;
    }
    #ju-janela h3 {margin:0 0 10px;color:#67e8f9}
    #ju-janela p {line-height:1.5}
    #ju-janela button {
      display:block;width:100%;margin:8px 0;
      padding:12px;border:1px solid #38bdf8;
      border-radius:10px;background:#19264b;
      color:white;cursor:pointer;text-align:left;
    }
    #ju-resposta {
      background:#202d52;padding:12px;
      border-radius:10px;margin-top:12px;
      line-height:1.5;
    }
  `;
  document.head.appendChild(estilo);

  const botao = document.createElement("button");
  botao.id = "ju-botao";
  botao.type = "button";
  botao.textContent = "🤖";
  botao.setAttribute("aria-label", "Abrir assistente Ju");

  const janela = document.createElement("section");
  janela.id = "ju-janela";
  janela.setAttribute("aria-label", "Assistente Ju");

  const titulo = document.createElement("h3");
  titulo.textContent = "🤖 Ju — Modelo Play";

  const saudacao = document.createElement("p");
  saudacao.textContent =
    "Olá! 💙 Sou a Ju! Como posso ajudar você?";

  const resposta = document.createElement("div");
  resposta.id = "ju-resposta";
  resposta.setAttribute("aria-live", "polite");
  resposta.textContent = "Escolha uma pergunta abaixo!";

  const perguntas = [
    ["📝 Como faço meu cadastro?",
     "Abra Cadastro, informe seus dados e siga as instruções de confirmação do e-mail."],
    ["🎮 Como posso jogar?",
     "Entre em Jogos, escolha um jogo e siga as instruções."],
    ["⭐ Como funcionam os pontos?",
     "Os jogos elegíveis podem guardar pontos no seu perfil. Consulte as regras de cada jogo."],
    ["🎁 Como funcionam os prémios?",
     "Consulte a página de Prémios. A disponibilidade depende das ofertas e regras ativas."],
    ["🤝 Como ser parceiro?",
     "Abra Seja Parceiro e envie sua proposta comercial."]
  ];

  janela.append(titulo, saudacao);

  perguntas.forEach(([pergunta, texto]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = pergunta;
    b.addEventListener("click", () => {
      resposta.textContent = texto;
    });
    janela.appendChild(b);
  });

  janela.appendChild(resposta);

  botao.addEventListener("click", () => {
    const aberto = janela.style.display === "block";
    janela.style.display = aberto ? "none" : "block";
    botao.setAttribute("aria-expanded", String(!aberto));
  });

  document.body.append(janela, botao);
})();
