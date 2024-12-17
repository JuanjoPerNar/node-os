// Métodos de objeto y resultados

const usuario = {
    nombre : 'Alexis',
    curso : 'Fullstack',
    ciudad : 'Madrid'
}

// Object.keys() --> array con claves

console.log(Object.keys(usuario));

//// [ 'nombre', 'curso', 'ciudad' ]

// Object.values() --> array con valores

console.log(Object.values(usuario));

//// [ 'Alexis', 'Fullstack', 'Madrid' ]

// Object.entries() --> todo en array
console.log(Object.entries(usuario));
/* 
    [
        [ 'nombre', 'Alexis' ],
        [ 'curso', 'Fullstack' ],
        [ 'ciudad', 'Madrid' ]
    ]
*/

const user = [
    [ 'nombre', 'Alexis' ],
    [ 'curso', 'Fullstack' ],
    [ 'ciudad', 'Madrid' ]
]

// Object.fromEntries()
console.log(Object.fromEntries(user));

/*
    { 
        nombre: 'Alexis', 
        curso: 'Fullstack', 
        ciudad: 'Madrid' 
    }
*/