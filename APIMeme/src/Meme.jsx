import './meme.css'
function gerar(){

fetch('https://api.imgflip.com/get_memes').then(bacon=>bacon.json()).then(batata=>mostraMeme(batata))


fetch('https://api.quotable.io/random').then(res=>res.json()).then(dados=>mostraLegenda(dados))


function mostraLegenda(dados){
const legenda = document.querySelector('#legenda')
legenda.textContent = dados.content
}


function mostraMeme(batata){
    
    var x = Math.floor(Math.random()*100)
    const nome = document.querySelector("#nome")
    const imagem = document.querySelector("#imagem")
    nome.textContent = batata.data.memes[x].name
    imagem.src = batata.data.memes[x].url

}
}

function Meme(){
    return(
        <>
        
        <h1 id='nome'></h1>
        <img src="" alt="" id='imagem' />
        <figcaption id='legenda'></figcaption>
        <button onClick={gerar}>Gerar Meme</button>
        </>
    )
}
export default Meme