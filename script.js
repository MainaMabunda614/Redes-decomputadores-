// Funcionalidades da página Redes de Computadores
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const temaBtn = document.getElementById("temaBtn");
const contactForm = document.getElementById("contactForm");
const formAviso = document.getElementById("formAviso");

// Abrir e fechar o menu em ecrãs pequenos
menuToggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = aberto ? "✕" : "☰";
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Alternar entre tema claro e escuro
temaBtn.addEventListener("click", () => {
  const escuro = document.body.classList.toggle("escuro");
  temaBtn.textContent = escuro ? "☀" : "☾";
  temaBtn.setAttribute("aria-label", escuro ? "Ativar tema claro" : "Ativar tema escuro");
});

// O formulário apresenta uma confirmação local; não envia dados para um servidor.
contactForm.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  formAviso.textContent = `Obrigado, ${nome}! A sua mensagem foi validada neste exemplo.`;
  contactForm.reset();
});

// Atualizar automaticamente o ano do rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
