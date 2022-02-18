let boton = document.getElementById('btn')
let imagen = document.getElementById('img')
let texto = document.getElementById('txt')

boton.addEventListener("click", () => {
	let random = Math.round(Math.random() * (6 - 1) + 1);

	if (random == 1) {
		console.log("Topo 1")
		imagen.src = "img/topo1.jpg";
	}
	else if (random == 2){
		console.log("Topo 2")
		imagen.src = "img/topo2.jpg";
	}
	else if (random == 3){
		console.log("Topo 3")
		imagen.src = "img/topo3.jpg";
	}
	else if (random == 4){
		console.log("Topo 4")
		imagen.src = "img/topo4.jpg";
	}
	else if (random == 5){
		console.log("Topo 5")
		imagen.src = "img/topo5.jpg";
	}
	else if (random == 6){
		console.log("Topo 6")
		imagen.src = "img/topo6.jpg";
	}
	else if (random == 7){
		console.log("Topo 7")
		imagen.src = "img/topo7.jpg";
	}
	else if (random == 8){
		console.log("Topo 8")
		imagen.src = "img/topo8.jpg";
	}
	else if (random == 9){
		console.log("Topo 9")
		imagen.src = "img/topo9.jpg";
	}
	else if (random == 10){
		console.log("Topo 10")
		imagen.src = "img/topo10.jpg";
	}
});