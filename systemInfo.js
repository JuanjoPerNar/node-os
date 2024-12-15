const { datosOs } = require('./osModule');
const { datosInterface } = require('./networkModule');

console.log('Datos del sistema operativo:', datosOs());
console.log('Datos de las interfaces de red:', datosInterface());

