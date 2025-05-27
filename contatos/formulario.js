document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioContato');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // Verifica se o formulário é válido (validação HTML5)
            if (form.checkValidity()) {
            // Impede o envio padrão do formulário (que recarregaria a página)
        event.preventDefault();
                event.preventDefault();
                // Coleta os dados do formulário
                const formData = new FormData(formulario);
                const queryParams = new URLSearchParams(formData).toString();
                // Redireciona para a página de confirmação
                window.location.href = 'confirmacao.html';
            } else {
                // Se inválido, a validação HTML5 padrão já exibirá as mensagens de erro
                // Não precisamos fazer nada aqui, apenas impedir o envio padrão
                event.preventDefault();
            }
        });
    }
});