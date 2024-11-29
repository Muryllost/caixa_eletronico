const urlparams = new URLSearchParams(window.location.search)
const id_usuario = urlparams.get('id_usuario')

const div_transacoes = document.querySelector('#transacoes')
fetch(`http://192.168.1.27:3000/transacoes/${id_usuario}`)

const transacoes = await resposta6