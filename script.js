document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões "Ver Detalhes"
    const botoesDestaque = document.querySelectorAll('.btn-destaque');

    // Itera sobre cada botão para adicionar o event listener
    botoesDestaque.forEach(botao => {
        botao.addEventListener('click', function() {
            // Encontra o elemento 'section' pai do botão (o container do produto)
            const produtoContainer = this.closest('.produto');

            // Encontra o elemento onde a mensagem será exibida
            const mensagemElemento = produtoContainer.querySelector('.mensagem-destaque');

            // Pega o nome do produto no título
            const nomeProduto = produtoContainer.querySelector('h2').textContent;
            
            // Define a mensagem
            const mensagem = `${nomeProduto} é um dos nossos mais vendidos! Aproveite!`;

            // Exibe a mensagem no site
            mensagemElemento.textContent = mensagem;

            // Remove a mensagem após 3 segundos
            setTimeout(() => {
                mensagemElemento.textContent = '';
            }, 3000);
        });
    });
});