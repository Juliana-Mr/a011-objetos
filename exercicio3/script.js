const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//a)

const pokemon2= {...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

//b)

pokemon1.ataques1 = []

const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100    
}

pokemon1.ataques1.push(ataque)


//c)

pokemon2.ataques1 = pokemon1.ataques1


//d)

pokemon1.ataques2 = [{
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}]

//e)

pokemon2.ataques2 = [{         //o exercício pedia para"criar" o ataque
    nome: "Jato de Água",      //isso é o mesmo que "adicionar"?
    dano: 40,
    tipo: "Água",
    precisao: 100
}]

//f)

console.log(pokemon1)
console.log(pokemon2)