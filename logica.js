const nomeTimeA = document.querySelector('#nomeTimeA')
const nomeTimeB = document.querySelector('#nomeTimeB')

const pontuacaoA = document.querySelector('#pontuacaoA')
const pontuacaoB = document.querySelector('#pontuacaoB')

let setA = document.querySelector('#setaA')
let setB = document.querySelector('#setaB')

let setTimeA = 0
let setTimeB = 0


let pontoA = 0
let pontoB = 0


//========= PERGUNTAR O NOME DO TIME

function perguntaNomeA(){
    let nomeA = prompt('Digite o nome do time A')
    let resultado = nomeA
    nomeTimeA.innerText = resultado
}

function perguntaNomeB(){
    let nomeB = prompt('Digite o nome do time B')
    let resultado = nomeB
    nomeTimeB.innerText = resultado
}

function zerarPlacar(){
    pontoA = 0
    pontoB = 0
    pontuacaoA.innerText = pontoA
    pontuacaoB.innerText = pontoB
}

//========= SOMAR AO CLICAR
function acrescentaValorA(){
    pontoA++
    pontuacaoA.innerText = pontoA

    if(pontoA > 25 && pontoA - pontoB >= 2){
        //A ganhou o set
        setTimeA++
        setA.innerText = setTimeA
       
        zerarPlacar()
        

    }
}

function acrescentaValorB(){
    pontoB++
    pontuacaoB.innerText = pontoB

    if(pontoB > 25 && pontoB - pontoA >= 2){
          //B ganhou o set
        setTimeB++
        setB.innerText = setTimeB
        
        zerarPlacar()
    }
}





//=================NOME==========================
nomeTimeA.addEventListener('click', perguntaNomeA)
nomeTimeB.addEventListener('click', perguntaNomeB)

//=================PONTO==========================
pontuacaoA.addEventListener('click', acrescentaValorA)
pontuacaoB.addEventListener('click', acrescentaValorB)