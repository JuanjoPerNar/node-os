const os = require('node:os');

const datosOs = () => {
    return {
        Nombre: os.platform(),
        Tipo: os.type(),
        Versión: os.version(),
        Arquitectura: os.arch(),
        CPUs: os.cpus().length,
        MemoriaTotal: `${(os.totalmem() / 1048576).toFixed(3)} MB`,
        MemoriaLibre: `${(os.freemem() / 1048576).toFixed(3)} MB`,
    };
}; 

module.exports = { datosOs };