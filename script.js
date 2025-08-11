let carrinho = [];
let total = 0;

function comprar(produto, preco) {
  carrinho.push({ produto, preco });
  total += preco;
  atualizarCarrinho();
  alert(produto + " foi adicionado ao carrinho!");
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById("lista_carrinho");
  listaCarrinho.innerHTML = "";
  carrinho.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.produto} - R$${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(li);
  });
  document.getElementById(
    "total_carrinho"
  ).textContent = `Total: R$${total.toFixed(2)}`;
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("Compra finalizada! Total: R$" + total.toFixed(2));
  carrinho = [];
  total = 0;
  atualizarCarrinho();
  toggleCarrinho(); // Esconder o carrinho após finalizar
}

function toggleCarrinho() {
  const carrinhoDiv = document.getElementById("carrinho");
  carrinhoDiv.style.display =
    carrinhoDiv.style.display === "none" ? "block" : "none";
}

function mostrarSecao(secao) {
  // Oculta todas as seções
  const secoes = document.querySelectorAll(".container");
  secoes.forEach((div) => {
    div.style.display = "none";
  });
  // Mostra a seção selecionada
  document.getElementById(secao).style.display = "block";
}

// Exibe a seção de produtos por padrão
mostrarSecao("produtos");
