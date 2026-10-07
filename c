<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Nosso Modelo</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      background:
        radial-gradient(circle at top, #242424 0%, #0d0d0d 45%);
      color: white;
      min-height: 100vh;
    }

    /* MENU */
    .menu-principal {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding: 12px;
      background: rgba(20,20,20,0.95);
      border-bottom: 1px solid #333;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .menu-principal::-webkit-scrollbar {
      display: none;
    }

    .menu-principal button {
      flex-shrink: 0;
      border: 1px solid #3a3a3a;
      background: #222;
      color: white;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: bold;
      cursor: pointer;
    }

    .menu-principal button:active {
      transform: scale(0.95);
    }

    /* BOAS VINDAS */
    #boasVindas {
      text-align: center;
      padding: 20px 15px 5px;
      color: #ccc;
      font-size: 15px;
    }

    /* CABEÇALHO */
    header {
      text-align: center;
      padding: 28px 18px 22px;
    }

    .logo {
      width: 82px;
      height: 82px;
      margin: 0 auto 15px;
      border-radius: 24px;
      background: linear-gradient(145deg, #ffffff, #888);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 42px;
      box-shadow: 0 10px 35px rgba(255,255,255,0.12);
    }

    header h1 {
      font-size: 34px;
      margin-bottom: 8px;
      letter-spacing: 1px;
    }

    header p {
      color: #aaa;
      font-size: 15px;
    }

    .subtitulo {
      margin-top: 8px;
      color: #666 !important;
      line-height: 1.5;
    }

    /* CONTAINER */
    .container {
      width: 100%;
      max-width: 600px;
      margin: auto;
      padding: 8px 18px 35px;
    }

    /* CARTÃO DE PONTOS */
    .cartao-pontos {
      background:
        linear-gradient(145deg, #292929, #141414);
      border: 1px solid #414141;
      border-radius: 25px;
      padding: 28px 20px;
      text-align: center;
      margin-bottom: 18px;
      box-shadow: 0 15px 40px rgba(0,0,0,0.4);
    }

    .cartao-pontos h2 {
      font-size: 20px;
      margin-bottom: 8px;
    }

    .numero-pontos {
      font-size: 58px;
      font-weight: bold;
      margin: 5px 0;
    }

    .cartao-pontos p {
      color: #999;
      font-size: 14px;
    }

    /* DESTAQUE */
    .destaque {
      background: linear-gradient(135deg, #1f1f1f, #111);
      border: 1px solid #333;
      border-radius: 22px;
      padding: 20px;
      margin-bottom: 20px;
      text-align: center;
    }

    .destaque h2 {
      font-size: 20px;
      margin-bottom: 8px;
    }

    .destaque p {
      color: #999;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 16px;
    }

    .botao-destaque {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 14px;
      background: white;
      color: #111;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }

    /* AÇÕES */
    .titulo-secao {
      margin: 22px 0 12px;
      font-size: 18px;
    }

    .botoes {
      display: grid;
      gap: 11px;
    }

    .botoes button {
      width: 100%;
      padding: 17px;
      border: none;
      border-radius: 15px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.2s;
    }

    .botoes button:active {
      transform: scale(0.98);
    }

    .entrar {
      background: white;
      color: #111;
    }

    .jogos,
    .recompensas {
      background: #242424;
      color: white;
      border: 1px solid #3d3d3d !important;
    }

    /* SALDO */
    .saldo {
      background: #181818;
      border: 1px solid #303030;
      border-radius: 20px;
      padding: 22px;
      text-align: center;
      margin-top: 22px;
    }

    .saldo h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .saldo strong {
      display: block;
      font-size: 32px;
      margin-bottom: 8px;
    }

    .saldo p {
      color: #999;
    }

    /* PARCEIROS */
    .parceiros {
      margin-top: 22px;
      background: linear-gradient(145deg, #202020, #141414);
      border: 1px solid #363636;
      border-radius: 22px;
      padding: 23px;
      text-align: center;
    }

    .parceiros h2 {
      margin-bottom: 10px;
      font-size: 20px;
    }

    .parceiros p {
      color: #aaa;
      line-height: 1.5;
      margin-bottom: 16px;
      font-size: 14px;
    }

    .botao-parceiro {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 14px;
      background: white;
      color: #111;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }

    /* RODAPÉ */
    footer {
      text-align: center;
      padding: 28px 15px;
      color: #555;
      font-size: 13px;
      line-height: 1.6;
    }

    @media (max-width: 400px) {
      header h1 {
        font-size: 28px;
      }

      .numero-pontos {
        font-size: 48px;
      }

      .logo {
        width: 72px;
        height: 72px;
        font-size: 36px;
      }
    }
  </style>
</head>

<body>

  <!-- MENU -->
  <nav class="menu-principal">

    <button onclick="window.location.href='index.html'">
      🏠 Início
    </button>

    <button onclick="window.location.href='jogos.html'">
      🎮 Jogos
    </button>

    <button onclick="window.location.href='recompensas.html'">
      🎁 Recompensas
    </button>

    <button onclick="window.location.href='perfil.html'">
      👤 Perfil
    </button>

    <button onclick="window.location.href='dashboard.html'">
      📊 Dashboard
    </button>

    <button onclick="window.location.href='lista-parceiros.html'">
      🤝 Parceiros
    </button>

  </nav>

  <!-- BOAS VINDAS -->
  <div id="boasVindas"></div>

  <!-- CABEÇALHO -->
  <header>

    <div class="logo">
      🎮
    </div>

    <h1>NOSSO MODELO</h1>

    <p>Entretenimento e recompensas</p>

    <p class="subtitulo">
      Uma nova forma de participar, jogar e conquistar.
    </p>

  </header>

  <main class="container">

    <!-- PONTOS -->
    <section class="cartao-pontos">

      <h2>⭐ Seus Pontos</h2>

      <div class="numero-pontos">
        <span id="pontosMenu">0</span>
      </div>

      <p>
        Continue jogando para acumular pontos!
      </p>

    </section>

    <!-- DESTAQUE -->
    <section class="destaque">

      <h2>🔥 Comece agora</h2>

      <p>
        Jogue, acumule pontos e acompanhe
        suas recompensas dentro do Nosso Modelo.
      </p>

      <button class="botao-destaque"
        onclick="window.location.href='jogos.html'">
        🎮 JOGAR AGORA
      </button>

    </section>

    <!-- AÇÕES -->
    <h2 class="titulo-secao">
      ⚡ Acesso rápido
    </h2>

    <section class="botoes">

      <button class="entrar"
        onclick="window.location.href='cadastro.html'">
        👤 Entrar / Criar conta
      </button>

      <button class="jogos"
        onclick="window.location.href='jogos.html'">
        🎮 Jogar agora
      </button>

      <button class="recompensas"
        onclick="window.location.href='recompensas.html'">
        🎁 Ver recompensas
      </button>

      <button class="jogos"
        onclick="window.location.href='perfil.html'">
        👤 Meu Perfil
      </button>

      <button class="recompensas"
        onclick="window.location.href='anuncios.html'">
        📢 Anúncios
      </button>

      <button class="jogos"
        onclick="window.location.href='admin.html'">
        ⚙️ Administração
      </button>

    </section>

    <!-- SALDO -->
    <section class="saldo">

      <h2>💰 Saldo demonstrativo</h2>

      <strong>€ 0,00</strong>

      <p>
        ⭐ Pontos:
        <span id="pontosInicio">0</span>
      </p>

    </section>

    <!-- PARCEIROS -->
    <section class="parceiros">

      <h2>🤝 Parceiros em destaque</h2>

      <p>
        Empresas e parceiros podem divulgar
        seus produtos e serviços no Nosso Modelo.
      </p>

      <button class="botao-parceiro"
        onclick="window.location.href='anuncios.html'">
        🤝 Ver parceiros
      </button>

    </section>

  </main>

  <!-- RODAPÉ -->
  <footer>

    Nosso Modelo © 2026<br>

    Entretenimento e recompensas

  </footer>

  <!-- SCRIPT EXISTENTE -->
  <script src="script.js"></script>

  <script>

    const nomeUsuario =
      localStorage.getItem("nomeUsuario");

    if (nomeUsuario) {

      document.getElementById("boasVindas").innerHTML =
        "👋 Olá, " + nomeUsuario + "!";

    }

    const pontosInicio =
      Number(localStorage.getItem("pontosUsuario")) || 0;

    document.getElementById("pontosMenu").textContent =
      pontosInicio;

    document.getElementById("pontosInicio").textContent =
      pontosInicio;

  </script>

</body>
</html>
