const os = require('node:os');

const datosInterface = () => {
    const interfaces = os.networkInterfaces();

    let resultado = [];

    for (let i in interfaces) {
        interfaces[i].forEach(datos => {            
            resultado.push({
                Interfaz: i,
                Familia: datos.family,
                Dirección: datos.address,
                Interno: datos.internal,
            });            
        });
    }
    return resultado
};

module.exports = { datosInterface };