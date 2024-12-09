let horaLocal = document.getElementById("horaLocal");
let boton = document.querySelector(".boton");


function horaBritanica(){
	let [horaUK, minutosUK] = horaLocal.value.split(":").map(Number);
	let totalMinutosUK = minutosUK + parseFloat(5*60) + parseFloat(horaUK * 60);
	let nuevaHoraUK = Math.floor(totalMinutosUK / 60);
	let nuevosMinutosUK = totalMinutosUK % 60;
	nuevaHoraUK = nuevaHoraUK.toString().padStart(2, "0");
	nuevosMinutosUK = nuevosMinutosUK.toString().padStart(2, "0");
	document.getElementById("resultadoUK").textContent = "La hora en Reino Unido es:" + `${nuevaHoraUK}:${nuevosMinutosUK}`;
}

function horaNewYork(){
	let [horaNY, minutosNY] = horaLocal.value.split(":").map(Number);
	let totalMinutosNY = minutosNY + parseFloat(1*60) + parseFloat(horaNY * 60);
	let nuevaHoraNY = Math.floor(totalMinutosNY / 60);
	let nuevosMinutosNY = totalMinutosNY % 60;
	nuevaHoraNY = nuevaHoraNY.toString().padStart(2, "0");
	nuevosMinutosNY = nuevosMinutosNY.toString().padStart(2, "0");
	document.getElementById("resultadoNY").textContent = "La hora en New York es:" + `${nuevaHoraNY}:${nuevosMinutosNY}`;
}

function horaSeul(){
	let [horaSL, minutosSL] = horaLocal.value.split(":").map(Number);
	let totalMinutosSL = minutosSL + parseFloat(14*60) + parseFloat(horaSL * 60);
	let nuevaHoraSL = Math.floor(totalMinutosSL / 60);
	let nuevosMinutosSL = totalMinutosSL % 60;
	nuevaHoraSL = nuevaHoraSL.toString().padStart(2, "0");
	nuevosMinutosSL = nuevosMinutosSL.toString().padStart(2, "0");
	document.getElementById("resultadoSL").textContent = "La hora en Seul es:" + `${nuevaHoraSL}:${nuevosMinutosSL}`;
}

function horaRoma(){
	let [horaR, minutosR] = horaLocal.value.split(":").map(Number);
	let totalMinutosR = minutosR + parseFloat(6*60) + parseFloat(horaR * 60);
	let nuevaHoraR = Math.floor(totalMinutosR / 60);
	let nuevosMinutosR = totalMinutosR % 60;
	nuevaHoraR = nuevaHoraR.toString().padStart(2, "0");
	nuevosMinutosR = nuevosMinutosR.toString().padStart(2, "0");
	document.getElementById("resultadoR").textContent = "La hora en Roma es:" + `${nuevaHoraR}:${nuevosMinutosR}`;
}