const users = require('../data/users.json');
function matchUsuarios(){
	let puntos = 0;
	let puntaje = []
	// Itera sobre cada usuarios
	for(let i = 0; i < users.length; i++){
		// Itera sobre los demás usuarios
		for(let j = i + 1; j < users.length; j++){
			// Itera sobre los intereses
			for(let k = 0; k < users[i].interests.length ; k++){
				// Itera sobre las respuestas
				for(let m = 0; m < users[i].interests[k].answers.length; m++){
					// Si el interes del usuario2 existe en los interes del usuario1 suma un punto
					if(users[i].interests[k].answers.includes(users[j].interests[k].answers[m])){
						puntos++;					
					}
				}
			}
			// Añade un objeto con el puntaje obtenido de la relacion de intereses similares
			puntaje.push({user: users[i].name, match: users[j].name, puntos: puntos})
			puntos = 0;
		}
		
		
	}
	console.log(puntaje)
    return puntaje
}	

module.exports = matchUsuarios;
