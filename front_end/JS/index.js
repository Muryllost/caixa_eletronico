
document.querySelector('button')
.addEventListener('click',()=>{
    let usuario = document.querySelector('#usuario').value;
    let senha = document.querySelector('#senha').value;

    if(usuario == 'admin@admin.com' && senha == '123')
    {
        console.log('Bem vindo!')
    }
    else
    {
        console.log('Usuario ou senha incorreta!')
    }
})
 
