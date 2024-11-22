

let botao = document.querySelector('#botaoEntrar')
botao.addEventListener('click', async () => {
    let usuario = document.querySelector('#usuario').value
    let senha = document.querySelector('#senha').value
    
    if (usuario === '' || senha === '') 
    {
        console.log('Por favor, preencha todos os campos.');
        return;
    }

    let resposta = await fetch(`http://localhost:3000/login/${usuario}/${senha}`)
    let mensagem = await resposta.json()

    if(mensagem == 'Bem-vindo!')
    {
        window.location.href = 'https://www.itau.com.br/'
    }
    else
        alert(mensagem)

})