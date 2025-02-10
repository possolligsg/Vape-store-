let carrinho = [];
let total = 0;

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    const contadorCarrinho = document.getElementById('contador-carrinho');

    // Limpa a lista
    listaCarrinho.innerHTML = '';

    // Adiciona os itens ao carrinho
    carrinho.forEach((item, index) => {
        const divItem = document.createElement('div');
        divItem.innerHTML = `
            <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
            <button onclick="removerItem(${index})">Remover</button>
        `;
        listaCarrinho.appendChild(divItem);
    });

    // Atualiza o total e o contador
    totalCarrinho.textContent = total.toFixed(2);
    contadorCarrinho.textContent = carrinho.length;
}

// Função para adicionar item ao carrinho
document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', () => {
        const nome = button.getAttribute('data-nome');
        const preco = parseFloat(button.getAttribute('data-preco'));

        carrinho.push({ nome, preco });
        total += preco;
        atualizarCarrinho();
    });
});

// Função para remover item do carrinho
function removerItem(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Função para finalizar a compra
document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        // Oculta o carrinho e exibe o checkout
        document.getElementById('carrinho').style.display = 'none';
        document.getElementById('checkout').style.display = 'block';
    }
});

// Função para processar o pagamento (simulação)
document.getElementById('form-checkout').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simula o processamento do pagamento
    alert('Pagamento processado com sucesso! Obrigado pela compra.');

    // Limpa o carrinho e volta para a tela inicial
    carrinho = [];
    total = 0;
    atualizarCarrinho();
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('carrinho').style.display = 'block';
});
