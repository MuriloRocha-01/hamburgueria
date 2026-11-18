// Paleta do app: telas claras (como um app de mercado), vermelho da marca nas ações e destaques.
// É a ÚNICA fonte das cores: o tailwind.config.js lê este arquivo (classes bg-fundo, text-tinta,
// bg-vermelho...) e o código usa o mesmo objeto onde precisa de um valor direto (ícones, cabeçalho).
module.exports = {
  /** fundo das telas */
  fundo: "#F6F7F9",
  /** cartões, campos e menus (branco) */
  cartao: "#FFFFFF",
  /** texto principal */
  tinta: "#1F2933",
  /** texto secundário (descrições, legendas) */
  suave: "#6B7280",
  /** bordas finas e divisórias */
  linha: "#E8EAED",
  /** vermelho: tela inicial, botões de ação, preços, selo do carrinho e itens ativos */
  vermelho: { DEFAULT: "#E11D2E", escuro: "#B91C1C", claro: "#FDE8EA" },
};
