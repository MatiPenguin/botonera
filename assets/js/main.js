var boton = document.getElementById('boton');
var boton2 = document.getElementById('boton2');
var boton3 = document.getElementById('boton3');
var boton4 = document.getElementById('boton4');
var boton5 = document.getElementById('boton5');
var boton6 = document.getElementById('boton6');
var volmas = document.getElementById('volmas');
var volmenos = document.getElementById('volmenos');

var botonloop = document.getElementById('botonloop');
var botonparar = document.getElementById('botonparar');
// var audio, playbtn, seek_bar;

// var funcion = function(){
// 	audio = new Audio("aud/cartonero.ogg");
// 	audio.src = "aud/cartonero.ogg";
// 	audio.loop = true;
// 	audio.play();
// }
var audioo = document.getElementById('audioo');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');
var audio4 = document.getElementById('audio4');
var audio5 = document.getElementById('audio5');
var heehee = document.getElementById('heehee');
var heeheee = document.getElementById('heeheee');
var heeheeee = document.getElementById('heeheeee');


var loopEstado = false;
var looop = document.getElementById('looop');
var heeheeEstado = 0;

var volumen = document.getElementById('volumen');

var loopF = function(){
	if (!loopEstado) {
		audioo.loop = true;
		audio2.loop = true;
		audio3.loop = true;
		audio4.loop = true;
		audio5.loop = true;
		loopEstado = true;
		looop.innerHTML = "Loop: Activo.";
		looop.style.color = "red";
		looop.style.fontSize = "20px";
			setTimeout(function(){
				looop.style.color = "black";
				looop.style.fontSize = "16px";
			}, 2500);
	}else{
		audioo.loop = false;
		audio2.loop = false;
		audio3.loop = false;
		audio4.loop = false;
		audio5.loop = false;
		loopEstado = false;
		looop.innerHTML = "Loop: Inactivo.";
		looop.style.color = "red";
		looop.style.fontSize = "20px";
			setTimeout(function(){
				looop.style.color = "black";
				looop.style.fontSize = "16px";
			}, 2500);	}
}

var parar = function(){
	audioo.pause();
	audio2.pause();
	audio3.pause();
	audio4.pause();
	audio5.pause();
}

var masvol = function(){
	audioo.volume+=0.1;
	audio2.volume+=0.1;
	audio3.volume+=0.1;
	audio4.volume+=0.1;
	audio5.volume+=0.1;
	volumen.textContent = "Volumen: " + audioo.volume.toFixed(1);
	volumen.style.color = "red";
	volumen.style.fontSize = "20px";
	setTimeout(function(){
		volumen.style.color = "black";
		volumen.style.fontSize = "16px";
			}, 2500);
}
var menosvol = function(){
	audioo.volume-=0.1;
	audio2.volume-=0.1;
	audio3.volume-=0.1;
	audio4.volume-=0.1;
	audio5.volume-=0.1;
	if (audioo.volume < 0.1) {
		volumen.textContent = " Volumen: 0";
		volumen.style.color = "red";
		volumen.style.fontSize = "20px";
			setTimeout(function(){
				volumen.style.color = "black";
				volumen.style.fontSize = "16px";
			}, 2500);
	}else{
	volumen.textContent = "Volumen: " + audioo.volume.toFixed(1);
	volumen.style.color = "red";
	volumen.style.fontSize = "20px";
	setTimeout(function(){
		volumen.style.color = "black";
		volumen.style.fontSize = "16px";
			}, 2500);
	}
}

var funcion = function(){
	audioo.play();
}

var funcion2 = function(){
	audio2.play();
}

var funcion3 = function(){
	audio3.play();
}

var funcion4 = function(){
	audio4.play();
}

var funcion5 = function(){
	audio5.play();
}

var funcion6 = function(){
	if (heeheeEstado == 0) {
		heehee.play();
		heeheeEstado = 1;
	}else if (heeheeEstado == 1) {
		heeheee.play();
		heeheeEstado = 2;
	}else if (heeheeEstado == 2) {
		heeheeee.play();
		heeheeEstado = 0;
	};
}

/*----------------------*/
var emergente = document.getElementById('emergente');
var si = document.getElementById('si');
var no = document.getElementById('no');
var nada = document.getElementById('nada');
var wrap = document.getElementById('wrap');

setTimeout(function(){
	emergente.style.display = "block";
	nada.style.display = "block";
}, 2000);


boton.addEventListener("click", funcion);
boton2.addEventListener("click", funcion2);
boton3.addEventListener("click", funcion3);
boton4.addEventListener("click", funcion4);
boton5.addEventListener("click", funcion5);
boton6.addEventListener("click", funcion6);
botonloop.addEventListener("click", loopF);
botonparar.addEventListener("click", parar);
volmas.addEventListener("click", masvol);
volmenos.addEventListener("click", menosvol);
