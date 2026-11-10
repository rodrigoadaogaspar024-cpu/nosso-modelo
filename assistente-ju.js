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
  botao.textContent = "";
  const avatar = document.createElement("img");
  avatar.src = "ju-robo.png";
  avatar.alt = "";
  avatar.style.cssText = "width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;";
  botao.style.overflow = "hidden";
  botao.appendChild(avatar);
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


  const traducoesJu = {
    pt: {
      saudacao: "Olá! 💙 Sou a Ju! Como posso ajudar você?",
      escolha: "Escolha uma pergunta abaixo!",
      ouvir: "🔊 Ouvir saudação",
      parar: "🔇 Parar voz",
      perguntas: [
        ["📝 Como faço meu cadastro?", "Abra Cadastro, informe seus dados e siga as instruções de confirmação do e-mail."],
        ["🎮 Como posso jogar?", "Entre em Jogos, escolha um jogo e siga as instruções."],
        ["⭐ Como funcionam os pontos?", "Os jogos elegíveis podem guardar pontos no seu perfil. Consulte as regras de cada jogo."],
        ["🎁 Como funcionam os prémios?", "Consulte a página de Prémios. A disponibilidade depende das ofertas e regras ativas."],
        ["🤝 Como ser parceiro?", "Abra Seja Parceiro e envie sua proposta comercial."]
      ]
    },
    en: {
      saudacao: "Hello! 💙 I'm Ju! How can I help you?",
      escolha: "Choose a question below!",
      ouvir: "🔊 Hear greeting",
      parar: "🔇 Stop voice",
      perguntas: [
        ["📝 How do I register?", "Open Registration, enter your details and follow the email confirmation instructions."],
        ["🎮 How can I play?", "Go to Games, choose a game and follow its instructions."],
        ["⭐ How do points work?", "Eligible games may save points to your profile. Check each game's rules."],
        ["🎁 How do rewards work?", "Visit the Rewards page. Availability depends on active offers and rules."],
        ["🤝 How can I become a partner?", "Open Become a Partner and send your business proposal."]
      ]
    },
    es: {
      saudacao: "¡Hola! 💙 ¡Soy Ju! ¿Cómo puedo ayudarte?",
      escolha: "¡Elige una pregunta!",
      ouvir: "🔊 Escuchar saludo",
      parar: "🔇 Detener voz",
      perguntas: [
        ["📝 ¿Cómo me registro?", "Abre Registro, introduce tus datos y sigue las instrucciones de confirmación por correo."],
        ["🎮 ¿Cómo puedo jugar?", "Entra en Juegos, elige un juego y sigue sus instrucciones."],
        ["⭐ ¿Cómo funcionan los puntos?", "Los juegos elegibles pueden guardar puntos en tu perfil. Consulta las reglas de cada juego."],
        ["🎁 ¿Cómo funcionan las recompensas?", "Consulta la página de Recompensas. La disponibilidad depende de las ofertas y reglas vigentes."],
        ["🤝 ¿Cómo puedo ser socio?", "Abre Hazte socio y envía tu propuesta comercial."]
      ]
    },
    fr: {
      saudacao: "Bonjour ! 💙 Je suis Ju ! Comment puis-je vous aider ?",
      escolha: "Choisissez une question !",
      ouvir: "🔊 Écouter le message",
      parar: "🔇 Arrêter la voix",
      perguntas: [
        ["📝 Comment m'inscrire ?", "Ouvrez Inscription, saisissez vos informations et suivez les instructions de confirmation par e-mail."],
        ["🎮 Comment jouer ?", "Accédez aux Jeux, choisissez un jeu et suivez ses instructions."],
        ["⭐ Comment fonctionnent les points ?", "Les jeux éligibles peuvent enregistrer des points sur votre profil. Consultez les règles de chaque jeu."],
        ["🎁 Comment fonctionnent les récompenses ?", "Consultez la page Récompenses. La disponibilité dépend des offres et des règles en vigueur."],
        ["🤝 Comment devenir partenaire ?", "Ouvrez Devenir partenaire et envoyez votre proposition commerciale."]
      ]
    },
    de: {
      saudacao: "Hallo! 💙 Ich bin Ju! Wie kann ich dir helfen?",
      escolha: "Wähle eine Frage aus!",
      ouvir: "🔊 Begrüßung anhören",
      parar: "🔇 Stimme stoppen",
      perguntas: [
        ["📝 Wie registriere ich mich?", "Öffne Registrierung, gib deine Daten ein und folge den Anweisungen zur E-Mail-Bestätigung."],
        ["🎮 Wie kann ich spielen?", "Gehe zu Spiele, wähle ein Spiel und folge den Anweisungen."],
        ["⭐ Wie funktionieren Punkte?", "Geeignete Spiele können Punkte in deinem Profil speichern. Beachte die Regeln jedes Spiels."],
        ["🎁 Wie funktionieren Belohnungen?", "Besuche die Belohnungsseite. Die Verfügbarkeit hängt von aktuellen Angeboten und Regeln ab."],
        ["🤝 Wie werde ich Partner?", "Öffne Partner werden und sende deinen Geschäftsvorschlag."]
      ]
    }
  };

  // Voz da Ju pelo navegador
  const vozDisponivel =
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window;


  const idiomasJu = {
    pt: "pt-PT",
    en: "en-GB",
    es: "es-ES",
    fr: "fr-FR",
    de: "de-DE"
  };

  function idiomaAtualJu() {
    const seletor = document.getElementById("idioma-escolhido");
    const codigo = seletor?.value ||
      localStorage.getItem("modeloPlayIdioma") || "pt";
    return idiomasJu[codigo] ? codigo : "pt";
  }

  function falarJu(texto) {
    if (!vozDisponivel) return;

    const idioma = idiomasJu[idiomaAtualJu()];
    window.speechSynthesis.cancel();

    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = idioma;
    fala.rate = 0.95;
    fala.pitch = 1.08;

    const vozes = window.speechSynthesis.getVoices();
    const voz = vozes.find(v =>
      v.lang.toLowerCase() === idioma.toLowerCase()
    ) || vozes.find(v =>
      v.lang.toLowerCase().split("-")[0] ===
      idioma.split("-")[0].toLowerCase()
    );

    if (voz) {
      fala.voice = voz;
      fala.lang = voz.lang;
    }

    window.speechSynthesis.speak(fala);
  }

  const ouvir = document.createElement("button");
  ouvir.type = "button";
  ouvir.textContent = "🔊 Ouvir saudação";
  ouvir.addEventListener("click", () => {
    const saudacoes = {
      pt: "Olá! Eu sou a Ju, assistente virtual do Modelo Play. Como posso ajudar você?",
      en: "Hello! I am Ju, your virtual assistant at Modelo Play. How can I help you?",
      es: "¡Hola! Soy Ju, tu asistente virtual de Modelo Play. ¿Cómo puedo ayudarte?",
      fr: "Bonjour ! Je suis Ju, votre assistante virtuelle de Modelo Play. Comment puis-je vous aider ?",
      de: "Hallo! Ich bin Ju, deine virtuelle Assistentin bei Modelo Play. Wie kann ich dir helfen?"
    };

    falarJu(saudacoes[idiomaAtualJu()]);
  });

  const parar = document.createElement("button");
  parar.type = "button";
  parar.textContent = "🔇 Parar voz";
  parar.addEventListener("click", () => {
    if (vozDisponivel) window.speechSynthesis.cancel();
  });

  janela.append(titulo, saudacao);

  janela.append(ouvir, parar);


  const botoesPerguntas = [];

  for (let i = 0; i < 5; i++) {
    const b = document.createElement("button");
    b.type = "button";
    b.addEventListener("click", () => {
      const idioma = idiomaAtualJu();
      const texto = traducoesJu[idioma].perguntas[i][1];
      resposta.textContent = texto;
      falarJu(texto);
    });
    botoesPerguntas.push(b);
    janela.appendChild(b);
  }

  janela.appendChild(resposta);

  function atualizarIdiomaJu() {
    const idioma = idiomaAtualJu();
    const t = traducoesJu[idioma];

    saudacao.textContent = t.saudacao;
    resposta.textContent = t.escolha;
    ouvir.textContent = t.ouvir;
    parar.textContent = t.parar;

    botoesPerguntas.forEach((b, i) => {
      b.textContent = t.perguntas[i][0];
    });

    if (vozDisponivel) window.speechSynthesis.cancel();
  }

  const seletorIdioma = document.getElementById("idioma-escolhido");
  if (seletorIdioma) {
    seletorIdioma.addEventListener("change", atualizarIdiomaJu);
  }

  atualizarIdiomaJu();

  botao.addEventListener("click", () => {
    const aberto = janela.style.display === "block";
    janela.style.display = aberto ? "none" : "block";
    botao.setAttribute("aria-expanded", String(!aberto));
  });

  document.body.append(janela, botao);
})();
