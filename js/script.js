let paises= [
    ["África do Sul","É o país mais ao sul do continente africano, banhado pelos oceanos Atlântico e Índico.",0],
    ["Moçambique","Fica no nordeste da África, sua única línga oficial é o português.",0],
    ["Zimbabwe","Nesse país há 16 idiomas oficiais.", 0],
    ["Marrocos","Desse país pode ser observado o Deserto do Saara e a belissima Mesquita Hassan II.",0],
    ["Egito","As Grandes Pirâmides, é um dos locais mais simbólicos e populares do Egito.",0],
    ["Tânzania","O monte Kilimanjaro, fica na Tânzania, e é um dos pontos mais altos da África.", 0],
    ["Etiópia","No Museu Nacional da Etiópia, há fósseis impressionantes, como o ser humano mais antigo já encontrado, de 3,2 milhões de anos atrás.", 0],
    ["Madagascar","A paisagem rochosa Tsingy de Bemaraha é uma reserva natural perfeita para os amantes de adrenalina.", 0],
    ["Sudão do Sul","Se encontra o povo Dinka, que é o mais alto de todo continente africano com uma altura média de 2,10m. O jogador mais alto da NBA, Manute Bol, é descendente desta tribo.", 0],
    ["Angola","País onde foi encontrado o maior diamante rosa dos últimos 300 anos.",0],
    ["Botsuana","País onde foi encontrado o terceiro maior diamante do mundo.",0]
]
let btn =document.querySelector('#btnMensagem')
let box=document.querySelector('#boxMensagem')
let titulo=document.querySelector("#titulo")
let clique=document.querySelector("#cliqueP")
let sorteio
let contagem

btn.addEventListener('click', function(){
    sorteio = parseInt(Math.random()*10)
    contagem = paises[sorteio][2]
    contagem += 1
    paises[sorteio][2] = contagem
    titulo.textContent = `${paises[sorteio][0]}`
    clique.textContent = `${paises[sorteio][1]}`
    if(paises[sorteio][2] ==1){
        box.textContent = `Esse país já apareceu por aqui ${paises[sorteio][2]} vez`
    } else{
        box.textContent = `Esse país já apareceu por aqui ${paises[sorteio][2]} vezes`
    }
})