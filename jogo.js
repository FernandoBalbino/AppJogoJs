var altura = 0;
var largura = 0;
var vidas = 1;
var som = document.querySelector('audio');
var tempo = 30;
var mute = 'off'
var criaMT = 1500;
var nivel = window.location.search;
nivel = nivel.replace('%20', '')
nivel = nivel.replace('?', '')
var res = nivel.split('|')
var count = 0;



if (res[0] === 'normal') {
	//1500
	criaMT = 1500;
} else if(res[0] === 'dificil'){
	//1000
	criaMT = 1000;
} else if(res[0] === 'chuck'){
	//750
	criaMT = 750;
} else{
	tempo = 10;
	criaMT = 500;
}


//Pegando largura e altura da tela atual;
function ajustaTamanhoPalcoJogo (argument) {
	 altura = window.innerHeight;
	 largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
	tempo -= 1;
	if(tempo < 0){
		clearInterval(cronometro);
		clearInterval(mosca)
		window.location.href = 'vitoria.html?' + count;
	} else{
		document.getElementById('cronometro').innerHTML = tempo;
	}
}, 1000)
function pRandom(){

if(res[1] == 'off'){
	som.play()
} else{
	som.pause();
    som.currentTime = 0;
}
// Removendo mosquito anterior caso exista
if(document.getElementById('mosca')){
	document.getElementById('mosca').remove();

	
	if(vidas > 3){
		window.location.href='fim_de_jogo.html?' + count;
	} else{
		document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
		vidas++
	}
	vidas++
} 

//Obtendo posições randomicas com base na função acima
var pX = Math.floor(Math.random() * largura) - 110;
var pY = Math.floor(Math.random() * altura) - 110;

pX = pX < 0 ? 0 : pX;
pY = pY < 0 ? 0 : pY;

// Criando imagem que vai ser gerada randomicamente (mosquito)

var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.setAttribute('class', tAleatorio() + ' ' + lAleatorio())
mosca.id = 'mosca'
mosca.style.position = 'absolute'
mosca.style.left = pX + 'px';
mosca.style.top = pY + 'px';



mosca.onclick = function(){
	count += 1;
	
	this.remove()
}
document.body.appendChild(mosca)
lAleatorio()
}


function tAleatorio (argument) {
	var classe = Math.floor(Math.random() * 3);
	switch (classe) {
		case 0: return 'm1'
			
		case 1: return 'm2'
		    
		case 2: return 'm3'
	}
}

function lAleatorio(){
	var classe = Math.floor(Math.random() * 2);
	switch (classe) {
		case 0: return 'l1'
			
		case 1: return 'l2'
	}

}