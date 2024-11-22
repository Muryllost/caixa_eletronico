
document.querySelector('#form-new').addEventListener('submit', function(event){
    const msgError = document.querySelector('#msgErro');
    const senha = document.querySelector('#senha').value;
    const conf_senha = document.querySelector('#conf_senha').value;
    
    if(senha != conf_senha){
        msgError.textContent = "As senhas devem ser iguais"
        event.preventDefault(); // Impede o envio do formulário
    }        
    else
    {
        msgError.textContent = ""
        alert('Cadastro concluido!')
    }
});